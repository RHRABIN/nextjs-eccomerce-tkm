'use client'
import { userSignup } from '@/config/authApi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SignupForm = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const getLoginIngo = {
            name,
            phone,
            email,
            password
        }

        setLoginInfo(getLoginIngo);
        e.target.reset()

    }
    let success;
    useEffect(() => {
        const userMutation = async () => {
            if (loginInfo) {
                success = await userSignup(loginInfo);

                if (success?.data) {
                    router.push('/')
                }
            }
        };
        userMutation();
    }, [loginInfo])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className='mb-2 block' htmlFor="">Name</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Name' name='name' type="text" />

                <label className='mb-2 block mt-4' htmlFor="">Phone</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Phone' name='phone' type="text" />

                <label className='mb-2 block mt-4' htmlFor="">Email</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Email' name='email' type="email" />

                <label className='mb-2 block mt-4' htmlFor="">Password</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Password' name='password' type="password" />

                <div className='flex justify-center mt-6 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>Signup</button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;