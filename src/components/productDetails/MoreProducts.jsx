import React from 'react';
import ProductCard from '../card/ProductCard';
import SliderComponentClient from '@/clientSideRender/sliderComponent/SliderComponentClient';
import { getBrandsProductsByBrandId } from '@/config/productsApi';

const MoreProducts = async ({ brandId, productId }) => {
    const { data: products } = await getBrandsProductsByBrandId(brandId, productId) || {};

    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-2xl md:text-3xl font-semibold text-center border-dotted border-b pb-4'>More Products From This Brand</h1>
                {
<<<<<<< HEAD
                    products?.result?.length > 4 ?
                        <SliderComponentClient>
                            {
                                products?.result?.map(product =>
                                    <div key={product?._id} className='px-2 py-10'>
                                        <ProductCard product={product} />
                                    </div>
                                )
                            }
                        </SliderComponentClient> :
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                products?.result?.map(product =>
                                    <div key={product?._id} className='px-2 py-10'>
                                        <ProductCard product={product} />
                                    </div>
                                )
                            }
                        </div>
                }

=======
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
>>>>>>> 6e166fa7542cbb77676a0982a761e7536aacd9d2
            </div>
        </div>
    );
};

export default MoreProducts;