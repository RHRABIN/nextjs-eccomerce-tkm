'use client'
import { productSettings } from '@/utilities/sliderSettings/productSetting';
import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../card/ProductCard';

const MightAlsoSection = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-3xl font-semibold text-center border-dotted border-b pb-4'>You Might Also Like</h1>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2 py-10'>
                                <ProductCard />
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default MightAlsoSection;