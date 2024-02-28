'use client'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const AccordionClient = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                type='button'
                className={`bg-[#f9f9f9] text-sm rounded-t font-[400] text-start flex items-center justify-between py-2 cursor-pointer group w-full text-gray-800 border-0 px-2 my-1.5 ${isOpen ? 'rounded-b-none' : 'rounded-b'}`}
                onClick={toggleAccordion}
            >
                {title}
                <IoIosArrowDown className={isOpen ? 'rotate-180 duration-300 ease-in' : 'duration-300 ease-out'} />
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
