'use client'
import { addToCartNewDataByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react';

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
    return (
        <>
            <button onClick={handleAddToCart} className='bg-primary p-1 text-white uppercase text-[10px] md:text-sm md:p-2 w-full'>{cartLoading ? 'Add to cart..' : 'Add to cart'}</button>
        </>
    );
};

export default AddToCartClient;