'use client'
import { Drawer } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosSearch } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';
import searchImg from '../../../public/assets/search.png'

const MobileSearchBar = ({ handleSearch, setSuggestSearch, searchData }) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const searchInputRef = useRef(null);

    useEffect(() => {
        if (openDrawer) {
            searchInputRef.current.focus();
        }
    }, [openDrawer]);

    return (
        <div className='bg-secondary p-2 lg:hidden'>
            <div onClick={() => setOpenDrawer(true)} className=' flex items-center rounded-md bg-white'>
                <input className='rounded-md outline-none w-full p-2 focus:invisible placeholder:text-sm' placeholder='Search your product' type="text" />
                <IoIosSearch className='text-2xl mx-2' />
            </div>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                closeIcon={<IoIosArrowBack className='text-2xl text-white' />}
                headerStyle={{ backgroundColor: '#737373', padding: '0.75rem' }}
                bodyStyle={{ padding: '0px' }}
                extra={
                    <div>
                        <form onSubmit={handleSearch}>
                            <div onClick={() => setOpenDrawer(true)} className=' flex items-center rounded-md bg-white'>
                                <input ref={searchInputRef} onChange={(e) => setSuggestSearch(e.target.value)} className='rounded-md outline-none w-full p-2 placeholder:text-sm focus:visible' placeholder='Search your product' type="text" />
                                <IoIosSearch className='text-2xl mx-2' />
                            </div>
                        </form>
                    </div>
                }
            >
                <ul>
                    {
                        searchData?.length > 0 ?
                            searchData?.map((tag, idx) =>
                                <li onClick={() => setOpenDrawer(false)} key={idx} className='border-b border-gray-50 '>
                                    <Link href={`/products?search=${tag}`} className='w-full flex items-center justify-between py-2 px-4'>
                                        {tag}
                                        <MdOutlineArrowOutward />
                                    </Link>

                                </li>
                            ) :
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-center mt-5 text-dark'>No Search Result Found</p>
                                <div className='flex items-center justify-center h-96'>
                                    <Image className='w-52' src={searchImg} placeholder='blur' quality={100} />
                                </div>
                            </div>
                    }

                </ul>
            </Drawer>
        </div>
    );
};

export default MobileSearchBar;