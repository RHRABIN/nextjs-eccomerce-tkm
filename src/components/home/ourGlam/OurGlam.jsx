import GlamCard from '@/components/card/GlamCard';
import React from 'react';

const OurGlam = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <div className='border-dotted border-b pb-4 relative'>
                    <h1 className='uppercase text-3xl font-semibold text-center'>On our glam
                    </h1>
                    <button className='absolute right-0 bottom-4 border border-primary hover:bg-primary text-primary hover:text-white uppercase text-sm py-2 px-6 mt-3'>View All</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5'>
                    <GlamCard />
                    <GlamCard />
                    <GlamCard />
                    <GlamCard />
                </div>
            </div>
        </div>
    );
};

export default OurGlam;