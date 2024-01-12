'use client'
import { userLoggedIn } from '@/config/authApi';
import React, { useEffect, useState } from 'react';

const LoginForm = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const getLoginIngo = {
            email,
            password
        }

        setLoginInfo(getLoginIngo);
        

    }

    useEffect(() => {
        if (loginInfo) {
            userLoggedIn(loginInfo)
        }
    },[loginInfo])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className='mb-2 block' htmlFor="">Email</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Email' name='email' type="email" />

                <label className='mb-2 block mt-4' htmlFor="">Password</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Password' name='password' type="password" />

                <div className='flex justify-center mt-6 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;