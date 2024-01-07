import ProductCard from '@/components/card/ProductCard';
import { getAllProductsBySearch } from '@/config/productsApi';
import React from 'react';

const ProductsSearchPage = async() => {
    const products = await getAllProductsBySearch('?category=best');
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    Array(9).fill().map((_, idx) =>
                        <ProductCard key={idx} />
                    )
                }
            </div>
        </div>
    );
};

export default ProductsSearchPage;