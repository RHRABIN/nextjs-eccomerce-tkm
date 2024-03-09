'use client'
import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { getAllProductsBySearch } from '@/config/productsApi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/card/ProductCard';
import { Pagination } from 'antd';
import DefaultSortClient from '@/clientSideRender/productsSearch/DefaultSortClient';

const ProductsSearchPage = () => {
    const [products, setProducts] = useState([]);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(searchParams.toString());

    const createQueryString = useCallback(
        (name, value) => {
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    useEffect(() => {
        let isFetch = false;
        const loadData = async () => {
            try {
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

    const handlePagination = (page)=>{

        router.push(pathname + '?' + createQueryString("page", page))
    }

    const totalProducts = products?.data?.result?.totalProducts || 0;

    return (
        <Fragment>
        
        <div>
            <div className='flex justify-center md:hidden w-full'>
                <DefaultSortClient total={totalProducts || 0} />
            </div>
        </div>

        <div className='container mx-auto md:relative'>
            <div className='hidden md:block absolute -top-[50px] left-[20px]'>Items: {totalProducts || 0}</div>
           {products?.data?.result?.totalPageNumber > 0  && <div className='hidden md:block md:absolute -top-[50px] right-[260px]'>{`< ${searchParams.get('page') || 1 }/ ${products?.data?.result?.totalPageNumber} >`}</div>}
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

        <div className='flex items-center justify-center mv-2 mt-16 md:mt-8'>
            <Pagination
                    total={totalProducts || 0}
                    hideOnSinglePage={true}
                    pageSize={15}
                    onChange={(page)=> handlePagination(page)}
                    responsive
                    
                    defaultCurrent={params.get("page") || 1}
                />
           </div>
        </div>
        </Fragment>
    );
};

export default ProductsSearchPage;