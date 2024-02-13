import ReviewCard from '@/components/account/review/ReviewCard';
import React from 'react';

const ReviewPage = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-3xl'>View Review</h1>
            <p className='mb-4'>Total Reviews</p>
            <ReviewCard />
        </div>
    );
};

export default ReviewPage;