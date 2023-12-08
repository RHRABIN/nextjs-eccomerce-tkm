import React from 'react';
import userImg from '../../../../public/assets/account.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingBag, FiUserCheck } from 'react-icons/fi';
import { LiaCommentDots } from "react-icons/lia";
import { FaRegAddressBook, FaRegCircleXmark, FaRegHeart } from 'react-icons/fa6';
import { LuFileX2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const AccountSidebar = () => {
    return (
        <div className='border-r border-r-dark'>
            <div className='flex flex-col items-center'>
                <Image src={userImg} height={720} width={1280} className='rounded-full h-36 w-36 border border-dark' />
                <h1 className='my-1 text-xl font-[500]'>Adnan Hossain</h1>
                <p className='text-gray-800 font-[300]'>example@gmail.com</p>
            </div>

            {/* sidebar  */}
            <ul className='mt-10'>
                <li>
                    <Link href='/account' className='flex items-center gap-2 hover:text-blue-600 my-2'><FiUserCheck /> My Account</Link>
                </li>
                <li>
                    <Link href='/account/orders' className='flex items-center gap-2 hover:text-blue-600 my-2'><FiShoppingBag /> My Orders</Link>
                </li>
                <li>
                    <Link href='/account/returned' className='flex items-center gap-2 hover:text-blue-600 my-2'><LuFileX2 /> My Returned</Link>
                </li>
                <li>
                    <Link href='/account/cancelled' className='flex items-center gap-2 hover:text-blue-600 my-2'><FaRegCircleXmark /> My Cancelled</Link>
                </li>
                <li>
                    <Link href='/account/reviews' className='flex items-center gap-2 hover:text-blue-600 my-2'><LiaCommentDots /> View Reviews</Link>
                </li>
                <li>
                    <Link href='/account/wishlist' className='flex items-center gap-2 hover:text-blue-600 my-2'><FaRegHeart /> My Wishlist</Link>
                </li>
                <li>
                    <Link href='/account/addresses' className='flex items-center gap-2 hover:text-blue-600 my-2'><IoLocationOutline /> View Address</Link>
                </li>
                <li>
                    <Link href='/account/update-profile' className='flex items-center gap-2 hover:text-blue-600 my-2'><FaRegAddressBook /> Update Profile</Link>
                </li>
            </ul>
        </div>
    );
};

export default AccountSidebar;