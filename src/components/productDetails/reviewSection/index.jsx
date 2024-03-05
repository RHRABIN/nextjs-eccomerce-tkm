'use client'
import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import ProductReview from './ProductReview';
import WriteReview from './WriteReview';
import Rating from '@/components/rating/Rating';
import { getAllReviewsByProductId } from '@/config/reviewApi';
import toast from 'react-hot-toast';

const ReviewSection = ({ id, productId }) => {
    const [toggleReview, setToggleReview] = useState(false);
    const [allReviews, setAllreviews] = useState([]);
    const [isSucces, setIsSuccess] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllReviewsByProductId(productId);
                setAllreviews(response)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();

        if (isSucces) {
            toast.success('Review Added Successfull');
            fetchData();
        }
    }, [productId, isSucces]);

    
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0'>
                {!toggleReview ? <div className='flex items-start justify-between border-dotted border-b pb-5'>
                    {
                        allReviews?.data?.map(review =>
                            <div key={review?._id}>
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-gray-800 text-3xl font-[500]'>{review?.rating}</h1>
                                    <div className='flex items-center text-dark text-xl'>
                                        <Rating rate={review?.rating} />
                                    </div>
                                </div>
                                <p className='text-gray-800 font-[300]'>{`Based on ${allReviews?.data?.length} reviews`}</p>
                            </div>
                        )
                    }
                    <div>
                        <button onClick={() => setToggleReview(true)} className='bg-secondary mt-10 text-white py-2 px-4 hover:opacity-90 rounded-md font-[300]'>Write Review</button>
                    </div>
                </div>
                    :
                    <div className='mt-5'>
                        <WriteReview
                            id={id}
                            setToggleReview={setToggleReview}
                            setIsSuccess={setIsSuccess}
                        />
                    </div>}
                <div className='mt-5'>
                    <ProductReview
                        isSucces={isSucces}
                        setIsSuccess={setIsSuccess}
                        allReviews={allReviews} />
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;