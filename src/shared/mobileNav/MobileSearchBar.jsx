import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const MobileSearchBar = ({ searchOpen, handleSearch, setSuggestSearch, suggestSearch, searchData }) => {
    return (
        <div className={searchOpen ? 'block' : 'hidden'}>
            <div className={`px-4 py-2 bg-secondary`}>
                <form onSubmit={handleSearch}>
                    <div className='lg:hidden flex items-center w-full'>
                        <input onChange={(e) => setSuggestSearch(e.target.value)} className={`outline-none bg-gray-200 py-2 px-3 mr-1 placeholder:text-xs ${suggestSearch ? 'rounded-tl-2xl' : 'rounded-l-2xl'}`} type="text" placeholder='Search for products...' />
                        <button type='button' className={`bg-gray-200 w-full py-2 px-3 ${suggestSearch ? 'rounded-tr-2xl' : 'rounded-r-2xl'}`}>
                            <IoIosSearch className='text-dark text-2xl' />
                        </button>
                    </div>
                </form>
                <div className={`${suggestSearch ? 'block' : 'hidden'} bg-gray-200 shadow w-full border-t border-t-white rounded-b-2xl z-50`}>
                    <ul>
                        {
                            searchData?.map((tag, idx) =>
                                <li key={idx} className="cursor-pointer text-sm px-4 py-1 hover:bg-white">
                                    <Link href={`/products?search=${tag}`} className="w-full block">{tag}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileSearchBar;