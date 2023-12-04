import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/1.webp'
import { FaRegHeart } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import Link from 'next/link';

const ProductCard = () => {
    return (
        <Link href='/product-detail/axisy-biome-radiating-intensified-essence-50ml' className='py-4 relative cursor-pointer group hover:shadow-lg hover:shadow-dark hover:scale-105 duration-500 transition'>
            <Image className='w-full h-auto' width={261} height={261} src={img} />
            <div className='flex flex-col items-center justify-center w-4/5 mx-auto'>
                <button className='uppercase text-xs bg-black px-2 py-1 text-white'>best seller</button>
                <p className='uppercase font-semibold my-3'>AXIX-Y</p>
                <p className='line-clamp-2 text-sm text-center'>Biome Radiating Intensifield Essence 50 ml</p>
                <p className='text-center font-semibold mt-3 group-hover:mt-5 group-hover:opacity-0'><span className='font-[auto]'>৳</span>1500</p>
            </div>

            <div className='flex w-full px-5 items-center justify-between mt-5 absolute bottom-3 opacity-0 group-hover:opacity-100'>
                <button className='w-1/2 flex justify-start'>
                    <FaRegHeart className='text-2xl' />
                </button>
                <button className='bg-primary text-white uppercase text-sm p-2 w-full'>Add to cart</button>
                <button className='w-1/2 flex justify-end'>
                    <IoIosSearch className='text-2xl' />
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;