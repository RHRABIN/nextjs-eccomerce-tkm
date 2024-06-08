'use client'
import { placeSingleOrderByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const PaymentClient = ({ email, product }) => {
    const [paymentType, setPaymentType] = useState('COD');
    const { setCheckoutCart, setIsCartSuccess } = useContext(AuthContext)
    const { discountAmount, shippingCharge, total, isInsideDhaka } = product || {};

    const handlePayment = async () => {
        if (!paymentType) {
            toast.error('Please Select Payment Method')
        } else if (paymentType === 'COD') {
            const modifiedData = {
                paymentType: paymentType,
                totalAmount: total,
                shippingCharge: shippingCharge,
                status: 'pending',
                discountAmount: discountAmount,
            }
            if (modifiedData) {
                const response = await placeSingleOrderByEmail(email, modifiedData)
                if (response) {
                    toast.success('Order Successfull')
                    setCheckoutCart(true)
                    setIsCartSuccess(true)
                }
            }else{
            toast.error('Something went wring please try again')
            }
        }
        else if(paymentType === 'SSLCOMMERZ'){
            toast.success('Online payment cooming soon')
            // window.location.href = `${import.meta.env.VITE_APP_API_URL
            // }/ssl/ssl-request/${userEmail}`;
            // window.location.href = `http://localhost:8000/v1/ssl/ssl-request/${email}`;
        }else{
            toast.error('Something went wring please try again')
        }
    }

    return (
        <>
        {
            !isInsideDhaka && <p className='mt-3 text-sm font-semibold'>
                Your Selected address is outside Dhaka. Please pay minimum 200 tk to confirm your order.
            </p>
        }
            <div className={`py-2 font-semibold text-sm flex items-center gap-2 ${isInsideDhaka ? ' justify-between' : ' justify-center'}`}>
                
                    <label htmlFor="cash-on" className={`${paymentType === 'COD' ? 'bg-primary text-white' : 'bg-white'} cursor-pointer text-xs md:text-sm border-primary border py-1 px-2 rounded-md w-1/2 text-center`}>
                    Cash On Delivery</label>
                <input onChange={(e) => setPaymentType(e.target.value)} type="radio" id="cash-on" value='COD' name="paymentMethod" className="focus:ring-0 hidden" />
                
                {/* {
                    isInsideDhaka && <>
                        <label htmlFor="cash-on" className={`${paymentType === 'COD' ? 'bg-primary text-white' : 'bg-white'} cursor-pointer text-xs md:text-sm border-primary border py-1 px-2 rounded-md w-1/2 text-center`}>
                        Cash On Delivery</label>
                    <input onChange={(e) => setPaymentType(e.target.value)} type="radio" id="cash-on" value='COD' name="paymentMethod" className="focus:ring-0 hidden" />
                    </>
                }

                <label htmlFor="online" className={`${paymentType === 'SSLCOMMERZ' ? 'bg-primary text-white' : 'bg-white'} cursor-pointer text-xs md:text-sm border-primary border py-1 px-2 rounded-md text-center ${isInsideDhaka ? 'w-1/2' : 'w-4/5 mt-4'}`}>
                    Pay Now
                </label> */}
                <input onChange={(e) => setPaymentType(e.target.value)} type="radio" id="online" value='SSLCOMMERZ' name="paymentMethod" className="focus:ring-0 hidden" />
            </div>
           {
             <div className='mt-4 flex items-center justify-center'>
             <button onClick={handlePayment} className='bg-secondary font-medium text-white px-6 py-1.5 rounded-md hover:opacity-90'>Place Order</button>
            </div> 
           }
        </>
    );
};

export default PaymentClient;