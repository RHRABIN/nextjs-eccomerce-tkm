'use client'
import ProductCard from '@/components/card/ProductCard';
import { getAllProductsBySearch } from '@/config/productsApi';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const ProductsSearchPage = async () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString())

    let products;
    

    useEffect(()=>{
        const loadData = async () =>{
            products = await getAllProductsBySearch(`?${params.toString()}`);
        }

        loadData()

    },[params])

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