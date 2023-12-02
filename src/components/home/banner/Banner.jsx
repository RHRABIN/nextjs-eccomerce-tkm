'use client'
import { bannerSettings } from '@/utilities/sliderSettings/bannerSettings';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../../../public/assets/banner1.webp'
import banner2 from '../../../../public/assets/banner2.webp'
import banner3 from '../../../../public/assets/banner3.webp'

const Banner = () => {
    return (
        <div>
            <Slider {...bannerSettings}>
                <Image className='w-full' height={650} width={1920} src={banner1} />
                <Image className='w-full' height={650} width={1920} src={banner2} />
                <Image className='w-full' height={650} width={1920} src={banner3} />
            </Slider>
        </div>
    );
};

export default Banner;