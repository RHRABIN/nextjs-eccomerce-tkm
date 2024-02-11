'use client'
import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import ProductReview from './ProductReview';
import WriteReview from './WriteReview';
import Rating from '@/components/rating/Rating';
import { getAllReviewsByProductId } from '@/config/reviewApi';

const ReviewSection = ({ productId }) => {
    const [toggleReview, setToggleReview] = useState(false);
    const [allReviews, setAllreviews] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllReviewsByProductId(productId);
                setAllreviews(response)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, [productId]);

    console.log(allReviews)

    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0'>
                {!toggleReview ? <div className='flex items-start justify-between border-dotted border-b pb-5'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-gray-800 text-3xl font-[500]'>0.0</h1>
                            <div className='flex items-center text-dark text-xl'>
                                <Rating rate={4} />
                            </div>
                        </div>
                        <p className='text-gray-800 font-[300]'>Based on 0 reviews</p>
                    </div>
                    <div>
                        <button onClick={() => setToggleReview(true)} className='bg-secondary text-white py-2 px-4 hover:opacity-90 rounded-md font-[300]'>Write Review</button>
                    </div>
                </div>
                    :
                    <div className='mt-5'>
                        <WriteReview
                            productId={id}
                            setToggleReview={setToggleReview}
                        />
                    </div>}
                <div className='mt-5'>
                    <ProductReview />
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;