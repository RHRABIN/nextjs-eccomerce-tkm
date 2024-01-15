import Image from 'next/image';
import React from 'react';
import CheckoutCardActionsButton from '@/clientSideRender/checkout/CheckoutCardActionsButton';

const ChekoutProductCard = ({ product }) => {
    const { name, images, size, offerPrice, price } = product || {};
    console.log('product', product)
    return (
        <div className='md:flex border p-2 rounded'>
            <div className='md:w-1/2 flex gap-2'>
                <div className='w-1/4'>
                    <Image className='w-full border rounded' height={720} width={1280} src={images?.[0]} alt={name}/>
                </div>
                <div className='w-3/4'>
                    <p className='text-sm font-medium'>{name}</p>
                    <p className='text-sm font-light mt-2'>Size: {size}</p>
                </div>
            </div>
            <div className='md:w-1/2 flex items-center md:items-start gap-2 justify-between mt-2 md:mt-0'>
                <div className='w-1/2 flex md:block justify-start'>
                    <p className='text-center font-semibold'><span className='font-[auto]'>৳ </span>{offerPrice ? offerPrice : price}</p>
                </div>
                <div className='w-1/2'>
                    <CheckoutCardActionsButton />
                </div>
            </div>
        </div>
    );
};

export default ChekoutProductCard;