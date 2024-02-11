import SpotLightCard from '@/components/card/SpotLightCard';
import { getBottomSpotlight } from '@/config/spotLightApi';
import React from 'react';

const SpfOnTheGo = async () => {
    const [campaignProducts] = await Promise.all([
        getBottomSpotlight()
    ]);

    const { data: products } = campaignProducts || {};
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-2xl md:text-3xl font-semibold text-center border-dotted border-b pb-4 mt-16 md:mt-0'>Easy spf on the go</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                    {
                        products?.data?.map(product =>
                            <SpotLightCard
                                key={product?._id}
                                product={product}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SpfOnTheGo;