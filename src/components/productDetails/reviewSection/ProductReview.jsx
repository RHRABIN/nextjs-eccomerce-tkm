import Rating from '@/components/rating/Rating';
import React from 'react';

const ProductReview = ({ allReviews, isSucces, setIsSuccess }) => {
    return (
        <div>
            <h1 className='text-gray-800 text-lg border-b-2 w-fit pb-2 border-b-black'>Product Reviews</h1>
            {
                allReviews?.data?.length > 0 || isSucces ?
                    <div>
                        {
                            allReviews?.data?.map(review =>
                                <div key={review?._id} className='flex mt-4'>
                                    <div className='w-1/3 border-r mr-4'>
                                        <h1 className='font-medium md:text-lg'>Product Reviews</h1>
                                        <p>{review?.user?.name}</p>
                                    </div>
                                    <div className='w-2/3'>
                                        <Rating rate={review?.rating} />
                                        <p className='my-2'>{new Date(review?.createdAt).toDateString()}</p>
                                        <p>{review?.description}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div> :
                    <div className='mt-8'>
                        <h1 className='text-gray-800 text-center'>No Reviews Added</h1>
                    </div>
            }
        </div>
    );
};

export default ProductReview;