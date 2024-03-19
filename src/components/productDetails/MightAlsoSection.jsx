import React from 'react';
import ProductCard from '../card/ProductCard';
import SliderComponentClient from '@/clientSideRender/sliderComponent/SliderComponentClient';
import { getRelatedProductsByProductId } from '@/config/productsApi';

const MightAlsoSection = async ({ id }) => {
    const { data: products } = await getRelatedProductsByProductId(id) || {};
    return (
        <div className={`container mx-auto my-10 md:my-20 ${products?.result?.length > 0 ? '': 'hidden'}`}>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-2xl md:text-3xl font-semibold text-center border-dotted border-b pb-4'>You May Also Like</h1>
                

                {
                    products?.result?.length > 4 ? <SliderComponentClient>
                    {
                        products?.result?.map(product =>
                            <div key={product?._id} className='px-2 py-10'>
                                <ProductCard product={product} />
                            </div>
                        )
                    }
                </SliderComponentClient> : <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                    {
                        products?.result?.map(product =>
                            <div key={product?._id} className='px-2 py-10'>
                                <ProductCard product={product} />
                            </div>
                        )
                    }

                    </div>
                }
            </div>
        </div>
    );
};

export default MightAlsoSection;