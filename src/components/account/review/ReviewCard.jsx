'use client'
import Rating from '@/components/rating/Rating';
import { getAllReviewsByEmail } from '@/config/reviewApi';
import { AuthContext } from '@/context/AuthProvider';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

const ReviewCard = () => {
    const { user } = useContext(AuthContext);
    const [allReviews, setAllreviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllReviewsByEmail(user?.data?.user?.email);
                setAllreviews(response)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [user]);

    return (
        <div>
            {
                allReviews?.data?.map(review =>
                    < div className='grid grid-cols-6 items-center justify-center border rounded-md'>
                        <div className='col-span-2 md:col-span-1'>
                            <Image width={100} height={100} src={review?.product?.images?.[0]} alt='' quality={100} />
                        </div>
                        <div className='col-span-4 md:col-span-3'>
                            <p>{review?.product?.name}</p>
                            <p><span className='font-medium text-sm'>Your Comment </span>{review?.description}</p>
                        </div>
                        <div className='col-span-3 md:col-span-1'>
                        <Rating rate={review?.rating} />
                        </div>
                        <p className='col-span-3 md:col-span-1'>{new Date(review?.createdAt).toDateString()}</p>
                    </div>
                )
            }
        </div >
    );
};

export default ReviewCard;