import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/1.webp'
import CheckoutCardActionsButton from '@/clientSideRender/checkout/CheckoutCardActionsButton';

const ChekoutProductCard = () => {
    return (
        <div className='flex border p-4'>
            <div className='w-1/2 flex gap-2'>
                <div className='w-1/4'>
                    <Image className='w-full border rounded' height={720} width={1280} src={img} />
                </div>
                <div className='w-3/4'>
                    <p className='text-sm font-medium'>Onion Newpair Sunscreen SPF 40 PA+++ 50ml</p>
                    <p className='text-sm font-light mt-2'>Size: 50ml</p>
                </div>
            </div>
            <div className='w-1/2 flex gap-2 justify-between'>
                <div className='w-1/2'>
                    <p className='text-center font-semibold'><span className='font-[auto]'>৳ </span>1500</p>
                </div>
                <div className='w-1/2'>
                    <CheckoutCardActionsButton />
                </div>
            </div>
        </div>
    );
};

export default ChekoutProductCard;