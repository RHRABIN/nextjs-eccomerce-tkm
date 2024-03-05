'use client'
import React, { useState, useEffect } from 'react';
import { getAllProductsBySearch } from '@/config/productsApi';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/card/ProductCard';

const ProductsSearchPage = () => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        let isFetch = false;
        const loadData = async () => {
            try {
                const params = new URLSearchParams(searchParams.toString());
                const productsData = await getAllProductsBySearch(`?${params.toString()}`);
               if(!isFetch){
                setProducts(productsData);
               }
            } catch (error) {
                console.error(error);
            }
        };

        loadData();

        return(()=>{
            isFetch = true;
        })
        
    }, [searchParams]);


    return (
        <div className='container mx-auto'>
            {
                (products?.data?.result?.data?.length > 0) ?
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            products?.data?.result?.data?.map(product =>
                                <ProductCard
                                    key={product?._id}
                                    product={product}
                                />
                            )
                        }
                    </div> :
                    <p className='text-center text-xl font-medium mt-6'>No Search Result Found</p>
            }
        </div>
    );
};

export default ProductsSearchPage;