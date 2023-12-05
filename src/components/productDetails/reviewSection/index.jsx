import React from 'react';
import { IoIosStar } from 'react-icons/io';
import ProductReview from './ProductReview';

const ReviewSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0 flex items-start justify-between border-dotted border-b pb-5'>
                <div>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-gray-800 text-3xl font-[500]'>0.0</h1>
                        <div className='flex items-center text-dark text-xl'>
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                        </div>
                    </div>
                    <p className='text-gray-800 font-[300]'>Based on 0 reviews</p>
                </div>
                <div>
                    <button className='bg-secondary text-white py-2 px-4 hover:opacity-90 rounded-md font-[300]'>Write Review</button>
                </div>
            </div>
            <div className='mt-5'>
                <ProductReview />
            </div>
        </div>
    );
};

export default ReviewSection;