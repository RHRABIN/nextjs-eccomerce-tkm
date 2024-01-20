'use client'
import { addToCartNewDataByEmail } from '@/config/addCartToapi';
import { addToWishListByEmail } from '@/config/wishlistApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaRegHeart } from 'react-icons/fa6';

const AddToCartClient = ({ product }) => {
    const { _id, offerPrice } = product || {};
    const { user } = useContext(AuthContext);
    const email = user?.data?.user?.email || {};


    const handleAddToCart = async () => {
        let data = {}
        if (email) {
            data = {
                product: _id,
                offerPrice,
            };
        }
        const { response, loading } = await addToCartNewDataByEmail(email, data) || {};
    }


    const handleWishlist = async () => {
        if (email) {
            const res = await addToWishListByEmail(email, { product: _id });
            if (res) {
                toast.success('Wishlist added successfully');
            }
        }
    }
    return (
        <>
            <button onClick={handleWishlist} className='w-1/4 flex justify-start'>
                <FaRegHeart className='md:text-2xl' />
            </button>
            <button onClick={handleAddToCart} className='bg-primary p-1 text-white uppercase text-[10px] md:text-sm md:p-2 w-full'>Add to cart</button>
        </>
    );
};

export default AddToCartClient;