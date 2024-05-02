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
import Hamburger from 'hamburger-react'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [suggestSearch, setSuggestSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [searchOpen, setSearchOpen] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);
    const router = useRouter();
    const suggestionBarRef = useRef();
    const { user, loading, handleLogout, loginSuccess } = useContext(AuthContext);


    useEffect(() => {
        let isIgnore = false;

        const searchMutation = async () => {
            if(suggestSearch){
                const data = await getSearchSuggestion(suggestSearch);
                setSearchData(data?.data?.tags)
            }

        }
        
        if(!isIgnore){
            searchMutation();
        }

        return ()=>{
            isIgnore = true;
        }
    }, [suggestSearch])


    const handleSearch = (e) => {
        e.preventDefault();
        if (suggestSearch === '') {
            router.push('/');
        } else {
            router.push(`/products?search=${suggestSearch}`);
        }
    }


    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!suggestionBarRef.current?.contains(e.target)) {
                setSearchOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, []);


    return (
        <>
            <div className="bg-secondary text-white lg:bg-white lg:text-secondary">
                <div className='container mx-auto'>
                    <div className='mx-5 md:mx-0 py-2 md:py-7 flex items-center'>
                        <div className="w-1/4 md:w-[300px]">
                            <div ref={suggestionBarRef} className="relative">
                                <form onSubmit={handleSearch}>
                                    <div className='hidden lg:flex items-center w-full'>

                                        <input
                                            onFocus={() => setSearchOpen(true)}
                                            onChange={(e) => setSuggestSearch(e.target.value)}
                                            className={`md:min-w-[250px] outline-none bg-gray-200 py-2 px-3 mr-1 placeholder:text-xs ${(searchOpen && searchData?.length > 0) ? 'rounded-tl-2xl' : 'rounded-l-2xl'}`} type="text" placeholder='Search for products...'
                                            value={suggestSearch}
                                        />

                                        <button type='button' className={` bg-gray-200 w-full py-2 px-2 ${(searchOpen && searchData?.length > 0) ? 'rounded-tr-2xl' : 'rounded-r-2xl'}`}>
                                            <IoIosSearch className='text-dark text-2xl' />
                                        </button>

                                    </div>
                                </form>
                                <div className={`${(searchOpen && searchData?.length > 0) ? 'hidden md:block' : 'hidden'} bg-gray-200 shadow w-full border-t border-t-white absolute top-full rounded-b-2xl z-10 overflow-hidden`}>
                                    <ul>
                                        {
                                            searchData?.map((tag, idx) =>
                                                <li key={idx} className="cursor-pointer text-sm px-4 py-1 hover:bg-white ">
                                                    <Link onClick={() => {
                                                        setSearchOpen(false);
                                                        setSuggestSearch("")
                                                    }} href={`/product-detail/${tag.slug}`} className="w-full block truncate">{tag.name}</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            
                            <Hamburger  size={22} toggled={toggle} toggle={() => setToggle(!toggle)} />

                        </div>


                        <div className='w-1/2 flex items-center justify-center'>
                            <Link href='/' className='w-fit'>
                                <Image height={600} width={500} className="w-80 lg:max-h-[70px] hidden lg:block" src={logo} alt="logo" />
                                <Image height={600} width={500} className="w-80 lg:hidden" src={mLogo} alt="logo" />
                            </Link>
                        </div>



                        <div className='w-1/4 flex justify-end items-center gap-5'>
                            {user?.data?.user?.email || loginSuccess ?
                                <Link className="hidden lg:block" href='/account'>Account</Link> :
                                <Link className="hidden lg:block" href='/login'>Account</Link>
                            }
                            {user?.data?.user?.email || loginSuccess ?
                                <button onClick={handleLogout} className="hidden lg:block">Logout</button> :
                                <Link className="hidden lg:block" href='/login'>Login</Link>}

                            {/* mobile search icon */}
                            <button className='lg:hidden' onClick={() => setOpenDrawer(true)} >
                                <IoIosSearch className='text-2xl' />
                            </button>
                            

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
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                />
            }

            <MobileNav
                toggle={toggle}
                setToggle={setToggle}
                user={user}
                handleLogout={handleLogout}
                loginSuccess={loginSuccess}
            />


        </>
    );
};

export default Header;