'use client'
import { blogSettings } from '@/utilities/sliderSettings/blogSettings';
import React from 'react';
import Slider from 'react-slick';

const BlogSliderMobile = ({ children }) => {
    return (
        <div className='mb-20 lg:hidden'>
            <Slider {...blogSettings} className='pb-5'>
                {children}
            </Slider>
        </div>
    );
};

export default BlogSliderMobile;