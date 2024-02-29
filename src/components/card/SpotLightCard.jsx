import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const SpotLightCard = ({ product }) => {
    const { name, slug, spotLightDescription, image } = product || {};
    return (
        <div className='cursor-pointer'>
            <Image className='w-full h-[350px] md:h-[30rem]' height={720} width={1280} quality={100} src={image} alt={name} />
            <div className='flex flex-col items-center p-4'>
                <h1 className='text-gray-800 font-medium text-xl text-center md:mb-3 mb-4'>{name}</h1>
                <p className='text-gray-700 leading-6 line-clamp-3 text-sm text-center font-light px-2 min-h-[72px] md:w-4/5'>{spotLightDescription}</p>
                <Link href={`/campaign-products/${slug}`} className='border border-primary hover:bg-primary text-primary hover:text-white uppercase text-sm py-2 px-6 mt-3'> Shop now</Link>
            </div>
        </div>
    );
};

export default SpotLightCard;