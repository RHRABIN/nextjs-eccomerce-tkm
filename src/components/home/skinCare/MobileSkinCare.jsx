'use client'
import AccordionClient from '@/clientSideRender/accordion/AccordionClient';
import ProductCard from '@/components/card/ProductCard';
import { productSettings } from '@/utilities/sliderSettings/productSetting';
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../../../public/assets/category.jpg'

const MobileSkinCare = ({ bestSellingProducts, skinCategory, concernCategory, routineCategory }) => {
    return (
        <div className='mx-4 md:hidden mt-10'>
            <AccordionClient title={<p className='uppercase' >Best Seller</p>} isDropdown={true}>
                {/* <Slider {...productSettings} className='mb-20'>
                    {
                        bestSellingProducts?.map(product =>
                            <div key={product?._id} className='px-2 py-10'>
                                <ProductCard product={product} />
                            </div>
                        )
                    }
                </Slider> */}
                <div className='flex overflow-x-scroll details-image gap-2'>
                    {
                        bestSellingProducts?.map(product =>
                            <div key={product?._id} className='px-2 py-10 min-w-[10rem]'>
                                <ProductCard product={product} />
                            </div>
                        )
                    }
                </div>
            </AccordionClient>

            <AccordionClient title={<p className='uppercase' >Skin Type</p>} isDropdown={true}>
                <Slider {...productSettings} className='mb-20'>
                    {
                        skinCategory?.map(category =>
                            <div key={category?._id} className='px-2 py-10'>
                                <Link href={`/products?category=${category?.slug}`} className='relative'>
                                    <Image
                                        className='w-full'
                                        height={720}
                                        width={1280}
                                        quality={100}
                                        src={category?.image ? category?.image : img} alt={category?.title} />
                                    <p className='absolute bottom-5 text-center w-full'>{category?.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </Slider>
            </AccordionClient>

            <AccordionClient title={<p className='uppercase' >Skin Concern</p>} isDropdown={true}>
                <Slider {...productSettings} className='mb-20'>
                    {
                        concernCategory?.map(category =>
                            <div key={category?._id} className='px-2 py-10'>
                                <Link href={`/products?category=${category?.slug}`} className='relative'>
                                    <Image
                                        className='w-full'
                                        height={720}
                                        width={1280}
                                        quality={100}
                                        src={category?.image ? category?.image : img} alt={category?.title} />
                                    <p className='absolute bottom-5 text-center w-full'>{category?.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </Slider>
            </AccordionClient>

            <AccordionClient title={<p className='uppercase' >Routine</p>} isDropdown={true}>
                {/* <Slider {...productSettings} className='mb-20'>
                    {
                        routineCategory?.map(category =>
                            <div key={category?._id} className='px-2 py-10'>
                                <Link href={`/products?category=${category?.slug}`} className='relative'>
                                    <Image
                                        className='w-full'
                                        height={720}
                                        width={1280}
                                        quality={100}
                                        src={category?.image ? category?.image : img} alt={category?.title} />
                                    <p className='absolute bottom-5 text-center w-full'>{category?.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </Slider> */}
                <div className='flex overflow-x-scroll details-image gap-2 '>
                    {
                        routineCategory?.map(category =>
                            <div key={category?._id} className='px-2 py-10 min-w-[10rem]'>
                                <Link href={`/products?category=${category?.slug}`} className='relative'>
                                    <Image
                                        className='w-full'
                                        height={720}
                                        width={1280}
                                        quality={100}
                                        src={category?.image ? category?.image : img} alt={category?.title} />
                                    <p className='absolute bottom-5 text-center w-full'>{category?.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </AccordionClient>
        </div>
    );
};

export default MobileSkinCare;