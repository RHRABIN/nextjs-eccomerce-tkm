'use client'
import PaymentClient from '@/clientSideRender/payment/PaymentClient';
import { getAddToCartDataByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';

const OrderSummary = () => {
    const { user, isCartSuccess, deleteSuccess } = useContext(AuthContext);
    const [cartData, setCartData] = useState(null)

    const { discount, discountAmount, shippingCharge, subtotal, total } = cartData?.data?.data || {};

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
    }, [user?.data?.user?.email, isCartSuccess, deleteSuccess])

    return (
        <div className='border rounded-md bg-white shadow-lg p-4'>
            <div className='flex items-center justify-between gap-2'>
                <input className='border border-dark outline-none p-2 w-full rounded-md placeholder:text-xs' placeholder='Gift Card or Discount Code' type="text" />
                <button className='bg-secondary text-white px-4 py-2 font-medium hover:opacity-90 rounded-md'>Apply</button>
            </div>

            <h3 className='text-gray-800 font-medium text-lg my-4'>Order Summary</h3>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Items Total</p>
                <p>{subtotal} TK</p>
            </span>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Discount (0)</p>
                <p>- {discount} TK</p>
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