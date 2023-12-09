'use client'
import MobileSubNavButtonClient from '@/clientSideRender/navbar/MobileSubNavButtonClient';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const MobileNav = () => {
    return (
        <nav className='bg-secondary text-dark px-4 pb-4 h-fit'>
            <ul>
                <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>New</Link></li>
                <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>Best</Link></li>

                {/* sub menu start */}
                <MobileSubNavButtonClient title={'Routine'}>
                    <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>New</Link></li>
                    <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>Best</Link></li>
                </MobileSubNavButtonClient>
                <MobileSubNavButtonClient title={'Shop By'}>
                    <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>New</Link></li>
                    <li className='hover:text-white border-b border-b-dark border-opacity-10 py-2'><Link href='/' className='w-full block'>Best</Link></li>
                </MobileSubNavButtonClient>
                {/* sub menu end  */}
            </ul>
        </nav>
    );
};

export default MobileNav;