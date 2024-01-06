import React from 'react';
import ProductCard from '../card/ProductCard';
import SliderComponentClient from '@/clientSideRender/sliderComponent/SliderComponentClient';
// import { getRelatedProductsByProductId } from '@/config/productsApi';

const MightAlsoSection = async ({ id }) => {
    // const products = await getRelatedProductsByProductId(id);
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-2xl md:text-3xl font-semibold text-center border-dotted border-b pb-4'>You Might Also Like</h1>
                <SliderComponentClient>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2 py-10'>
                                <ProductCard  />
                            </div>
                        )
                    }
                </SliderComponentClient>
            </div>
        </div>
    );
};

export default MightAlsoSection;