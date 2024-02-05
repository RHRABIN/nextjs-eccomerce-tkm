'use client'
import ProductCard from '@/components/card/ProductCard';
import { getAllProductsBySearch } from '@/config/productsApi';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const ProductsSearchPage = async () => {
    const searchParams = useSearchParams();

    let products;
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    if (category) {
        products = await getAllProductsBySearch(`?category=${category}`);
    } else if (search) {
        products = await getAllProductsBySearch(`?search=${search}`);
    }
console.log(category)
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products?.data?.result?.data?.map(product =>
                        <ProductCard
                            key={product?._id}
                            product={product}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ProductsSearchPage;