'use client'
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Drawer = ({ title, openDrawer, setOpenDrawer, children }) => {

    return (
        <>

            <div className={`fixed top-0 left-0 right-0 bottom-0 z-50`}>
                <div className={`bg-[rgb(0,0,0,0.5)] absolute h-full duration-700 ease-in delay-300 w-full ${openDrawer ? 'opacity-100' : 'opacity-0'}`}>

                </div>
                <div className={`bg-white p-6 w-1/3 absolute h-full ease-in-out duration-700 delay-75 ${openDrawer ? 'right-0' : '-right-[300rem]'}`}>
                    <div className='flex items-center justify-between mb-4'>
                        <h1 className='text-xl font-medium'>{title}</h1>
                        <button onClick={() => setOpenDrawer(false)} className='text-xl font-light border border-white hover:border-dark'><AiOutlineClose /></button>
                    </div>

                    {children}

                </div>
            </div>
        </>
    );
};

export default Drawer;