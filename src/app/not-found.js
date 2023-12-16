import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import notFoundImg from '../../public/assets/not_found.svg'

const NotFoundPage = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='md:flex items-center gap-4 mx-6 md:mx-0'>
                <div className='md:w-1/2'>
                    <h1 className='text-4xl font-medium'><span className='text-primary'>Oops!</span> The page not found!</h1>
                    <h2 className='text-2xl font-medium mt-4'>Please go back</h2>
                    <div className='mt-10'>
                        <Link href='/' className='bg-secondary text-white font-medium px-6 py-2 rounded hover:opacity-90'>Go to home</Link>
                    </div>
                </div>
                <div className='md:w-1/2 mt-10 md:mt-0'>
                    <Image height={720} width={1280} src={notFoundImg} alt='404' />
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;