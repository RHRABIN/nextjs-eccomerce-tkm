import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/1.webp'
import { FaRegHeart } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import Link from 'next/link';

const ProductCard = ({ propsImg, product }) => {
    const { name, images, price, offerPrice, productType, slug, manufacturer } = product || {};
    console.log(product)
    return (
        <div className='py-4 relative cursor-pointer group hover:shadow-md hover:shadow-dark hover:scale-105 duration-500 transition'>
            <Link href={`/product-detail/${slug}`}>
                <Image className='h-44 w-full md:h-auto md:px-10' width={1280} height={720} quality={100} src={images?.length > 0 && images?.[0]} alt='' />
                <div className='flex flex-col items-center justify-center w-4/5 mx-auto'>
                    <button className='uppercase text-xs bg-black px-2 py-1 text-white'>{productType}</button>
                    <p className='uppercase font-semibold my-3'>{manufacturer?.name}</p>
                    <p className='line-clamp-2 text-sm text-center'>{name}</p>
                    <p className='text-center font-semibold mt-3 group-hover:mt-5 group-hover:opacity-0'><span className='font-[auto]'>৳</span>{offerPrice ? offerPrice : price}</p>
                </div>
            </Link>
            <div className='flex gap-2 w-full px-2 md:px-5 items-center justify-between mt-5 absolute bottom-3 opacity-0 group-hover:opacity-100'>
                <button className='w-1/4 flex justify-start'>
                    <FaRegHeart className='md:text-2xl' />
                </button>
                <button className='bg-primary p-1 text-white uppercase text-[10px] md:text-sm md:p-2 w-full'>Add to cart</button>
                <Link href={`/product-detail/${slug}`} className='w-1/4 flex justify-end'>
                    <IoIosSearch className='md:text-2xl' />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;