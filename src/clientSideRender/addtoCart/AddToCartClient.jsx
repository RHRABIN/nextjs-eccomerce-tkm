'use client'
import { addToCartNewDataByEmail } from '@/config/addCartToapi';
import { addToWishListByEmail } from '@/config/wishlistApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegHeart } from 'react-icons/fa6';

const AddToCartClient = ({ product }) => {
    const { _id, offerPrice } = product || {};
    const { user, isCartSuccess, setIsCartSuccess, setOpenDrawer } = useContext(AuthContext);
    const email = user?.data?.user?.email || {};


    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = async () => {
        setIsLoading(true);

        let data = {};
        if (email) {
            data = {
                product: _id,
                offerPrice,
            };
        }

        try {
            await addToCartNewDataByEmail(email, data) || {};
            setIsCartSuccess(true);
            setOpenDrawer(true)
            toast.success('Cart addedd Successfully')
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsLoading(false);
        }
    };



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
            <button onClick={handleWishlist} className='w-1/4  justify-start hidden md:flex'>
                <FaRegHeart className='md:text-2xl' />
            </button>
            <button onClick={handleAddToCart} className='bg-primary p-1.5 text-white uppercase text-sm md:p-2 w-full'>{isLoading ? 'Add to cart..' : 'Add to cart'}</button>
        </>
    );
};

export default AddToCartClient;