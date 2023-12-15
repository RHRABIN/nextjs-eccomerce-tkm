import SpotLightCard from '@/components/card/SpotLightCard';
import React from 'react';

const SkinCareSpotLight = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-2xl lg:text-3xl font-semibold text-center border-dotted border-b pb-4'>SKIN CARE SPOTLIGHT</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                    <SpotLightCard />
                    <SpotLightCard />
                    <SpotLightCard />
                </div>
            </div>
        </div>
    );
};

export default SkinCareSpotLight;