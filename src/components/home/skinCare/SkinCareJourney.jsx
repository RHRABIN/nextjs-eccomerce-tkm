import React from 'react';
import SkinCareNavTab from './SkinCareNavTab';
import MobileSkinCare from './MobileSkinCare';
import { getProductsByType } from '@/config/productsApi';
import { getCategoryByTitle } from '@/config/categoriesApi';

const SkinCareJourney = async () => {
    const [
        bestSellerData,
        skinCategoryResponse,
        concernCategoryResponse,
        routineCategoryResponse
    ] = await Promise.all([
        getProductsByType('best-seller'),
        getCategoryByTitle('subCategory=skin type'),
        getCategoryByTitle('subCategory=skin concern'),
        getCategoryByTitle('category=routine')
    ]);


    const { data: bestSellingProducts } = bestSellerData;
    const { data: skinCategory } = skinCategoryResponse;
    const { data: concernCategory } = concernCategoryResponse;
    const { data: routineCategory } = routineCategoryResponse;

    return (
        <div className='container mx-auto my-5 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <div className='flex flex-col items-center'>
                    <h1 className='uppercase text-lg font-[300] md:font-[400] md:text-4xl'>START YOUR SKIN CARE JOURNEY</h1>
                    <p className='w-1/3 text-center mt-4 hidden md:block'>Skin care is a personal journey and we're here to guide you along the way. Live chat our skin care experts for more help.</p>
                    <p className='text-center font-[300] text-secondary mt-2 md:hidden'>Shop By</p>
                </div>
            </div>
            <SkinCareNavTab
                skinCategory={skinCategory?.data?.children}
                concernCategory={concernCategory?.data?.children}
                routineCategory={routineCategory?.data?.children}
                bestSellingProducts={bestSellingProducts?.result} />


            <MobileSkinCare
                skinCategory={skinCategory?.data?.children}
                concernCategory={concernCategory?.data?.children}
                routineCategory={routineCategory?.data?.children}
                bestSellingProducts={bestSellingProducts?.result} />
        </div>
    );
};

export default SkinCareJourney;