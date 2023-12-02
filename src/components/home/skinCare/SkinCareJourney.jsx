import React from 'react';
import SkinCareNavTab from './SkinCareNavTab';

const SkinCareJourney = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <div className='flex flex-col items-center'>
                    <h1 className='uppercase text-4xl'>START YOUR SKIN CARE JOURNEY</h1>
                    <p className='w-1/3 text-center mt-4'>Skin care is a personal journey and we're here to guide you along the way. Live chat our skin care experts for more help.</p>
                </div>
            </div>
            <SkinCareNavTab />
        </div>
    );
};

export default SkinCareJourney;