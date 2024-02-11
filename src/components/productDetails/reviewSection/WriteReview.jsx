'use client'
import { addSingleReview } from '@/config/reviewApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useState } from 'react';

const WriteReview = ({ setToggleReview, productId }) => {
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const { user } = useContext(AuthContext);


    const handleSubmitReview = async (e) => {
        e.preventDefault();
        const data = {
            rating: rating || '5',
            description: review,
            product: productId
        }
        await addSingleReview(user?.data?.user?.email, data)
        e.target.reset();
    }
    return (
        <div>
            <h1 className='font-medium text-gray-800 mt-4'>What would you rate this product?</h1>
            <form onSubmit={handleSubmitReview}>
                <div className="rate">
                    <input onChange={(e) => setRating(e.target.value)} type="radio" id="star5" name="rate" value="5" defaultChecked />
                    <label htmlFor="star5" title="5">5 stars</label>
                    <input onChange={(e) => setRating(e.target.value)} type="radio" id="star4" name="rate" value="4" />
                    <label htmlFor="star4" title="4">4 stars</label>
                    <input onChange={(e) => setRating(e.target.value)} type="radio" id="star3" name="rate" value="3" />
                    <label htmlFor="star3" title="3">3 stars</label>
                    <input onChange={(e) => setRating(e.target.value)} type="radio" id="star2" name="rate" value="2" />
                    <label htmlFor="star2" title="2">2 stars</label>
                    <input onChange={(e) => setRating(e.target.value)} type="radio" id="star1" name="rate" value="1" />
                    <label htmlFor="star1" title="1">1 star</label>
                </div>
                <textarea onChange={(e) => setReview(e.target.value)} className='border placeholder:text-sm placeholder:italic border-gray-600 outline-none w-full p-4 my-4' name="" id="" cols="60" rows="3" placeholder='Write a Reivew'></textarea>

                <div className='flex items-center justify-end gap-4 '>
                    <button onClick={() => setToggleReview(false)} className='border border-black py-2 px-6 mt-2 rounded hover:text-white hover:bg-gray-900 cursor-pointer'>Cancel</button>
                    <button className='border border-black py-2 px-6 mt-2 rounded hover:text-white hover:bg-gray-900 cursor-pointer'>{'Review'}</button>
                </div>
            </form>
            <h1 className='font-medium text-gray-800'>Tell us your feedback about the product</h1>
        </div>
    );
};

export default WriteReview;