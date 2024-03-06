import Image from 'next/image';
import React from 'react';

const OrdersSingleCard = ({ orderProd, status }) => {
    const { name, images } = orderProd?.product || {};

    return (
        <div className='flex items-center justify-between '>
            <div className='flex items-center md:gap-x-4'>
                <Image src={images?.[0]} height={720} width={1280} quality={100} alt={name} className='h-20 w-20 md:h-32 md:w-32' />

                <div>
                    <h3 href='/' className='text-blue-600 text-sm font-light'>{name}</h3>
                    <p className='text-xs md:text-sm font-light my-1 bg-slate-200 rounded-full w-fit px-2 py-1'>Order {status}</p>
                </div>
            </div>

            <div className='text-center'>
                <p>Qty</p>
                <p>{orderProd?.quantity}</p>
            </div>
        </div>
    );
};

export default OrdersSingleCard;