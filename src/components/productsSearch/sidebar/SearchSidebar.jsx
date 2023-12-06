import React from 'react';
import { MdPlayArrow } from "react-icons/md";

const SearchSidebar = () => {
    return (
        <div className='border rounded ring-1 ring-gray-100 p-4'>
            <div className='flex items-center justify-between border-b border-dark pb-4'>
                <p className='text-gray-800 font-[500] text-lg'>Filter Section</p>
                <button className='text-primary font-semibold' type='button'>Clear All</button>
            </div>

            <div className='mt-10'>
                <p className='text-gray-800 font-[500] text-lg mb-2'>Price</p>
                <form className='flex items-center gap-2'>
                    <input className='w-2/5 border border-dark rounded outline-none p-1 placeholder:text-black font-[300] placeholder:text-xs' placeholder='Min' type="text" />

                    <input className='w-2/5 border border-dark rounded outline-none p-1 placeholder:text-black font-[300] placeholder:text-xs' placeholder='Max' type="text" />
                    <button className='bg-blue-500 p-2'>
                        <MdPlayArrow className='text-white' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchSidebar;