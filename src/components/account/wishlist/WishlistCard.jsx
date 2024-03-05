import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineDelete } from "react-icons/ai";
import { deleteWishListDataByEmailId } from '@/config/wishlistApi';
import SmallLoader from '@/components/loader/smallLoader/SmallLoader';

const WishlistCard = ({ email, product, setIsSucces }) => {
    const { _id, name, model, offerPrice, price, images } = product || {};
    const [wishLoading, setWishLoading] = useState(false)

    const handleDeleteWishlist = async () => {
        try {
            setWishLoading(true)
            const res = await deleteWishListDataByEmailId(email, { productId: _id })
            if (res) {
                setIsSucces(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setWishLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-between md:w-3/4 my-2'>
            <div className='flex items-center gap-4'>
                <Image src={images?.[0]} height={720} width={1280} alt={name} quality={100} className='h-20 w-20 md:h-32 md:w-32' />

                <div>
                    <Link href='/' className='text-blue-600 text-base md:text-lg font-[300]'>{name}</Link>
                    <p className='text-sm font-[300] my-1'>Model: {model}</p>
                    <p className='text-sm font-[300]'>Price: {offerPrice ? offerPrice : price}</p>
                </div>
            </div>

            <button onClick={handleDeleteWishlist} className='hover:text-red-500'>
                {wishLoading ? <SmallLoader /> : <AiOutlineDelete />}
            </button>
        </div>
    );
};

export default WishlistCard;