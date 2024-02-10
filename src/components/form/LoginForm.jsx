'use client'
import { userLoggedIn } from '@/config/authApi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { Alert } from 'antd';

const LoginForm = () => {
    const [isLaoding, setIsLoading] = useState(false);
    const [error, setIsError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const router = useRouter();

    let response;

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
                try {
                    setIsLoading(true);
                    response = await userLoggedIn(getLoginInfo);
                    if (response?.data) {
                        router.push('/');
                        setIsSuccess(true)
                    } else {
                        setIsError(true)
                    }
                } catch (error) {
                    setIsError(true)
                } finally {
                    setIsLoading(false);
                }
            }
        };


        userMutation();

        // e.target.reset()

    }

    console.log(response)

    useEffect(() => {
        if (isSuccess) {
            toast.success('Login Successfull')
        }
    }, [isSuccess])


    const onClose = (e) => {
        setIsError(false)
    };

    return (
        <div>

            <div className='my-2'>
                {
                    error &&
                    <Alert
                        description="Authorizaton Failed Check email or password"
                        type="error"
                        closable
                        onClose={onClose}
                    />
                }
            </div>
            <form onSubmit={handleSubmit}>
                <label className='mb-2 block' htmlFor="">Email</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Email' name='email' type="text" />

                <label className='mb-2 block mt-4' htmlFor="">Password</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Password' name='password' type="password" />
                <Link className='text-end w-full block mt-4 text-sm text-blue-600 hover:underline' href='/forgot-password'>Forget Password</Link>
                <div className='flex justify-center mt-6 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>{isLaoding ? 'Login..' : 'Login'}</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;