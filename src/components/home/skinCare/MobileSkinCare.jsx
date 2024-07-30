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
                accordion
                key="1"
                size="small"
                expandIconPosition='right'
                className='border-none bg-transparent'
                items={[
                    {
                        key: '1',
                        label: 'BEST SELLER',
                        children: <Slider {...productSettings} className='mb-10 h-[410px]'>
                            {
                                bestSellingProducts?.map(product =>
                                    <div key={product?._id} className='px-2 pb-5 min-w-[10rem]'>
                                        <ProductCard product={product} />
                                    </div>
                                )
                            }
                            <div className='!flex items-center justify-center h-[410px]'>
                                <Link href={'/products?category=best'} className='py-2 px-3 border border-primary mb-1'>See More</Link>
                            </div>
                        </Slider>
                    },

                    {
                        key: '2',
                        label: 'SKIN TYPE',
                        children: <Slider {...productSettings} className='mb-10'>
                            {
                                skinCategory?.map(category =>
                                    <div key={category?._id} className='px-2 pb-5'>
                                        <Link href={`/products?subcat=${category?.slug}`} className='relative flex items-center justify-center'>
                                            <Image
                                                className='w-full'
                                                height={720}
                                                width={1280}
                                                quality={100}
                                                src={category?.image ? category?.image : img} alt={category?.title} />
                                            {
                                                !category?.image && <p className='absolute px-2 inset-0 flex items-center justify-center text-center w-full font-bold uppercase bg-[#00000033] text-[#f1f1f1]'>{category?.title}</p>
                                            }
                                        </Link>
                                    </div>
                                )
                            }

                            <div className='!flex items-center justify-center'>
                                <Link href={'/products?category=skin-type'} className='py-2 px-3 border border-primary mb-1'>See More</Link>
                            </div>
                        </Slider>
                    },

                    {
                        key: '3',
                        label: 'SKIN CONCERN',
                        children: <Slider {...productSettings} className='mb-10'>
                            {
                                concernCategory?.map(category =>
                                    <div key={category?._id} className='px-2 pb-5'>
                                        <Link href={`/products?subcat=${category?.slug}`} className='relative flex items-center justify-center'>
                                            <Image
                                                className='w-full'
                                                height={720}
                                                width={1280}
                                                quality={100}
                                                src={category?.image ? category?.image : img} alt={category?.title} />
                                            {
                                                !category?.image && <p className='absolute px-2 inset-0 flex items-center justify-center text-center w-full font-bold uppercase bg-[#00000033] text-[#f1f1f1]'>{category?.title}</p>
                                            }
                                        </Link>
                                    </div>
                                )
                            }

                            <div className='!flex items-center justify-center'>
                                <Link href={'/products?category=skin-concern'} className='py-2 px-3 border border-primary mb-1'>See More</Link>
                            </div>
                        </Slider>
                    },

                    {
                        key: '4',
                        label: 'ROUTINE',
                        children: <Slider {...productSettings} className='mb-10'>
                            {
                                routineCategory?.map(category =>
                                    <div key={category?._id} className='px-2 pb-5'>
                                        <Link href={`/products?category=${category?.slug}`} className='relative flex items-center justify-center'>
                                            <Image
                                                className='w-full'
                                                height={720}
                                                width={1280}
                                                quality={100}
                                                src={category?.image ? category?.image : img} alt={category?.title} />
                                            {
                                                !category?.image && <p className='absolute px-2 inset-0 flex items-center justify-center text-center w-full font-bold uppercase bg-[#00000033] text-[#f1f1f1]'>{category?.title}</p>
                                            }
                                        </Link>
                                    </div>
                                )
                            }

                            <div className='!flex items-center justify-center'>
                                <Link href={'/products?category=routine'} className='py-2 px-3 border border-primary mb-1'>See More</Link>
                            </div>
                        </Slider>
                    },
                    
                ]}
            />

        </div>
    );
};

export default MobileSkinCare;