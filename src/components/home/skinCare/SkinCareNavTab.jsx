'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import wave from '../../../../public/assets/wave-border.svg'
import ProductCard from '@/components/card/ProductCard';
import Slider from 'react-slick';
import img from '../../../../public/assets/category.jpg';
import { productSettings } from '@/utilities/sliderSettings/productSetting';
import Link from 'next/link';

const SkinCareNavTab = ({ bestSellingProducts, skinCategory, concernCategory, routineCategory }) => {
    const [selectNav, setSelectNav] = useState('seller');

    return (
        <div className='hidden md:block'>
            <div className='flex justify-center gap-6 mt-5 md:mt-10'>
                <button onClick={() => setSelectNav('seller')} className='uppercase text-sm group'>
                    <p className={selectNav === 'seller' ? 'text-primary mb-3' : 'mb-3 group-hover:text-primary'}>shop by best sellers</p>
                    <Image className={`w-full opacity-0 group-hover:opacity-100 ${selectNav === 'seller' && 'opacity-100'}`} src={wave} alt='wavebar' />
                </button>


                <button onClick={() => setSelectNav('skin-type')} className='uppercase text-sm group'>
                    <p className={selectNav === 'skin-type' ? 'text-primary mb-3' : 'mb-3 group-hover:text-primary'}>Shop by Skin type</p>
                    <Image className={`w-full opacity-0 group-hover:opacity-100 ${selectNav === 'skin-type' && 'opacity-100'}`} src={wave} alt='wavebar' />
                </button>


                <button onClick={() => setSelectNav('skin-concern')} className='uppercase text-sm group'>
                    <p className={selectNav === 'skin-concern' ? 'text-primary mb-3' : 'mb-3 group-hover:text-primary'}>Shop by skin concern</p>
                    <Image className={`w-full opacity-0 group-hover:opacity-100 ${selectNav === 'skin-concern' && 'opacity-100'}`} src={wave} alt='wavebar' />
                </button>


                <button onClick={() => setSelectNav('routine')} className='uppercase text-sm group'>
                    <p className={selectNav === 'routine' ? 'text-primary mb-3' : 'mb-3 group-hover:text-primary'}>Shop by routine</p>
                    <Image className={`w-full opacity-0 group-hover:opacity-100 ${selectNav === 'routine' && 'opacity-100'}`} src={wave} alt='wavebar' />
                </button>
            </div>

            {
                selectNav === 'seller' &&
                <Slider {...productSettings}>
                    {
                        bestSellingProducts?.map(product =>
                            <div key={product?._id} className='px-2 py-10'>
                                <ProductCard product={product} />
                            </div>
                        )
                    }
                </Slider>

            }
            {
                selectNav === 'skin-type' &&
                <Slider {...productSettings}>
                    {
                        skinCategory?.map(category =>
                            <div key={category?._id} className='px-2 py-10'>
                                <Link href={`/products?subcat=${category?.slug}`} className='relative flex items-center justify-center'>
                                    <Image
                                        className='w-full'
                                        height={720}
                                        width={1280}
                                        quality={100}
                                        src={category?.image ? category?.image : img} alt={category?.title} />
                                    <p className='absolute inset-0 px-2 flex items-center justify-center text-center w-full font-bold uppercase bg-[#00000033]'>{category?.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </Slider>
            }
            {
                selectNav === 'skin-concern' &&
                <Slider {...productSettings}>
                    {
                        concernCategory?.map(category =>
                            <div key={category?._id} className='px-2 py-10'>
                                <Link href={`/products?subcat=${category?.slug}`} className='relative flex items-center justify-center'>
                                    <Image
                                        className='w-full'
                                        height={720}
                                        width={1280}
                                        quality={100}
                                        src={category?.image ? category?.image : img} alt={category?.title} />
                                    <p className='absolute px-2 inset-0 flex items-center justify-center text-center w-full font-bold uppercase bg-[#00000033]'>{category?.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </Slider>

            }
            {
                selectNav === 'routine' &&
                <Slider {...productSettings}>
                    {
                        routineCategory?.map(category =>
                            <div key={category?._id} className='px-2 py-10'>
                                <Link href={`/products?category=${category?.slug}`} className='relative flex items-center justify-center'>
                                    <Image
                                        className='w-full'
                                        height={720}
                                        width={1280}
                                        quality={100}
                                        src={!category?.image ? category?.image : img} alt={category?.title} />
                                    <p className='absolute px-2 inset-0 flex items-center justify-center text-center w-full font-bold uppercase bg-[#00000033]'>{category?.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </Slider>
            }
        </div>
    );
};

export default SkinCareNavTab;