import GlamCard from '@/components/card/GlamCard';
import { getAllBlogsData } from '@/config/blogApi';
import Link from 'next/link';
import React from 'react';

const OurGlam = async () => {
    const [blogsResponse] = await Promise.all([
        getAllBlogsData()
    ])

    const { data: blogs } = blogsResponse || {};


    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <div className='border-dotted border-b pb-4 relative flex items-center justify-between md:block mx-2 md:mx-0'>
                    <h1 className='uppercase text-2xl md:text-3xl font-semibold text-center'>On our glam
                    </h1>
                    <Link href='/blog' className='absolute right-0 bottom-4 border border-primary hover:bg-primary text-primary hover:text-white uppercase text-sm py-2 px-6 mt-3'>View All</Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5'>
                    {
                        blogs?.data?.map(blog =>
                            <GlamCard
                                key={blog?._id}
                                blog={blog}
                            />

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default OurGlam;