import Image from 'next/image';
import React from 'react';
import { getAllCommunity } from '@/config/communityApi';

const Gallery = async () => {
    const { data: galleries } = await getAllCommunity() || {};

    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='text-secondary text-2xl md:text-3xl font-semibold text-center mb-5'>#The Korean Mall</h1>
                <p className='text-center font-light md:w-3/5 mx-auto'>See what our latest korean mall community members have to say about our products.
                    Here at The Korean Mall we believe in Beauty with Reason and we love to see how we have
                    helped you achieve that skin glow you have always dreamt about.</p>

                <div className='grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mt-10'>
                    {
                        galleries?.data?.map(photo =>
                            <Image key={photo?._id} className='w-full h-36 md:h-80' height={720} width={1280} src={photo?.image} alt='community-image' />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;