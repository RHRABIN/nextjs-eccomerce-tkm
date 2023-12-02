import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className='bg-secondary'>
            <nav className='container mx-auto text-white'>
                <ul className='flex items-center gap-6 text-sm justify-center'>
                    <li className='border-b-2 border-b-[#212529] hover:border-b-2 hover:border-b-primary'><Link href='' className='uppercase'>New</Link></li>
                    {/* sub menu start */}
                    <li className='border-b-2 border-b-secondary hover:border-b-2 relative py-4 group'>
                        <span className='flex items-start gap-2 cursor-pointer'>
                            <Link href='' className='uppercase'>Best</Link>
                            <IoIosArrowDown className='text-white text-lg' />
                        </span>
                        {/* menu */}
                        <ul className='absolute z-10 bg-secondary top-[100%] hidden group-hover:block group-hover:border-t group-hover:border-t-gray-500'>
                            <li className='border-b-gray-500 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                <Link href='' className='uppercase block w-full'>Routine</Link>
                                <IoIosArrowForward className='text-white text-lg' />
                            </li>

                            {/* sub menu children start */}

                            <li className='border-b-gray-500 hover:bg-dark border-b p-2 w-60 relative flex items-start gap-2 cursor-pointer group/sub'>
                                <Link href='' className='uppercase block w-full'>Shop By</Link>
                                <IoIosArrowForward className='text-white text-lg' />

                                <ul className='absolute bg-secondary left-[100%] top-0 hidden group-hover/sub:block'>
                                    <li className='border-b-gray-500 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                        <Link href='' className='uppercase block w-full'>Routine</Link>
                                        <IoIosArrowForward className='text-white text-lg' />
                                    </li>
                                    <li className='border-b-gray-500 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                        <Link href='' className='uppercase block w-full'>Routine</Link>
                                        <IoIosArrowForward className='text-white text-lg' />
                                    </li>
                                    <li className='border-b-gray-500 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                        <Link href='' className='uppercase block w-full'>Routine</Link>
                                        <IoIosArrowForward className='text-white text-lg' />
                                    </li>
                                </ul>
                            </li>

                            {/* sub menu children end */}

                            <li className='border-b-gray-500 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                <Link href='' className='uppercase block w-full'>Routine</Link>
                                <IoIosArrowForward className='text-white text-lg' />
                            </li>
                            <li className='border-b-gray-500 hover:bg-dark border-b p-2 w-60 flex items-start gap-2 cursor-pointer'>
                                <Link href='' className='uppercase block w-full'>Routine</Link>
                                <IoIosArrowForward className='text-white text-lg' />
                            </li>
                        </ul>
                    </li>
                    {/* sub menu end  */}

                    <li className='border-b-2 border-b-secondary hover:border-b-2 hover:border-b-primary'><Link href='' className='uppercase'>Routine</Link></li>
                    <li className='border-b-2 border-b-secondary hover:border-b-2 hover:border-b-primary'><Link href='' className='uppercase'>Shop By</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;