import Image from 'next/image';
import React from 'react';
import wishImg from '../../../../public/assets/2.webp'
import Link from 'next/link';
import { AiOutlineDelete } from "react-icons/ai";

const WishlistCard = () => {
    return (
        <div className='flex items-center justify-between md:w-3/4 my-2'>
            <div className='flex items-center gap-4'>
                <Image src={wishImg} height={720} width={1280} className='h-32 w-32' />

                <div>
                    <Link href='/' className='text-blue-600 text-lg font-[300]'>Advanced Snail 92 All In One Cream 100g</Link>
                    <p className='text-sm font-[300] my-1'>Model: SMC</p>
                    <p className='text-sm font-[300]'>Price: 1900</p>
                </div>
            </div>

            <button className='hover:text-red-500'><AiOutlineDelete /></button>
        </div>
    );
};

export default WishlistCard;