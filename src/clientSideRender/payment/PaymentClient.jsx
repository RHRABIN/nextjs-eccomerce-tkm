'use client'
import { placeSingleOrderByEmail } from '@/config/addCartToapi';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const PaymentClient = ({ email, product }) => {
    const [payment, setPayment] = useState('');
    const { discountAmount, shippingCharge, total } = product || {};

    const handlePayment = async () => {
        if (!payment) {
            toast.error('Please Select Payment Method')
        } else if (payment === 'COD') {
            const modifiedData = {
                addressId: '54f4sr9w98a4de49',
                paymentType: payment,
                totalAmount: total,
                shippingCharge: shippingCharge,
                status: 'pending',
                discountAmount: discountAmount,
                shippingPhone: '01772781540'
            }
            if (modifiedData) {
                const response = await placeSingleOrderByEmail(email, modifiedData)
                console.log(response)
            }
            toast.success('Order Successfull')
        }
    }

    return (
        <>
            <div className='py-4 font-semibold text-sm flex justify-between my-5 md:my-10 items-center gap-2'>
                <label htmlFor="cash-on" className={`${payment === 'COD' ? 'bg-blue-600 text-white' : 'bg-white'} cursor-pointer text-xs md:text-sm border-blue-600 border py-1 px-2 rounded-md w-1/2 text-center`}>
                    Cash On Delivery
                </label>
                <input onChange={(e) => setPayment(e.target.value)} type="radio" id="cash-on" value='COD' name="paymentMethod" className="focus:ring-0 hidden" />

                <label htmlFor="online" className={`${payment === 'SSLCOMMERZ' ? 'bg-blue-600 text-white' : 'bg-white'} cursor-pointer text-xs md:text-sm border-blue-600 border py-1 px-2 rounded-md w-1/2 text-center`}>
                    Pay Now
                </label>
                <input onChange={(e) => setPayment(e.target.value)} type="radio" id="online" value='SSLCOMMERZ' name="paymentMethod" className="focus:ring-0 hidden" />
            </div>
            <div className='mt-4 flex items-center justify-center'>
                <button onClick={handlePayment} className='bg-secondary font-medium text-white px-4 py-1.5 rounded-md hover:opacity-90'>Place Order</button>
            </div>
        </>
    );
};

export default PaymentClient;