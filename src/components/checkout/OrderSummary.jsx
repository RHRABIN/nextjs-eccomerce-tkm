'use client'
import PaymentClient from '@/clientSideRender/payment/PaymentClient';
import { applyCoupon, getAddToCartDataByEmail } from '@/config/addCartToapi';
import { baseUrl } from '@/config/baseUrl';
import { AuthContext } from '@/context/AuthProvider';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const OrderSummary = () => {
    const { user, isCartSuccess, deleteSuccess, addressSuccess } = useContext(AuthContext);
    const { setAddressSuccess } = useContext(AuthContext)
    
    const [cartData, setCartData] = useState(null)
    const [couponCode, setCouponCode] = useState("")
    const [couponMsg, setCouponMsg] = useState("")

    const { discount, discountAmount, shippingCharge, subtotal, total, cartData:userCartData } = cartData?.data?.data || {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAddToCartDataByEmail(user?.data?.user?.email);
                if (data) {
                    setCartData(data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()

        if (isCartSuccess || deleteSuccess) {
            fetchData()
        }
    }, [user?.data?.user?.email, isCartSuccess, deleteSuccess, addressSuccess]);

    const handleCoupon = async (e)=>{
        e.preventDefault();

        const modifiedData = {
            couponCode: couponCode,
            cartId: userCartData._id,
            email: user?.data?.user?.email,
        };
        try {
           const response = await axios.post(`${baseUrl}/coupon/verify/${modifiedData.email}`, modifiedData);
            toast.success(response?.data?.message || "Successfyllu applied coupon");
            setCouponMsg({message: `${couponCode} coupon applied success`, status: true})
            setAddressSuccess(true)
        } catch (error) {
            toast.error(error.response.data.message || 'Please enter valid code')
            setCouponMsg({message:  `${couponCode} ${error.response.data.message || 'Please enter valid code'}`, status: false})
        }
    }

    return (
        <div className='border rounded-md bg-white shadow-lg p-4'>
            {couponMsg && <p className={`${couponMsg.status ? 'text-green-400' : 'text-red-500'} p-1`}>{couponMsg.message}</p>}
            <form onSubmit={handleCoupon} className='flex items-center justify-between gap-2'>
                <input onChange={(e)=> setCouponCode(e.target.value)} value={couponCode} className='border border-dark outline-none p-2 w-full rounded-md placeholder:text-xs' placeholder='Gift Card or Discount Code' type="text" />
                <button type='submit' className='bg-secondary text-white px-4 py-2 font-medium hover:opacity-90 rounded-md'>Apply</button>
            </form>

            <h3 className='text-gray-800 font-medium text-lg my-4'>Order Summary</h3>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Items Total</p>
                <p>{subtotal} TK</p>
            </span>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Discount ( {discount ? discount : '0'} )</p>
                <p>- {discountAmount} TK</p>
            </span>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Delivery Fee</p>
                <p>{shippingCharge} TK</p>
            </span>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Total:</p>
                <p>{total} TK</p>
            </span>

            <PaymentClient
                email={user?.data?.user?.email}
                product={cartData?.data?.data}
            />
        </div>
    );
};

export default OrderSummary;