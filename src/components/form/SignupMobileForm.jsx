'use client'
import React, { useEffect, useState } from 'react';

const SignupMobileForm = () => {
    const [signupInfo, setSignupInfo] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const number = e?.target?.number?.value;
        const otp = e.target.otp.value;
        const updateUserInfo = {
            number,
            otp
        }

        setSignupInfo(updateUserInfo)
    }


    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit}>
                <input className={signupInfo?.number ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter Phone Number' name='number' type="text" />

                <input className={!signupInfo?.number || signupInfo?.otp ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter your 6 digits code' name='otp' type="text" />

                <label className={!signupInfo?.number || !signupInfo?.otp ? 'hidden' : 'mb-2 block mt-4'} htmlFor="">Name</label>
                <input className={!signupInfo?.number || !signupInfo?.otp ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Name' name='name' type="text" />

                <label className={!signupInfo?.number || !signupInfo?.otp ? 'hidden' : 'mb-2 block mt-4'} htmlFor="">Password</label>
                <input className={!signupInfo?.number || !signupInfo?.otp ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Password' name='password' type="password" />

                <div className='flex justify-center mt-6 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>{signupInfo?.number && signupInfo?.otp ? 'Signup' : 'Send'}</button>
                </div>
            </form>
        </div>
    );
};

export default SignupMobileForm;