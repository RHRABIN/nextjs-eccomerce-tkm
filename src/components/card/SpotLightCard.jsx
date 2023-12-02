import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/s1.webp'

const SpotLightCard = () => {
    return (
        <div className='cursor-pointer'>
            <Image className='w-full h-auto' height={720} width={1280} src={img} />
            <div className='flex flex-col items-center p-4'>
                <h1 className='text-gray-700 font-semibold text-xl text-center mb-4'>New Arrivals from haruharu</h1>
                <p className='text-dark leading-6 line-clamp-3 text-center'>Discover haruharu's fermented black rice line, a revolutionary skincare innovation. Harnessing the power of nature's finest ingredients, this collection offers transformative benefits for your skin providing radiance and nourishment.</p>
                <button className='border border-primary hover:bg-primary text-primary hover:text-white uppercase text-sm py-2 px-6 mt-3'> Shop now</button>
            </div>
        </div>
    );
};

export default SpotLightCard;