import Link from 'next/link';
import React from 'react';

const BrandsPage = () => {
    return (
        <div className='container mx-auto my-5 md:my-10'>
            <div className='mx-4 md:mx-0'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl text-center font-medium border-b-8 w-fit border-b-primary'>Find Your Favorite Brand</h1>
                    <span className='flex items-center gap-2 mt-4'>
                        <Link href='/'>Home</Link>
                        <p>-</p>
                        <Link href='/brands'>Brands</Link>
                    </span>
                </div>

                <span className='flex items-center gap-2 mt-6'>
                    <p className='font-light'>Brnad Index:</p>
                    <p className='font-semibold text-sm'>A B C D</p>
                </span>
                <div className='border mt-6'>
                    <p className='font-semibold text-sm p-3 uppercase bg-[rgb(0,0,0,0.01)]'>A</p>
                    <div className='border-t py-3 px-5'>
                        <li><Link href='' className='uppercase font-light hover:text-primary text-sm'>Abib</Link></li>
                    </div>
                </div>
                <div className='border mt-6'>
                    <p className='font-semibold text-sm p-3 uppercase bg-[rgb(0,0,0,0.01)]'>b</p>
                    <div className='border-t py-3 px-5'>
                        <li><Link href='' className='uppercase font-light hover:text-primary text-sm'>Abib</Link></li>
                    </div>
                </div>
                <div className='border mt-6'>
                    <p className='font-semibold text-sm p-3 uppercase bg-[rgb(0,0,0,0.01)]'>c</p>
                    <div className='border-t py-3 px-5'>
                        <li><Link href='' className='uppercase font-light hover:text-primary text-sm'>Abib</Link></li>
                    </div>
                </div>
                <div className='border mt-6'>
                    <p className='font-semibold text-sm p-3 uppercase bg-[rgb(0,0,0,0.01)]'>d</p>
                    <div className='border-t py-3 px-5'>
                        <li><Link href='' className='uppercase font-light hover:text-primary text-sm'>Abib</Link></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandsPage;