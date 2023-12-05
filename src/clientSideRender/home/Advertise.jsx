'use client'
import React, { useState } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';

const AdvertiseClient = () => {
    const [closeAdd, setCloseAdd] = useState(false);
    const handleClose = () => {
        setCloseAdd(true)
    }
    return (
        <>
            <button onClick={handleClose} className='bg-white rounded-full absolute right-0 top-1/3 mr-4 md:mr-0'>
                <HiMiniXMark />
            </button>
        </>
    );
};

export default AdvertiseClient;