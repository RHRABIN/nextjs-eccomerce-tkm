'use client'
import React, { useState } from 'react';

const ForgotPasswordForm = () => {
    const [changePassword, setChangePassword] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const number = e?.target?.number?.value;
        const otp = e.target.otp.value;
        const updateUserInfo = {
            number,
            otp
        }

        setChangePassword(updateUserInfo)
    }


    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit}>
                <input className={changePassword?.number ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter Phone Number' name='number' type="text" />

                <input className={!changePassword?.number || changePassword?.otp ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter your 6 digits code' name='otp' type="text" />

                <label className={!changePassword?.number || !changePassword?.otp ? 'hidden' : 'mb-2 block mt-4'} htmlFor="">New Password</label>
                <input className={!changePassword?.number || !changePassword?.otp ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='New Password' name='newPass' type="password" />

                <label className={!changePassword?.number || !changePassword?.otp ? 'hidden' : 'mb-2 block mt-4'} htmlFor="">Confirm Password</label>
                <input className={!changePassword?.number || !changePassword?.otp ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Confirm Password' name='ConPass' type="password" />

                <div className='flex justify-center mt-6 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>{changePassword?.number && changePassword?.otp ? 'Change' : 'Send'}</button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;