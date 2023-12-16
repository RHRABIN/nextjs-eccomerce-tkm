import Link from 'next/link';
import React from 'react';
import blogImg from '../../../public/assets/s2.webp'
import Image from 'next/image';

const RecentBlogCard = () => {
    return (
        <Link href={`/blog/See what our latest korean mall community`} className='group'>
            <h1 className='text-lg font-medium text-gray-800 line-clamp-2 group-hover:text-blue-600'>See what our latest korean mall community members have to say about</h1>
            <div className='flex items-start mt-2 gap-2 mb-4 border-b border-dotted border-b-dark pb-4'>
                <p className='line-clamp-3 font-light w-3/4'>See what our latest korean mall community members have to say aboutSee what our latest korean mall community members have to say aboutSee what our latest korean mall community members have to say aboutSee what our latest korean mall community members have to say about</p>
                <div className='w-1/4'>
                    <Image height={720} width={1280} src={blogImg} alt='blog' className='w-full h-[4.5rem]' />
                </div>
            </div>
        </Link>
    );
};

export default RecentBlogCard;