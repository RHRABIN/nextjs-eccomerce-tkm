import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/s2.webp'

const GlamCard = () => {
    return (
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden'>
                <Image className='w-full h-auto hover:scale-105 duration-500 transition' height={720} width={1280} src={img} />
            </div>
            <div className='flex flex-col items-center p-4'>
                <h1 className='text-gray-700 font-semibold text-lg mb-4'>10 Must have camera Accessories You Need Now</h1>
                <p className='text-dark leading-6 line-clamp-3'>Discover haruharu's fermented black rice line, a revolutionary skincare innovation. Harnessing the power of nature's finest ingredients, this collection offers transformative benefits for your skin providing radiance and nourishment.</p>
                <button className='border border-primary hover:bg-primary text-primary hover:text-white uppercase text-sm py-2 px-6 mt-3'>Read More</button>
            </div>
        </div>
    );
};

export default GlamCard;