'use client'
import { Drawer } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React  from 'react';
import { IoIosArrowBack, IoIosSearch } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';
import searchImg from '../../../public/assets/search.png'

const MobileSearchBar = ({ handleSearch, setSuggestSearch, searchData, openDrawer, setOpenDrawer }) => {
  

    return (
        <div className='bg-secondary lg:hidden'>
            {/* <div onClick={() => setOpenDrawer(true)} className=' flex items-center rounded-md bg-white'>
                <input className='rounded-md outline-none w-full p-2 focus:invisible placeholder:text-sm' placeholder='Search your product' type="text" />
                <IoIosSearch className='text-2xl mx-2' />
            </div> */}
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                title={null}
                closeIcon={null}
                styles={{
                    body: { padding: '0px' }
                }}
            >
                <div className='bg-secondary p-3 flex'>
                    <button onClick={() => setOpenDrawer(false)} className='w-[10%]'>
                        <IoIosArrowBack className='text-2xl text-white' />
                    </button>
                    <form onSubmit={handleSearch} className='w-[90%]'>
                        <div onClick={() => setOpenDrawer(true)} className=' flex items-center rounded-md bg-white'>
                            <input autoFocus={true} onChange={(e) => setSuggestSearch(e.target.value)} className='rounded-md outline-none w-full p-2 placeholder:text-sm' placeholder='Search your product' type="text" />
                            <IoIosSearch className='text-2xl mx-2' />
                        </div>
                    </form>
                </div>

                <ul>
                    {
                        searchData?.length > 0 ?
                            searchData?.map((tag, idx) =>
                                <li onClick={() => setOpenDrawer(false)} key={idx} className='border-b border-gray-50 '>
                                    <Link href={`/product-detail/${tag.slug}`} className='w-full flex items-center justify-between py-2 px-4'>
                                        {tag.name}
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