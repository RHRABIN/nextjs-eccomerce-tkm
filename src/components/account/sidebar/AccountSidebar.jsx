'use client'
import React, { useContext } from 'react';
import userImg from '../../../../public/assets/account.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingBag, FiUserCheck } from 'react-icons/fi';
import { LiaCommentDots } from "react-icons/lia";
import { FaRegAddressBook, FaRegCircleXmark, FaRegHeart } from 'react-icons/fa6';
import { LuFileX2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { AuthContext } from '@/context/AuthProvider';
import { usePathname } from 'next/navigation';

const AccountSidebar = () => {
    const { user } = useContext(AuthContext);
    const { name, email } = user?.data?.user || {};

    const pathname = usePathname()
    return (
        <div className='md:border-r rounded-md bg-slate-50 p-4' style={{ boxShadow: '0 0 5px #ddd' }}>
            <div className='flex flex-col items-center'>
                <Image src={userImg} alt='avatar' height={720} width={1280} className='rounded-full h-36 w-36 border border-dark' />
                <h1 className='my-1 text-xl font-[500]'>{name}</h1>
                <p className='text-gray-800 font-[300]'>{email}</p>
            </div>

            {/* sidebar  */}
            <ul className='mt-10 grid grid-cols-2 md:grid-cols-1 gap-x-2'>
                <li className='border-b'>
                    <Link href='/account' className={`flex items-center gap-2 text-sm px-2 hover:text-blue-600 py-2 ${pathname === '/account' && 'bg-slate-200 rounded-sm text-sm px-2'}`}><FiUserCheck /> My Account</Link>
                </li>
                <li className='border-b'>
                    <Link href='/account/orders' className={`flex items-center gap-2 text-sm px-2 hover:text-blue-600 py-2 ${pathname === '/account/orders' && 'bg-slate-200 rounded-sm text-sm px-2'}`}><FiShoppingBag /> My Orders</Link>
                </li>
                <li className='border-b'>
                    <Link href='/account/returned' className={`flex items-center gap-2 text-sm px-2 hover:text-blue-600 py-2 ${pathname === '/account/returned' && 'bg-slate-200 rounded-sm text-sm px-2'}`}><LuFileX2 /> My Returned</Link>
                </li>
                <li className='border-b'>
                    <Link href='/account/cancelled' className={`flex items-center gap-2 text-sm px-2 hover:text-blue-600 py-2 ${pathname === '/account/cancelled' && 'bg-slate-200 rounded-sm text-sm px-2'}`}><FaRegCircleXmark /> My Cancelled</Link>
                </li>
                <li className='border-b'>
                    <Link href='/account/reviews' className={`flex items-center gap-2 text-sm px-2 hover:text-blue-600 py-2 ${pathname === '/account/reviews' && 'bg-slate-200 rounded-sm text-sm px-2'}`}><LiaCommentDots /> View Reviews</Link>
                </li>
                <li className='border-b'>
                    <Link href='/account/wishlist' className={`flex items-center gap-2 text-sm px-2 hover:text-blue-600 py-2 ${pathname === '/account/wishlist' && 'bg-slate-200 rounded-sm text-sm px-2'}`}><FaRegHeart /> My Wishlist</Link>
                </li>
                <li className='border-b'>
                    <Link href='/account/addresses' className={`flex items-center gap-2 text-sm px-2 hover:text-blue-600 py-2 ${pathname === '/account/addresses' && 'bg-slate-200 rounded-sm text-sm px-2'}`}><IoLocationOutline /> View Address</Link>
                </li>
                <li className='border-b'>
                    <Link href='/account/update-profile' className={`flex items-center gap-2 text-sm px-2 hover:text-blue-600 py-2 ${pathname === '/account/update-profile' && 'bg-slate-200 rounded-sm'}`}><FaRegAddressBook /> Update Profile</Link>
                </li>
            </ul>
        </div>
    );
};

export default AccountSidebar;