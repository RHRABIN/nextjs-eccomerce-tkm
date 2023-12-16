import Image from 'next/image';
import React from 'react';
import blogImg from '../../../../public/assets/s2.webp'
import Link from 'next/link';
import RecentBlogCard from '@/components/card/RecentBlogCard';

const BlogDetailsPage = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='md:col-span-3'>
                    <h1 className='text-2xl font-medium text-gray-800'>See what our latest korean mall community members have to say about</h1>
                    <p className='text-gray-800 font-light mt-2 md:mt-0'>Posted on: Sun Jul 23 2023</p>
                    <div className='my-5'>
                        <Image className='w-full h-auto' height={720} width={1280} src={blogImg} alt='blog' />
                    </div>
                    <div className='flex flex-wrap gap-2 mt-5'>
                        <span className='bg-[rgb(245,245,245)] p-1 text-sm font-light'>Biome</span>
                        <span className='bg-[rgb(245,245,245)] p-1 text-sm font-light'>Centella Asiatica Extract</span>
                        <span className='bg-[rgb(245,245,245)] p-1 text-sm font-light'>Anti Ageing</span>
                        <span className='bg-[rgb(245,245,245)] p-1 text-sm font-light'>Skin Barrier Repairing</span>
                        <span className='bg-[rgb(245,245,245)] p-1 text-sm font-light'>Bifida Ferment Lysate</span>
                    </div>

                    <p className='font-light mt-4'>See what our latest korean mall community members have to say aboutSee what our latest korean mall community members have to say aboutSee what our latest korean mall community members have to say aboutSee what our latest korean mall community members have to say about</p>
                </div>
                <div className='md:col-span-1'>
                    <h1 className='text-lg font-medium text-gray-800 border-b border-dotted border-b-dark pb-4'>Recent Blogs</h1>

                    <div className='mt-6'>
                        {
                            Array(5).fill().map((_, idx) =>
                                <RecentBlogCard
                                    key={idx}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsPage;