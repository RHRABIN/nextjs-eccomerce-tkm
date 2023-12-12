'use client'
import React, { useState } from 'react';

const PaymentClient = () => {
    const [payment, setPayment] = useState('')
    return (
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
    );
};

export default PaymentClient;