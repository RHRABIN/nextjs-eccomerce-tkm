import SignupForm from '@/components/form/SignupForm';
import Link from 'next/link';
import React from 'react';
import { BiLogoFacebookCircle, BiLogoGithub } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

const SignupPage = () => {
    return (
        <div className='container mx-auto my-16'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-center md:text-start text-2xl font-semibold text-secondary border-b-dark border-dotted border-b pb-4 mb-10'>Create Account</h1>
                <div className='border  md:w-1/3 md:mx-auto p-4 rounded-md'>
                    <h2 className='text-secondary font-bold text-center text-3xl'>Signup</h2>
                    <SignupForm />
                    <div className='flex items-center gap-4 my-5'>
                        <hr className='w-full' />
                        Or
                        <hr className='w-full' />
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <button>
                            <BiLogoFacebookCircle className='text-3xl text-[#0866FF]' />
                        </button>
                        <button>
                            <FcGoogle className='text-3xl' />
                        </button>
                        <button>
                            <BiLogoGithub className='text-3xl' />
                        </button>
                    </div>
                    <p className='text-xs md:text-sm text-center mt-4'>Already have an account? please <Link href='/login' className='text-primary hover:underline'>login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;