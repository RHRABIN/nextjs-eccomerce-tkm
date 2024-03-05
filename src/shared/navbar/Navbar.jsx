import { getCategories, getAllBrands } from '@/config/categoriesApi'
import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const Navbar = async () => {
    const [categoriesResponse, brandsResponse] = await Promise.all([
        getCategories(),
        getAllBrands()
    ]);
    const { data: categories } = categoriesResponse || {};
    const { data: brands } = brandsResponse || {};

    return (
        <div className='bg-secondary hidden lg:block'>
            <nav className='container mx-auto text-white'>
                <ul className='flex items-center gap-6 text-sm justify-center  relative min:w-4/5 mx-auto w-fit'>

                    {
                        categories?.result?.map(category => category?.children?.length > 0 ?

                            // sub menu start 
                            category?.title?.toLowerCase() === 'brands' ? <li key={category?._id} className='group py-7'>
                                <span className='flex items-start gap-x-2 cursor-pointer'>
                                    <Link href='' className='uppercase border-b border-b-secondary hover:border-b-primary'>Brands</Link>
                                    <IoIosArrowDown className='text-white text-lg' />
                                </span>
                                {/* brnad menu */}
                                <ul className='absolute z-10 bg-secondary top-full hidden group-hover:block group-hover:border-t group-hover:border-t-black border-t-[.1px] w-full left-0'>
                                    <div className='grid grid-cols-5'>
                                        {
                                            brands?.result?.slice(0, 29)?.map(brand =>
                                                <li key={brand?._id} className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 w-full flex items-start gap-2 cursor-pointer'>
                                                    <Link href={`/brands/${brand?.slug}`} className='uppercase block w-full'>{brand?.name}</Link>
                                                </li>
                                            )
                                        }
                                        <li className='border-b-gray-500 border-opacity-20 bg-primary rounded-md text-center border-b p-2 w-full flex items-start gap-2 cursor-pointer'>
                                            <Link href='/brands' className='uppercase block w-full'>Others</Link>
                                        </li>
                                    </div>
                                </ul>
                            </li> : <li key={category?._id} className='group py-7'>
                                <span className='flex items-start gap-x-2 cursor-pointer'>
                                    <Link href={`/products?category=${category?.slug}`} className='uppercase border-b border-b-secondary hover:border-b-primary'>{category?.title}</Link>
                                    <IoIosArrowDown className='text-white text-lg' />
                                </span>
                                {/* menu */}
                                <ul className='absolute z-10 bg-secondary top-full hidden group-hover:block group-hover:border-t group-hover:border-black border-t-[.1px]'>
                                    {
                                        category?.children?.map(subCat => subCat?.children?.length > 0 ?
                                            // sub category child 

                                            <li key={subCat?._id} className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 pl-4 w-[240px] relative flex items-start gap-2 cursor-pointer group/sub'>
                                                <Link href={`/products?category=${subCat?.slug}`} className='capitalize block w-full'>{subCat?.title}</Link>
                                                <IoIosArrowForward className='text-white text-lg' />

                                                <ul className='absolute bg-secondary left-full border-t-black border-t-[.1px] -top-[1px] hidden group-hover/sub:block'>
                                                    {
                                                        subCat?.children?.map(subCatChild =>
                                                            <li key={subCatChild?._id} className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 pl-4 w-60 flex items-start gap-2 cursor-pointer'>
                                                                <Link href={`/products?subcat=${subCatChild?.slug}`} className='capitalize block w-full'>{subCatChild?.title}</Link>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </li> :
                                            // sub category 
                                            <li key={subCat?._id} className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 pl-4 w-60 flex items-start gap-2 cursor-pointer'>
                                                <Link href={`/products?category=${subCat?.slug}`} className='capitalize block w-full'>{subCat?.title}</Link>
                                            </li>


                                        )
                                    }
                                </ul>
                            </li> :
                            // main menu 
                            <li key={category?._id} className='py-7'><Link href={`/products?category=${category?.slug}`} className='uppercase border-b border-b-secondary hover:border-b hover:border-b-primary pb-1'>{category?.title}</Link></li>
                        )
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;