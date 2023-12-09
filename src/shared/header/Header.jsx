import { BsBag } from "react-icons/bs";
import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import logo from '../../../public/assets/logo.png'
import mLogo from '../../../public/assets/footer-logo.png'
import { FaBars } from "react-icons/fa6";

const Header = () => {

    return (
        <div className="bg-secondary text-white lg:bg-white lg:text-secondary">
            <div className='container mx-auto'>
                <div className='mx-5 md:mx-0 py-4 flex items-center'>
                    <div className="w-1/4">
                        <div className='hidden lg:flex items-center'>
                            <input className='outline-none bg-gray-200 py-2 px-3 rounded-l-2xl mr-2 placeholder:text-xs' type="text" placeholder='Search for products...' />
                            <button type='button' className='bg-gray-200 py-2 px-3 rounded-r-2xl'>
                                <IoIosSearch className='text-dark text-2xl' />
                            </button>
                        </div>
                        <button className="lg:hidden">
                            <FaBars />
                        </button>
                    </div>
                    <Link href='/' className='w-1/2 flex items-center justify-center'>
                        <Image height={600} width={1080} className="w-80 hidden lg:block" src={logo} />
                        <Image height={600} width={1080} className="w-80 lg:hidden" src={mLogo} />
                    </Link>
                    <div className='w-1/4 flex justify-end items-center gap-5'>
                        <Link className="hidden lg:block" href='/account'>Account</Link>
                        <Link className="hidden lg:block" href='/login'>Login</Link>
                        <button className="relative">
                            <BsBag />
                            <span className="absolute bottom-2 left-2 bg-red-500 h-5 w-5 rounded-full text-white flex justify-center items-center"><small>0</small></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;