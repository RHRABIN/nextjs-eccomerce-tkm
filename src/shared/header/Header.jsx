'use client'
import { BsBag } from "react-icons/bs";
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import logo from '../../../public/assets/logo.png'
import mLogo from '../../../public/assets/footer-logo.png'
import { FaBars, FaXmark } from "react-icons/fa6";
import ToggleButtonClient from "@/clientSideRender/navbar/ToggleButtonClient";
import MobileNav from "../mobileNav/MobileNav";
import Drawer from "@/components/drawer/Drawer";
import ChekoutProductCard from "@/components/card/ChekoutProductCard";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [suggestSearch, setSuggestSearch] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <div className="bg-secondary text-white lg:bg-white lg:text-secondary">
                <div className='container mx-auto'>
                    <div className='mx-5 md:mx-0 py-4 md:py-7 flex items-center'>
                        <div className="w-1/4">
                            <div className="relative">
                                <div className='hidden lg:flex items-center w-full'>
                                    <input onChange={(e) => setSuggestSearch(e.target.value)} className={`outline-none bg-gray-200 py-2 px-3 mr-1 placeholder:text-xs ${suggestSearch ? 'rounded-tl-2xl' : 'rounded-l-2xl'}`} type="text" placeholder='Search for products...' />
                                    <button type='button' className={`bg-gray-200 w-full py-2 px-3 ${suggestSearch ? 'rounded-tr-2xl' : 'rounded-r-2xl'}`}>
                                        <IoIosSearch className='text-dark text-2xl' />
                                    </button>
                                </div>
                                <div className={`${suggestSearch ? 'block' : 'hidden'} bg-gray-200 shadow w-full border-t border-t-white absolute top-full rounded-b-2xl z-10`}>
                                    <ul>
                                        <li className="cursor-pointer px-4 py-1 hover:bg-white">{suggestSearch}</li>
                                        <li className="cursor-pointer px-4 py-1 hover:bg-white">{suggestSearch}</li>
                                        <li className="cursor-pointer px-4 py-1 hover:bg-white rounded-b-2xl">{suggestSearch}</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <ToggleButtonClient /> */}
                            <button onClick={() => setToggle(!toggle)} className="lg:hidden text-2xl">
                                {toggle ? <FaXmark /> : <FaBars />}
                            </button>
                        </div>
                        <Link href='/' className='w-1/2 flex items-center justify-center'>
                            <Image height={600} width={1080} className="w-80 hidden lg:block" src={logo} />
                            <Image height={600} width={1080} className="w-80 lg:hidden" src={mLogo} />
                        </Link>
                        <div className='w-1/4 flex justify-end items-center gap-5'>
                            <Link className="hidden lg:block" href='/account'>Account</Link>
                            <Link className="hidden lg:block" href='/login'>Login</Link>
                            <button onClick={() => setOpenDrawer(true)} className="relative">
                                <BsBag />
                                <span className="absolute bottom-2 left-2 bg-red-500 h-5 w-5 rounded-full text-white flex justify-center items-center"><small>0</small></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <MobileNav toggle={toggle} />

            <Drawer
                title={'Your Bag'}
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            >

                <ChekoutProductCard />
            </Drawer>
        </>
    );
};

export default Header;