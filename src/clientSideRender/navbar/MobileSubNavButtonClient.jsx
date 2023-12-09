'use client'
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const MobileSubNavButtonClient = ({ title, children }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <li className='hover:text-white border-b bg-secondary border-b-dark border-opacity-10 py-2'>
                <button onClick={() => setToggle(!toggle)} type='button' className='flex items-center justify-between w-full'>
                    {title}
                    {toggle ? <FaMinus /> : <FaPlus />}
                </button>
            </li>
            <ul
                className={`w-full bg-secondary ps-4 ease-in duration-500 transition-transform ${toggle ? 'block' : 'hidden'}`}
            >
                {children}
            </ul>
        </>
    );
};

export default MobileSubNavButtonClient;