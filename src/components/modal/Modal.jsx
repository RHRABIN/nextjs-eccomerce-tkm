'use client'
import React, { useState } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

const Modal = ({ title, modalOpen, setModalOpen, children }) => {

    return (
        <>
            {
                modalOpen &&
                <div className='bg-[rgba(0,0,0,0.50)]  w-full min-h-screen fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center'>
                    <div className='bg-white md:w-1/2 mx-4 md:mx-0 p-4 rounded-md'>
                        <div className='flex items-center justify-between border-dotted border-b border-b-dark pb-4'>
                            <h1 className='font-[500] text-lg'>{title}</h1>
                            <button onClick={() => setModalOpen(false)} className='text-2xl'><HiOutlineXMark /></button>
                        </div>

                        <div className='my-4'>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;