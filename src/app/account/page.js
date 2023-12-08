import Profile from '@/components/account/profile/Profile';
import React from 'react';

const AccountPage = () => {
    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>My Account</h1>
            <Profile />
        </div>
    );
};

export default AccountPage;