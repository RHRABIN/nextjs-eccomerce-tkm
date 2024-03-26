"use client";

import ProductCard from '@/components/card/ProductCard';
import { getBrandProductsByBrandSlug } from '@/config/productsApi';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { Pagination } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import waveImg from '../../../../public/assets/wave-border.svg'
import Image from 'next/image';


const BrandProductPage = async ({ params }) => {
    const { slug } = params || {};

    const [brandProduct, setBrandProducts] = useState([]);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const paramString = new URLSearchParams(searchParams.toString());

    const createQueryString = useCallback(
        (name, value) => {
            paramString.set(name, value);
            return paramString.toString();
        },
        [searchParams]
    );

    useEffect(() => {
        let isFetch = false;
        const loadData = async () => {
            try {
                const productsData = await getBrandProductsByBrandSlug(`${slug}?${paramString.toString()}`);
 
               if(!isFetch){
                setBrandProducts(productsData?.data);
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

    const totalProducts = brandProduct?.totalProducts || 0;

    return (
        <div className='container mx-auto my-10'>
            <div className='mx-4 md:mx-0'>
                <div className='flex items-center gap-2'>
                    <Link href='/'><IoHomeSharp /></Link>
                    <Link href='/brands'> / Brands</Link>
                </div>
                <div className='flex flex-col items-center mb-4 md:mb-8 md:max-w-[760px] m-auto px-4'>
                    <p className='text-gray-800 text-3xl md:text-[40px] mb-3'>
                    {brandProduct?.brand?.name ? brandProduct?.brand?.name :'Brand Products'}</p>
                    <Image className='w-fit' height={500} width={1000} src={waveImg} alt='wave' />
                </div>
                {
                    brandProduct?.brand?.image && <div>
                        <Image className='w-fit' height={500} width={1000} src={brandProduct?.brand?.image} alt='wave' />
                    </div>
                }
                {
                   totalProducts > 0 ? <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            brandProduct?.result?.map(product =>
                                <ProductCard
                                    key={product?._id}
                                    product={product}
                                />
                            )
                        }
                    </div> : <p className='text-center md:text-2xl font-medium my-10'>There is no products on this brand</p>
                }
            </div>
            <div className='flex items-center justify-center mv-2 mt-16 md:mt-8'>
                <Pagination
                    total={totalProducts || 0}
                    hideOnSinglePage={true}
                    pageSize={16}
                    onChange={(page)=> handlePagination(page)}
                    responsive
                    
                    defaultCurrent={paramString.get("page") || 1}
                />
           </div>
        </div>
    );
};

export default BrandProductPage;

// export async function generateStaticParams() {
//     const { data: brands } = await getAllBrands() || {};
//     return brands?.result?.map(brand => brand?.slug);
// }