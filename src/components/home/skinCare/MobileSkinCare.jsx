'use client'
import ProductCard from '@/components/card/ProductCard';
import { productSettings } from '@/utilities/sliderSettings/productSetting';
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../../../public/assets/category.jpg'
import { Collapse } from 'antd';

const MobileSkinCare = ({ bestSellingProducts, skinCategory, concernCategory, routineCategory }) => {
    return (
        <div className='md:hidden mt-10'>

            <Collapse
                size="small"
                expandIconPosition='right'
                className='border-none mb-2 py-1 bg-[#f9f9f9] px-4'
                items={[
                    {
                        key: '1',
                        label: 'BEST SELLER',
                        children:
                            <Slider {...productSettings} className='mb-10'>
                                {
                                    bestSellingProducts?.map(product =>
                                        <div key={product?._id} className='px-2 pb-10 min-w-[10rem]'>
                                            <ProductCard product={product} />
                                        </div>
                                    )
                                }
                            </Slider>
                    },
                ]}
            />


            <Collapse
                size="small"
                expandIconPosition='right'
                className='border-none mb-2 py-1 bg-[#f9f9f9] px-4'
                items={[
                    {
                        key: '1',
                        label: 'SKIN TYPE',
                        children: <Slider {...productSettings} className='mb-10'>
                            {
                                skinCategory?.map(category =>
                                    <div key={category?._id} className='px-2 pb-5'>
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
                    },
                ]}
            />

            <Collapse
                size="small"
                expandIconPosition='right'
                className='border-none mb-2 py-1 bg-[#f9f9f9] px-4'
                items={[
                    {
                        key: '1',
                        label: 'SKIN CONCERN',
                        children: <Slider {...productSettings} className='mb-10'>
                            {
                                concernCategory?.map(category =>
                                    <div key={category?._id} className='px-2 pb-5'>
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
                    },
                ]}
            />

            <Collapse
                size="small"
                expandIconPosition='right'
                className='border-none mb-2  py-1 bg-[#f9f9f9] px-4'
                items={[
                    {
                        key: '1',
                        label: 'ROUTINE',
                        children:
                            <Slider {...productSettings} className='mb-10'>
                                {
                                    routineCategory?.map(category =>
                                        <div key={category?._id} className='px-2 pb-5 min-w-[10rem]'>
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
                    },
                ]}
            />

        </div>
    );
};

export default MobileSkinCare;