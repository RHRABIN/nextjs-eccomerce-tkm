import React from 'react';

const SearchTopbar = () => {
    return (
        <div className='mb-10 flex gap-4 justify-end items-center'>
            <select className='border border-dark rounded outline-none p-2 text-gray-800 text-sm font-[300]' name="" id="">
                <option value="default">Default Sorting</option>
                <option value="new">Newest Product</option>
                <option value="low">Price low to high</option>
                <option value="high">Price high to low</option>
            </select>
            <select className='border border-dark rounded outline-none p-2 text-gray-800 text-sm font-[300]' name="" id="">
                <option value="12">Show 12</option>
                <option value="24">Show 24</option>
                <option value="36">Show 36</option>
                <option value="50">Show 50</option>
            </select>
        </div>
    );
};

export default SearchTopbar;