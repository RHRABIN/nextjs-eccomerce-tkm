'use client'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const AccordionClient = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='my-2'>
            <button
                type='button'
                className={`bg-gray-200 text-sm rounded-t font-[400] text-start flex items-center justify-between p-2 cursor-pointer group w-full text-gray-800 border-0 ${isOpen ? 'rounded-b-none' : 'rounded-b'}`}
                onClick={toggleAccordion}
            >
                {title}
                <IoIosArrowDown className={isOpen ? 'rotate-180 duration-300 ease-in' : 'duration-300 ease-out'} />
            </button>
            <div
                className={`bg-gray-100 overflow-hidden ${isOpen ? 'h-fit overflow-visible rounded-b duration-500 ease-in delay-75' : 'h-0'
                    }`}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionClient;