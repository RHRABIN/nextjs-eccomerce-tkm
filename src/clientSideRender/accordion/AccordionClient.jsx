'use client'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const AccordionClient = ({ children, title, isMobile }) => {
    const [isOpen, setIsOpen] = useState(isMobile ? true : false);

    const toggleAccordion = () => {
        if (isMobile){
            return
        }else{
            setIsOpen(!isOpen);
        }
    };

    return (
        <div>
            <button
                type='button'
                className={`bg-[#f9f9f9] text-sm rounded-t font-[400] text-start flex items-center justify-between cursor-pointer group w-full text-gray-800 border-0 py-3 px-3 my-1 ${isOpen ? 'rounded-b-none' : 'rounded-b'}`}
                onClick={toggleAccordion}
            >
                {title}
                {!isMobile && <IoIosArrowDown className={isOpen ? 'rotate-180 duration-300 ease-in' : 'duration-300 ease-out'} />}
            </button>
            <div
                className={`bg-white overflow-hidden ${isOpen ? 'h-fit overflow-visible rounded-b duration-500 ease-in delay-75' : 'h-0'
                    }`}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionClient;
