import Link from 'next/link';
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

const FollowUs = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <h3 className='text-2xl text-center font-semibold text-secondary tracking-wider'>Follow us</h3>
            <div className='flex items-center justify-center my-4 gap-2'>
                <FaTwitter className='text-3xl bg-secondary p-1.5 rounded text-white cursor-pointer' />
                <FaFacebookF className='text-3xl bg-secondary p-1.5 rounded text-white cursor-pointer' />
                <FaInstagram className='text-3xl bg-secondary p-1.5 rounded text-white cursor-pointer' />
                <FaYoutube className='text-3xl bg-secondary p-1.5 rounded text-white cursor-pointer' />
                <CiMail className='text-3xl bg-secondary p-1.5 rounded text-white cursor-pointer' />
            </div>
            <p className='text-center tracking-wider'>Already have an account? <Link href='/' className='font-semibold'>Login</Link></p>
        </div>
    );
};

export default FollowUs;