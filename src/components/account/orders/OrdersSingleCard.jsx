import Image from 'next/image';
import React from 'react';
import ordImg from '../../../../public/assets/2.webp'

const OrdersSingleCard = () => {
    return (
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
    );
};

export default OrdersSingleCard;