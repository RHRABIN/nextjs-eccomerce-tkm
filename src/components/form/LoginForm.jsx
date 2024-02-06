'use client'
import { userLoggedIn } from '@/config/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import SuccessToast from '../toastMessage/SuccessToast';
import ErrorToast from '../toastMessage/ErrorToast';
import Link from 'next/link';

const LoginForm = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const router = useRouter();

    let success;
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const getLoginInfo = {
            email,
            password
        }
        
        const userMutation = async () => {
            if (getLoginInfo) {
                success = await userLoggedIn(getLoginInfo);

                if (success?.data) {
                    router.push('/')
                }
            }
        };

        userMutation();

        // e.target.reset()

    }
   
    return (
        <div>
            {
                success?.data && <SuccessToast message={'Login Successfull'} />
            }
            {
                success?.data === 'undefined' && <ErrorToast message={'Login Successfull'} />
            }
            <form onSubmit={handleSubmit}>
                <label className='mb-2 block' htmlFor="">Email</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Email' name='email' type="text" />

                <label className='mb-2 block mt-4' htmlFor="">Password</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Password' name='password' type="password" />
                <Link className='text-end w-full block mt-4 text-sm text-blue-600 hover:underline' href='/forgot-password'>Forget Password</Link>
                <div className='flex justify-center mt-6 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>{success?.data ? 'Login..' : 'Login'}</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;