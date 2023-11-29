import AdvertiseClient from '@/clientSideRender/home/Advertise';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

const Advertise = () => {
    return (
        <>
            <div style={{ backgroundImage: 'linear-gradient(to right, rgb(184, 203, 184) 0%, rgb(184, 203, 184) 0%, rgb(180, 101, 218) 0%, rgb(207, 108, 201) 33%, rgb(220, 20, 60) 66%, rgb(220, 20, 60) 100%)' }}>
                <div className='container mx-auto relative flex flex-col items-center p-3'>
                    <p className='uppercase text-white text-xs text-center'>Rice & Mugwort Line | UP TO 40% OFF</p>
                    <button className='flex items-center gap-2 text-white text-xs mt-2'>
                        Shop Now
                        <FaArrowRightLong />
                    </button>
                    <button className='bg-white rounded-full absolute right-0 top-1/3'>
                        <HiMiniXMark />
                    </button>
                </div>
            </div>
            <AdvertiseClient/>
        </>
    );
};

export default Advertise;