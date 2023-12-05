import ProductCard from '@/components/card/ProductCard';
import React from 'react';

const ProductsSearchPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        Array(9).fill().map((_, idx) =>
                            <ProductCard key={idx} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsSearchPage;