import ProductCard from '@/components/card/ProductCard';
import { getBrandProductsByBrandSlug } from '@/config/productsApi';
import { getAllBrands } from '@/config/categoriesApi'
import Link from 'next/link';
import React from 'react';
import { IoHomeSharp } from "react-icons/io5";

const BrandProductPage = async ({ params }) => {
    const { slug } = params || {};
    const { data: brandProduct } = await getBrandProductsByBrandSlug(slug) || {};
    return (
        <div className='container mx-auto my-10'>
            <div className='mx-4 md:mx-0'>
                <div className='flex items-center gap-2'>
                    <Link href='/'><IoHomeSharp /></Link>
                    <Link href=''> / Brands</Link>
                </div>
                {
                    brandProduct?.result?.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
        </div>
    );
};

export default BrandProductPage;

export async function generateStaticParams() {
    const { data: brands } = await getAllBrands() || {};
    return brands?.result?.map(brand => brand?.slug);
}