'use client'
import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import logo from '../../../public/assets/logo.png'
import mLogo from '../../../public/assets/footer-logo.png'
import { FaBars, FaXmark } from "react-icons/fa6";
import MobileNav from "../mobileNav/MobileNav";
import { AuthContext } from "@/context/AuthProvider";
import { getSearchSuggestion } from "@/config/productsApi";
import { useRouter } from "next/navigation";
import CartDrawer from "@/components/cartDrawer/CartDrawer";
import MobileSearchBar from '../mobileNav/MobileSearchBar';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [suggestSearch, setSuggestSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [searchOpen, setSearchOpen] = useState(false);
    const router = useRouter();
    const { user, loading, handleLogout } = useContext(AuthContext);


    useEffect(() => {
        const searchMutation = async () => {
            const data = await getSearchSuggestion(suggestSearch);
            setSearchData(data?.data?.tags)

        }
        searchMutation();
    }, [suggestSearch])


    const handleSearch = (e) => {
        e.preventDefault();
        if (suggestSearch === '') {
            router.push('/');
        } else {
            router.push(`/products?search=${suggestSearch}`);
        }
    }


    return (
        <>
            <div className="bg-secondary text-white lg:bg-white lg:text-secondary">
                <div className='container mx-auto'>
                    <div className='mx-5 md:mx-0 py-4 md:py-7 flex items-center'>
                        <div className="w-1/4">
                            <div className="relative">
                                <form onSubmit={handleSearch}>
                                    <div className='hidden lg:flex items-center w-full'>
                                        <input onChange={(e) => setSuggestSearch(e.target.value)} className={`outline-none bg-gray-200 py-2 px-3 mr-1 placeholder:text-xs ${suggestSearch ? 'rounded-tl-2xl' : 'rounded-l-2xl'}`} type="text" placeholder='Search for products...' />
                                        <button type='button' className={`bg-gray-200 w-full py-2 px-3 ${suggestSearch ? 'rounded-tr-2xl' : 'rounded-r-2xl'}`}>
                                            <IoIosSearch className='text-dark text-2xl' />
                                        </button>
                                    </div>
                                </form>
                                <div className={`${suggestSearch ? 'block' : 'hidden'} bg-gray-200 shadow w-full border-t border-t-white absolute top-full rounded-b-2xl z-10 hidden lg:block`}>
                                    <ul>
                                        {
                                            searchData?.map((tag, idx) =>
                                                <li key={idx} className="cursor-pointer text-sm px-4 py-1 hover:bg-white ">
                                                    <Link href={`/products?search=${tag}`} className="w-full block">{tag}</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setToggle(!toggle)} className="lg:hidden text-2xl">
                                {toggle ? <FaXmark /> : <FaBars />}
                            </button>
                        </div>
                        <Link href='/' className='w-1/2 flex items-center justify-center'>
                            <Image height={600} width={1080} className="w-80 hidden lg:block" src={logo} alt="logo" />
                            <Image height={600} width={1080} className="w-80 lg:hidden" src={mLogo} alt="logo" />
                        </Link>
                        <div className='w-1/4 flex justify-end items-center gap-5'>
                            <Link className="hidden lg:block" href='/account'>Account</Link>
                            {user?.data?.user?.email ?
                                <button onClick={handleLogout} className="hidden lg:block">Logout</button> :
                                <Link className="hidden lg:block" href='/login'>Login</Link>}

                            <CartDrawer />
                        </div>
                    </div>
                </div>
            </div>

            {!toggle &&
                <MobileSearchBar
                    handleSearch={handleSearch}
                    searchData={searchData}
                    searchOpen={searchOpen}
                    setSuggestSearch={setSuggestSearch}
                    suggestSearch={suggestSearch}
                />
            }

            <MobileNav
                toggle={toggle}
                setToggle={setToggle}
                user={user}
                handleLogout={handleLogout}
            />


        </>
    );
};

export default Header;