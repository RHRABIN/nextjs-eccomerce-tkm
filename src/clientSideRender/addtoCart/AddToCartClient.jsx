'use client'
import { addToCartNewDataByEmail } from '@/config/addCartToapi';
import { addToWishListByEmail } from '@/config/wishlistApi';
import { AuthContext } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegHeart } from 'react-icons/fa6';

const AddToCartClient = ({ product }) => {
    const { _id, offerPrice, quantity } = product || {};
    const { user, isCartSuccess, setIsCartSuccess } = useContext(AuthContext);
    const email = user?.data?.user?.email || {};
    const router = useRouter()


    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = async () => {
        setIsLoading(true);

        const data = {
            product: _id,
            offerPrice,
        };

        try {
            if (user?.data?.user?.email) {
                await addToCartNewDataByEmail(user?.data?.user?.email, data);
                setIsCartSuccess(true)
                toast.success('Cart addedd Successfully');
            } else {
                router.push('/login')
            }
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
            } else {
                toast.error("Please sign in your account")
            }
        }
    }

    return (
        <>
            <button onClick={handleWishlist} className='w-1/4  justify-start hidden md:flex'>
                <FaRegHeart className='md:text-2xl' />
            </button>
            {
                quantity && quantity > 0 ? <button onClick={handleAddToCart} className='bg-primary p-1.5 text-white uppercase text-sm md:p-2 w-full'>{isLoading ? 'Add to cart..' : 'Add to cart'}</button> : <button disabled className='bg-primary p-1.5 text-white uppercase text-sm md:p-2 w-full'>Out of Stock</button>
            }
        </>
    );
};

export default AddToCartClient;