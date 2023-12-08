import Profile from '@/components/account/profile/Profile';
import React from 'react';

const UpdateProfilePage = () => {
    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>Update Account</h1>
            <Profile />
        </div>
    );
};

export default UpdateProfilePage;