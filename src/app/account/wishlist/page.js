import WishlistCard from '@/components/account/wishlist/WishlistCard';
import React from 'react';

const WishlistPage = () => {
    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>My Wishlist</h1>
            <WishlistCard />
            <WishlistCard />
        </div>
    );
};

export default WishlistPage;