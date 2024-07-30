import Image from 'next/image';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import Link from 'next/link';
import AddToCartClient from '@/clientSideRender/addtoCart/AddToCartClient';
import OfferCountDown from './OfferCountDown';

const ProductCard = ({ product }) => {
    const { _id, name, images, price, offerPrice, productType, slug, manufacturer, timeStamps, expireDate, profileImage , badge, quantity } = product || {};

    return (
        <div className='py-4 relative cursor-pointer group md:hover:shadow-md md:hover:shadow-dark md:hover:scale-105 duration-500 transition'>
            <Link href={`/product-detail/${slug}`}>
                <div className='flex justify-center items-center'>
                    {
                        expireDate &&
                        <div className='text-center bg-gray-200 w-fit mx-auto px-2 py-1.5 rounded absolute top-0 mt-2'>
                            <p className='text-xs'>Exp: {new Date(expireDate).toLocaleDateString()}</p>
                        </div>
                    }
                </div>

                <Image className='h-44 w-full md:h-auto md:px-10' width={1280} height={720} quality={100} src={profileImage ? profileImage : images?.[0]} alt={name} />

                <div className='relative'>
                    <div className='flex flex-col items-center justify-center w-full md:w-4/5 mx-auto'>
                       {badge?.length > 0 ? <p className='mt-5 uppercase text-xs bg-black px-2 py-1 text-white'>{badge[0]?.name}</p> : <p className='h-[45px] invisible'>demo</p>}

                        <Link href={`/brands/${manufacturer?.slug}`} className='uppercase hover:text-primary font-semibold my-1 text-sm md:text-[16px] md:my-1 line-clamp-1'>{manufacturer?.name}</Link>

                        <p className='line-clamp-2 min-h-[40px] text-sm text-center'>{name}</p>

                        <p className='text-center font-semibold mt-1.5 md:mt-3 md:group-hover:mt-5 md:group-hover:opacity-0'>
                            {price == offerPrice ? <> <span className='font-[auto]'>৳</span>{offerPrice ? offerPrice : price}</> : <>
                                <del className='mr-2 text-primary'><span className='font-[auto]'>৳</span>{price}</del>
                                <span className='font-[auto]'>৳</span>{offerPrice}
                            </>}
                        </p>
                        {quantity && quantity > 0 ? <p className='text-green-500 text-xs hidden'>Product In Stock</p> : ''}
                    </div>
                    {timeStamps ?
                        <div className='absolute -top-[20px] left-0 right-0'>
                            <OfferCountDown timeStamps={timeStamps} />
                        </div> : ""
                    }
                </div>
            </Link>
            <div className='flex gap-2 w-full px-2 md:px-5 items-center justify-between mt-5 absolute -bottom-[20px] md:bottom-3 bg-white md:opacity-0 group-hover:opacity-100'>
                <AddToCartClient product={product} />
                <Link href={`/product-detail/${slug}`} className='w-1/4 justify-end hidden md:flex'>
                    <IoIosSearch className='md:text-2xl' />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;