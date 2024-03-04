'use client'
import { addToCartNewDataByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';

const AddToCartButton = ({ product }) => {
    const [productQty, setProductQty] = useState(1)
    const { _id, offerPrice } = product || {};
    const { user, setIsCartSuccess } = useContext(AuthContext);
    const email = user?.data?.user?.email || {};

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);


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
    }, [isSuccess])

    return (
        <div className='flex items-center gap-4'>
            <div className='w-2/5 border py-2 px-4 md:px-10 flex items-center'>
                <p className='w-2/5'>{productQty}</p>
                <div className='w-3/5 flex justify-between'>
                    <button onClick={handleQtyDecrement} className='bg-gray-200 p-1 rounded-full' type='button'>
                        <FiMinus />
                    </button>
                    <button onClick={handleQtyIncrement} className='bg-gray-200 p-1 rounded-full' type='button'>
                        <FaPlus />
                    </button>
                </div>
            </div>
            <div className='w-3/5'>
                <button onClick={handleAddToCart} className='bg-black text-white w-full py-2 tracking-widest'>{isLoading ? 'Add to Bag..' : 'Add to Bag'}</button>
            </div>
        </div>
    );
};

export default AddToCartButton;