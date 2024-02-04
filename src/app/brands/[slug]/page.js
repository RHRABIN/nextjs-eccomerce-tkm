import ProductCard from '@/components/card/ProductCard';
import { getBrandProductsByBrandSlug } from '@/config/productsApi';
import React from 'react';

const BrandProductPage = async ({ params }) => {
    const { slug } = params || {};
    const { data: brandProduct } = await getBrandProductsByBrandSlug(slug) || {};
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        brandProduct?.result?.map(product =>
                            <ProductCard
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

export default BrandProductPage;