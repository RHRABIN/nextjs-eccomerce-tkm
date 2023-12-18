'use client'
import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

const BackToTop = () => {
    const [backtotop, setBackToTop] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setBackToTop(true);
        }
        else {
            setBackToTop(false);
        }
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            {
                backtotop && (
                    <button onClick={scrollToTop} className='fixed bottom-12 right-8 md:12 h-10 w-10 flex items-center justify-center bg-primary text-white hover:bg-black z-50 rounded text-center'><FaAngleUp className='text-2xl m-0'></FaAngleUp></button>
                )
            }
        </div>
    );
};

export default BackToTop;