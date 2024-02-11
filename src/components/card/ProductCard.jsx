import Image from 'next/image';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import Link from 'next/link';
import AddToCartClient from '@/clientSideRender/addtoCart/AddToCartClient';
import OfferCountDown from './OfferCountDown';

const ProductCard = ({ product }) => {
    const { _id, name, images, price, offerPrice, productType, slug, manufacturer, timeStamps } = product || {};

    return (
        <div className='py-4 relative cursor-pointer group hover:shadow-md hover:shadow-dark hover:scale-105 duration-500 transition'>
            <Link href={`/product-detail/${slug}`}>
                <Image className='h-44 w-full md:h-auto md:px-10' width={1280} height={720} quality={100} src={images?.length > 0 && images?.[0]} alt='' />
                <div className='relative'>
                    <div className='flex flex-col items-center justify-center w-4/5 mx-auto'>
                        <button className='uppercase text-xs bg-black px-2 py-1 text-white'>{productType}</button>
                        <p className='uppercase font-semibold my-3'>{manufacturer?.name}</p>
                        <p className='line-clamp-2 text-sm text-center'>{name}</p>
                        <p className='text-center font-semibold mt-3 group-hover:mt-5 group-hover:opacity-0'>
                           {price == offerPrice ? <> <span className='font-[auto]'>৳</span>{offerPrice ? offerPrice : price}</>: <>
                           <del className='mr-2'><span className='font-[auto]'>৳</span>{price}</del>
                           <span className='font-[auto]'>৳</span>{offerPrice}
                           </>}
                        </p>
                    </div>
                   {timeStamps ?
                     <div className='absolute -top-12 left-0 right-0'>
                        <OfferCountDown timeStamps={timeStamps}/>
                    </div> : ""
                   }
                </div>
            </Link>
            <div className='flex gap-2 w-full px-2 md:px-5 items-center justify-between mt-5 absolute bottom-3 opacity-0 group-hover:opacity-100'>
                <AddToCartClient product={product} />
                <Link href={`/product-detail/${slug}`} className='w-1/4 flex justify-end'>
                    <IoIosSearch className='md:text-2xl' />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;