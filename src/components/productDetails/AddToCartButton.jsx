'use client'
import { addToCartNewDataByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';
import { RiHeartAddLine } from "react-icons/ri";
import SmallLoader from '../loader/smallLoader/SmallLoader';
import { addToWishListByEmail } from '@/config/wishlistApi';


const AddToCartButton = ({ product }) => {
    const [productQty, setProductQty] = useState(1)
    const { _id, offerPrice } = product || {};
    const { user, setIsCartSuccess } = useContext(AuthContext);
    const email = user?.data?.user?.email || {};

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [wishLoading, setWishLoading] = useState(false)

    const handleQtyIncrement = () => {
        const newQty = productQty + 1;
        if (productQty >= 5) {
            toast.error('Already chosen five products');
        } else {
            setProductQty(newQty);
        }
    }

    const handleQtyDecrement = () => {
        const newQty = productQty - 1;
        if (productQty <= 1) {
            toast.error('Select a minimum of one product');
        } else {
            setProductQty(newQty);
        }
    }

    const handleAddToCart = async () => {
        setIsLoading(true);

        let data = {};
        if (email) {
            data = {
                product: _id,
                offerPrice,
                quantity: productQty
            };
        }

        try {
            await addToCartNewDataByEmail(email, data) || {};
            setIsSuccess(true);
            setIsCartSuccess(true)
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        if (isSuccess) {
            toast.success('Cart addedd Successfully')
        }
    }, [isSuccess]);




    const handleWishlist = async () => {
        try {
            setWishLoading(true)
            if (user?.data?.user?.email) {
                const res = await addToWishListByEmail(user?.data?.user?.email, { product: _id });
                if (res) {
                    toast.success('Wishlist added successfully');
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            setWishLoading(false)
        }
    }

    return (
        <div className='flex items-center'>
            <div className='w-[100px] md:w-[130px] border py-2 px-2 flex items-center justify-between'>
                    <button onClick={handleQtyDecrement} className='bg-gray-200 p-1 rounded-full' type='button'>
                        <FiMinus />
                    </button>
                     <p className=''>{productQty}</p>
                    <button onClick={handleQtyIncrement} className='bg-gray-200 p-1 rounded-full' type='button'>
                        <FaPlus />
                    </button>
            </div>
            <div className='w-3/5 flex gap-[1px] items-center'>
                <button onClick={handleAddToCart} className='bg-black border border-black text-white w-full py-2 tracking-widest'>{isLoading ? 'Add to Bag..' : 'Add to Bag'}</button>
                <button onClick={handleWishlist} className='w-[70px] h-[42px] flex items-center justify-center bg-black border border-black text-white tracking-widest'>
                {wishLoading ? <SmallLoader /> : <RiHeartAddLine width={20} height={20} color='white'/>}
                </button>
            </div>
        </div>
    );
};

export default AddToCartButton;