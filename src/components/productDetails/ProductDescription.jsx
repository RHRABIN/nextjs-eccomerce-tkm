'use client'
import React from 'react';
import AccordionClient from '@/clientSideRender/accordion/AccordionClient';
import DangerHtml from '@/clientSideRender/dangerHtml/DangerHtml';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import AddToCartButton from './AddToCartButton';
import Link from 'next/link';
import Image from 'next/image';
import Rating from '../rating/Rating';
import { Collapse } from 'antd';

const ProductDescription = ({ product }) => {
    const { name, totalRating, manufacturer, tags, price, offerPrice, description, directions, ingredients, variation, shipping, activities, badge } = product || {};

    
    

    return (
        <div>
            {badge?.length > 0 && <div className='flex gap-2'>
                {
                    badge?.map(b => <p key={b._id} className='uppercase font-semibold text-xs bg-black px-2 py-1.5 text-white'>{b?.name}</p>)
                }
            </div>}

            <h1 className='uppercase  text-lg md:text-xl font-semibold mt-1 md:mt-3'>
                <Link href={`/brand/${manufacturer?.slug}`}>{manufacturer?.name}</Link>
            </h1>
            <h2 className='font-normal text-xl md:text-2xl text-gray-800 my-2 md:my-3'>{name}</h2>

            <div className='flex items-center text-dark text-lg md:text-xl mb-3'>
                <Rating rate={totalRating} />
            </div>
            <div className='text-2xl md:text-3xl font-semibold text-gray-800 flex items-start gap-2 mb-3 border-t border-dotted border-t-dark pt-3'>
              
                {price == offerPrice ? <> <span className='font-[auto]'>৳</span>{offerPrice ? offerPrice : price}</> : <>
                    <span className='font-[auto]'>৳</span>{offerPrice}
                    <del className='mr-2 text-[24px]'>৳{price}</del>
                </>}
            </div>

            <AddToCartButton product={product} />

            <div className='flex items-center gap-3 mt-3'>
                <FaYoutube className='border border-gray-300 p-2 rounded-full text-dark text-4xl cursor-pointer hover:bg-[#CD201F] hover:text-white' />
                <FaFacebookF className='border border-gray-300 p-2 rounded-full text-dark text-4xl cursor-pointer hover:bg-[#1877F2] hover:text-white' />
                <FaInstagram className='border border-gray-300 p-2 rounded-full text-dark text-4xl cursor-pointer hover:bg-gradient-to-br from-[#f9ce34]
                via-[#ee2a7b] to-[#6228d7] hover:text-white' />
            </div>

            <div className='flex flex-wrap gap-2 mt-4'>
                {
                    tags?.map((tag) =>
                        <span key={tag} className='bg-[rgb(219,219,219)] text-gray-800 py-0.5 px-1 text-xs'>{tag}</span>
                    )
                }
            </div>

            <div className='mt-5'>
                <p className='font-[300] tracking-wide leading-7'>
                    <DangerHtml getText={description} padding={false} />
                </p>
            </div>

            {
                variation?.length > 0 && <div className='flex flex-wrap gap-2 mt-4'>
                    {
                        variation?.map(b => <Image src={b.image} key={b._id} alt='variation-image' height={100} width={100} />)
                    }
                </div>
            }

            <div className='mt-4'>
            <Collapse
                size="small"
                expandIconPosition='right'
                className='border-none mb-2 py-1 bg-[#f9f9f9] px-4'
                items={[
                    {
                        key: '1',
                        label: 'ACTIVITIES',
                        children: <DangerHtml getText={activities} padding={true} />
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
                        label: 'DIRECTIONS',
                        children: <DangerHtml getText={directions} padding={true} />
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
                        label: 'INGREDIENTS',
                        children: <DangerHtml getText={ingredients} padding={true} />
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
                        label: 'SHIPPING',
                        children: <DangerHtml getText={shipping} padding={true} />
                    },
                ]}
            />
            </div>
        </div>
    );
};

export default ProductDescription;