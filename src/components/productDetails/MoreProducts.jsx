import React from 'react';
import ProductCard from '../card/ProductCard';
import SliderComponentClient from '@/clientSideRender/sliderComponent/SliderComponentClient';
import { getBrandsProductsByBrandId } from '@/config/productsApi';

const MoreProducts = async ({ brandId, productId }) => {
    const { data: products } = await getBrandsProductsByBrandId(brandId, productId);

    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-2xl md:text-3xl font-semibold text-center border-dotted border-b pb-4'>More Products From This Brand</h1>
                {
                    products?.totalProducts > 4 ? <SliderComponentClient>
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

export default MoreProducts;