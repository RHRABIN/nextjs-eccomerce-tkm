import Link from 'next/link';
import React from 'react';
import { getAllSortedBrands } from '@/config/categoriesApi';

const BrandsPage = async () => {
    const { data: brands } = await getAllSortedBrands() || {}

    return (
        <div className='container mx-auto my-5 md:my-10'>
            <div className='mx-4 md:mx-0'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl text-center font-medium border-b-8 w-fit border-b-primary'>Find Your Favorite Brand</h1>
                    <span className='flex items-center gap-2 mt-4'>
                        <Link href='/'>Home</Link>
                        <p>-</p>
                        <Link href='/brands'>Brands</Link>
                    </span>
                </div>

                <span className='flex items-center gap-2 mt-6'>
                    <p className='font-light'>Brnad Index:</p>
                    {
                        brands?.result?.map(brand => <p key={brand?.letter} className='font-semibold text-sm'>{brand?.letter}</p>)
                    }
                </span>

                {
                    brands?.result?.map(brand =>
                        <div key={brand?.letter} className='border mt-6'>
                            <p className='font-semibold text-sm p-3 uppercase bg-[rgb(0,0,0,0.01)]'>{brand?.letter}</p>
                            <div className='border-t py-3 px-5 grid grid-cols-2 md:grid-cols-4'>
                                {
                                    brand?.brands?.map(singleBrand =>
                                        <li key={singleBrand?.name} className='mb-3'><Link href={`/brands/${singleBrand?.slug}`} className='uppercase font-light hover:text-primary text-sm'>{singleBrand?.name}</Link></li>
                                    )
                                }
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BrandsPage;