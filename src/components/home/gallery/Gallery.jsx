import Image from 'next/image';
import React from 'react';
import img from '../../../../public/assets/3.webp'

const Gallery = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='text-secondary text-3xl font-semibold text-center mb-5'>#The Korean Mall</h1>
                <p className='text-center font-[300] w-3/5 mx-auto'>See what our latest korean mall community members have to say about our products.
                    Here at The Korean Mall we believe in Beauty with Reason and we love to see how we have
                    helped you achieve that skin glow you have always dreamt about.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                    {
                        Array(8).fill().map((_, idx) =>
                            <Image key={idx} className='w-full h-auto' height={720} width={1280} src={img} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;