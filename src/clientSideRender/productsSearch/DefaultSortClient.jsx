import React from 'react';

const DefaultSortClient = () => {
    return (
        <button className='flex items-center gap-2 border rounded p-2 w-3/4 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M21 18V21H19V18H17V15H23V18H21ZM5 18V21H3V18H1V15H7V18H5ZM11 6V3H13V6H15V9H9V6H11ZM11 11H13V21H11V11ZM3 13V3H5V13H3ZM19 13V3H21V13H19Z"></path></svg>
            <p className='text-gray-800 font-[300] uppercase text-sm'>Filter & Sort</p>
        </button>
    );
};

export default DefaultSortClient;