'use client'
import WishlistCard from '@/components/account/wishlist/WishlistCard';
import { getWishListDataByEmail } from '@/config/wishlistApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react';

const WishlistPage = async () => {
    const { user } = useContext(AuthContext);
    const { data: wishProudct } = await getWishListDataByEmail(user?.data?.user?.email) || {};
    console.log('wishlist', wishProudct?.products)
    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>My Wishlist</h1>
            {
                wishProudct?.products?.map(product =>
                    <WishlistCard
                        key={product?._id}
                        product={product?.product}
                    />
                )
            }
        </div>
    );
};

export default WishlistPage;