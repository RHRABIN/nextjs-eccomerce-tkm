'use client'
import React, { useState } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

const Modal = ({ title, modalOpen, setModalOpen }) => {

    return (
        <>
            {
                modalOpen &&
                <div className='bg-[rgba(0,0,0,0.50)]  w-full min-h-screen fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center ease-in-out duration-700'>
                    <div className='bg-white w-1/2 p-4 rounded-md'>
                        <div className='flex items-center justify-between'>
                            <h1>{title}</h1>
                            <button onClick={() => setModalOpen(false)} className='text-2xl'><HiOutlineXMark /></button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;