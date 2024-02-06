'use client'
import { brandSettings } from '@/utilities/sliderSettings/brandSetting';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import img from '../../../../public/assets/b1.png'

const BrandSlider = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='text-2xl font-semibold text-center border-dotted border-b pb-4'>As seen in</h1>

                <Slider {...brandSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <Image className='p-5 md:px-20 md:py-10' key={idx} alt='brand' height={200} width={1280} src={img} />
                        )
                    }
                </Slider>
            </div>

        </div>
    );
};

export default BrandSlider;