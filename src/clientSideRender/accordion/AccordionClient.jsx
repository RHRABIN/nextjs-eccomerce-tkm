'use client'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const AccordionClient = ({ children, title, isDropdown }) => {
    const [isOpen, setIsOpen] = useState(isDropdown ? false : true);
    const pathname = usePathname()

    const toggleAccordion = () => {
        
        if (!isDropdown){
            return;
        }else{
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={`${isDropdown ? 'mt-1' : 'border-b py-3'}`}>
            <button
                type='button'
                className={` ${pathname.includes('product-detail')  ? 'text-[15px] px-3' : ''} ${pathname == "/products" ? 'uppercase px-3 text-sm' : 'bg-[#f9f9f9]'} px-1  rounded-t font-[400] text-start flex items-center justify-between cursor-pointer group w-full text-gray-800 border-0   ${isOpen ? 'rounded-b-none' : 'rounded-b'} ${isDropdown ? 'py-2.5': 'py-1'}`}
                onClick={toggleAccordion}
            >
                {title}
                {isDropdown && <IoIosArrowDown className={isOpen ? 'rotate-180 duration-300 ease-in' : 'duration-300 ease-out'} />}
            </button>
            <div
                className={`bg-white overflow-hidden ${isOpen ? 'h-fit overflow-visible rounded-b duration-500 ease-in delay-75' : 'hidden'}`}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionClient;
