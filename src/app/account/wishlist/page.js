'use client'
import WishlistCard from '@/components/account/wishlist/WishlistCard';
import { getWishListDataByEmail } from '@/config/wishlistApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';

const WishlistPage = () => {
    const { user } = useContext(AuthContext);
    const [wishProudct, setWishProduct] = useState(null)
    const [isSuccess, setIsSucces] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getWishListDataByEmail(user?.data?.user?.email);
                if (res) {
                    setWishProduct(res?.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();

        if (isSuccess) {
            fetchData()
            setIsSucces(false)
        }
    }, [user?.data?.user?.email, isSuccess])
    
    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>My Wishlist</h1>
            {wishProudct?.products?.length > 0 ?
                wishProudct?.products?.map(product =>
                    <WishlistCard
                        key={product?._id}
                        product={product?.product}
                        email={user?.data?.user?.email}
                        setIsSucces={setIsSucces}
                    />
                ) :

                <div>
                    <p className='text-center mt-10 text-secondary'>No Wishlist Found</p>
                </div>
            }
        </div>
    );
};

export default WishlistPage;