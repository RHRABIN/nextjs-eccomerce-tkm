'use client'
import { productSettings } from '@/utilities/sliderSettings/productSetting';
import React from 'react';
import Slider from 'react-slick';

const SliderComponentClient = ({ children }) => {
    return (
        <Slider {...productSettings}>
            {children}
        </Slider>
    );
};

export default SliderComponentClient;