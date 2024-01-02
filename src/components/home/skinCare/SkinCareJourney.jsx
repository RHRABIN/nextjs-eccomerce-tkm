import React from 'react';
import SkinCareNavTab from './SkinCareNavTab';
import MobileSkinCare from './MobileSkinCare';
import { getProductsByType } from '@/config/productsApi';

const SkinCareJourney = async () => {
    const [bestSellerData] = await Promise.all([
        getProductsByType('best-seller')
    ]);


    const { data: bestSellingProducts } = bestSellerData;
    
    return (
        <div className='container mx-auto my-5 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <div className='flex flex-col items-center'>
                    <h1 className='uppercase text-lg font-[300] md:font-[400] md:text-4xl'>START YOUR SKIN CARE JOURNEY</h1>
                    <p className='w-1/3 text-center mt-4 hidden md:block'>Skin care is a personal journey and we're here to guide you along the way. Live chat our skin care experts for more help.</p>
                    <p className='text-center font-[300] text-secondary mt-2 md:hidden'>Shop By</p>
                </div>
            </div>
            <SkinCareNavTab bestSellingProducts={bestSellingProducts?.result} />
            <MobileSkinCare bestSellingProducts={bestSellingProducts?.result} />
        </div>
    );
};

export default SkinCareJourney;