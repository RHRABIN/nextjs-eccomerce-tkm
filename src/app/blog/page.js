import Image from 'next/image';
import React from 'react';
import waveImg from '../../../public/assets/wave-border.svg'
import GlamCard from '@/components/card/GlamCard';

const BlogPage = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='mx-4 md:mx-0'>
                <div className='flex flex-col items-center mb-10'>
                    <p className='text-gray-800 text-2xl mb-3'>All Blogs</p>
                    <Image className='w-fit' height={500} width={1000} src={waveImg} alt='' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        Array(9).fill().map((_, idx) =>
                            <GlamCard key={idx} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogPage;