'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const MobileSubNavButtonClient = ({ title, children }) => {
    const [toggle, setToggle] = useState(false);
    const path = usePathname()

    useEffect(()=>{
        setToggle(false)
    },[path])

    return (
        <>
            <li className='border-b bg-secondary border-b-dark border-opacity-10 py-2'>
                <button onClick={() => setToggle(!toggle)} type='button' className={`flex items-center justify-between w-full duration-500 ease-in-out transition-colors ${toggle ? 'uppercase text-white' : 'capitalize '}`}>
                    {title}
                    {toggle ? <FaMinus /> : <FaPlus />}
                </button>
            </li>
            <ul
                className={`w-full bg-secondary ps-4 ${toggle ? 'max-h-screen overflow-visible visible  pb-4' : 'max-h-0 overflow-hidden invisible'}`}
            >
                {children}
            </ul>
        </>
    );
};

export default MobileSubNavButtonClient;