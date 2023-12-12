import PaymentClient from '@/clientSideRender/payment/PaymentClient';
import React from 'react';

const OrderSummary = () => {
    return (
        <div className='border rounded-md bg-white shadow-lg p-4'>
            <div className='flex items-center justify-between gap-2'>
                <input className='border border-dark outline-none p-2 w-full rounded-md placeholder:text-xs' placeholder='Gift Card or Discount Code' type="text" />
                <button className='bg-secondary text-white px-4 py-2 font-medium hover:opacity-90 rounded-md'>Apply</button>
            </div>

            <h3 className='text-gray-800 font-medium text-lg my-4'>Order Summary</h3>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Items Total</p>
                <p>0.00 TK</p>
            </span>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Discount (0)</p>
                <p>- 0 TK</p>
            </span>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Delivery Fee</p>
                <p>100 TK</p>
            </span>
            <span className='flex items-center justify-between'>
                <p className='font-medium text-gray-800'>Total:</p>
                <p>0.00 TK</p>
            </span>

            <PaymentClient />

            <div className='mt-4 flex items-center justify-center'>
                <button className='bg-secondary font-medium text-white px-4 py-1.5 rounded-md hover:opacity-90'>Place Order</button>
            </div>
        </div>
    );
};

export default OrderSummary;