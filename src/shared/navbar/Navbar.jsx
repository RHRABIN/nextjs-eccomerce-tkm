import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className='bg-secondary hidden md:block'>
            <nav className='container mx-auto text-white'>
                <ul className='flex items-center gap-6 text-sm justify-center  relative'>
                    <li className=''><Link href='' className='uppercase border-b-2 border-b-secondary hover:border-b-2 hover:border-b-primary pb-1'>New</Link></li>
                    {/* sub menu start */}
                    <li className='group py-4'>
                        <span className='flex items-start gap-x-2 cursor-pointer'>
                            <Link href='' className='uppercase'>Best</Link>
                            <IoIosArrowDown className='text-white text-lg' />
                        </span>
                        {/* menu */}
                        <ul className='absolute z-10 bg-secondary top-full hidden group-hover:block group-hover:border-t group-hover:border-t-gray-500'>
                            <li className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                <Link href='' className='uppercase block w-full'>Routine</Link>
                                {/* <IoIosArrowForward className='text-white text-lg' /> */}
                            </li>

                            {/* sub menu children start */}

                            <li className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 w-60 relative flex items-start gap-2 cursor-pointer group/sub'>
                                <Link href='' className='uppercase block w-full'>Shop By</Link>
                                <IoIosArrowForward className='text-white text-lg' />

                                <ul className='absolute bg-secondary left-full top-0 hidden group-hover/sub:block'>
                                    <li className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                        <Link href='' className='uppercase block w-full'>Routine</Link>
                                        {/* <IoIosArrowForward className='text-white text-lg' /> */}
                                    </li>
                                    <li className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                        <Link href='' className='uppercase block w-full'>Routine</Link>
                                        {/* <IoIosArrowForward className='text-white text-lg' /> */}
                                    </li>
                                    <li className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                        <Link href='' className='uppercase block w-full'>Routine</Link>
                                        {/* <IoIosArrowForward className='text-white text-lg' /> */}
                                    </li>
                                </ul>
                            </li>

                            {/* sub menu children end */}

                            <li className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                <Link href='' className='uppercase block w-full'>Routine</Link>
                                {/* <IoIosArrowForward className='text-white text-lg' /> */}
                            </li>
                            <li className='border-b-gray-500 border-opacity-20 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                <Link href='' className='uppercase block w-full'>Routine</Link>
                                {/* <IoIosArrowForward className='text-white text-lg' /> */}
                            </li>
                        </ul>
                    </li>
                    {/* sub menu end  */}

                    <li className=''><Link href='' className='uppercase border-b-2 border-b-secondary hover:border-b-2 hover:border-b-primary pb-1'>Routine</Link></li>
                    <li className=''><Link href='' className='uppercase border-b-2 border-b-secondary hover:border-b-2 hover:border-b-primary pb-1'>Shop By</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;