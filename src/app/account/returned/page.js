import OrdersSingleCard from '@/components/account/orders/OrdersSingleCard';
import React from 'react';

const ReturnPage = () => {
    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>View Return</h1>

            <div className='mt-4'>
                <div className='border rounded p-4'>
                    <div className='flex items-start justify-between mb-2'>
                        <div>
                            <h4 className='text-blue-500 text-base md:text-lg'>Order Id: BKON973630</h4>
                            <p className='text-sm font-[300]'>Date: 12/9/2023, 12:01:02 PM</p>
                        </div>
                        <div>
                            <p className='text-sm font-[500]'>Total: 2000</p>
                        </div>
                    </div>
                    <OrdersSingleCard />
                    <div className='flex items-center justify-end'>
                        <button className='hover:bg-red-500 hover:text-white px-3 py-1.5 rounded text-xs border border-red-500'>Returned</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnPage;