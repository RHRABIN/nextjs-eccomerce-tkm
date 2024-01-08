import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import DangerHtml from '@/clientSideRender/dangerHtml/DangerHtml';

const GlamCard = ({ blog }) => {
    const { blogTitle, slug, description, image } = blog || {};
    return (
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden'>
                <Image className='w-full h-auto md:h-80 hover:scale-105 duration-500 transition' height={720} width={1280} quality={100} src={image} alt={blogTitle} />
            </div>
            <div className='flex flex-col items-center p-4'>
                <h1 className='text-gray-700 font-medium text-lg mb-4 text-center line-clamp-2'>{blogTitle}</h1>
                <div className='text-dark leading-6 line-clamp-3 text-center'>
                    <DangerHtml getText={description}/>
                </div>
                <Link href={`/blog/${slug}`} className='border border-primary hover:bg-primary text-primary hover:text-white uppercase text-sm py-2 px-6 mt-3'>Read More</Link>
            </div>
        </div>
    );
};

export default GlamCard;