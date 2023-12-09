import Image from 'next/image';
import React from 'react';
import ordImg from '../../../../public/assets/2.webp'
import OrderDetailsClient from '@/clientSideRender/orders/OrderDetailsClient';

const OrdersCard = () => {
    return (
        <div className='border rounded p-4'>
            <div className='flex items-start justify-between mb-2'>
                <div>
                    <h4 className='text-blue-500 text-lg'>Order Id: BKON973630</h4>
                    <p className='text-sm font-[300]'>Date: 12/9/2023, 12:01:02 PM</p>
                </div>
                <div>
                    <p className='text-sm font-[500]'>Total: 2000</p>
                    {/* <button className='border-none text-sm uppercase text-blue-500'>DETAILS</button> */}
                    <OrderDetailsClient />
                </div>
            </div>
            <div className='flex items-center justify-between my-2'>
                <div className='flex items-center gap-4'>
                    <Image src={ordImg} height={720} width={1280} className='h-32 w-32' />

                    <div>
                        <h3 href='/' className='text-blue-600 text-lg font-[300]'>Advanced Snail 92 All In One Cream 100g</h3>
                        <p className='text-sm font-[300] my-1 bg-slate-200 rounded-full w-fit px-2 py-1'>Order pending</p>
                    </div>
                </div>

                <div className='text-center'>
                    <p>Qty</p>
                    <p>1</p>
                </div>
            </div>
            <div className='flex items-center justify-end'>
                <button className='hover:bg-red-500 hover:text-white px-3 py-1.5 rounded text-xs border border-red-500'>Cancel</button>
            </div>
        </div>

    );
};

export default OrdersCard;