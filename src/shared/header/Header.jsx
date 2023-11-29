
import React from 'react';
import { IoIosSearch } from "react-icons/io";

const Header = () => {

    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0 py-4 flex items-center'>
                <div className='w-1/3 flex items-center'>
                    <input className='outline-none bg-gray-200 py-2 px-3 rounded-l-2xl mr-2 placeholder:text-xs' type="text" placeholder='Search for products...' />
                    <button type='button' className='bg-gray-200 py-2 px-3 rounded-r-2xl'>
                        <IoIosSearch className='text-dark text-2xl' />
                    </button>
                </div>
                <div className='w-1/3'>
                    <h1 className='text-4xl font-semibold text-center'>Logo Here</h1>
                </div>
                <div className='w-1/3'>

                </div>
            </div>
        </div>
    );
};

export default Header;