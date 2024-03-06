'use client'
import { brandSettings } from '@/utilities/sliderSettings/brandSetting';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import img from '../../../../public/assets/brandlogo/axisy.png'
import img1 from '../../../../public/assets/brandlogo/beauty.png'
import img2 from '../../../../public/assets/brandlogo/coserx.png'
import img3 from '../../../../public/assets/brandlogo/inisfree.png'
import img4 from '../../../../public/assets/brandlogo/iunik.png'
import img5 from '../../../../public/assets/brandlogo/klaris.png'
import img6 from '../../../../public/assets/brandlogo/someby-removebg-preview.png'

const BrandSlider = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='text-2xl font-semibold text-center border-dotted border-b pb-4'>As seen in</h1>

                <Slider {...brandSettings}>
                    <Image className='w-[10rem] h-[4.375rem] object-contain px-5 md:px-20' placeholder='blur' quality={100} alt='brand' src={img} />
                    <Image className='w-[10rem] h-[4.375rem] object-contain px-5 md:px-20' placeholder='blur' quality={100} alt='brand' src={img1} />
                    <Image className='w-[10rem] h-[4.375rem] object-contain px-5 md:px-20' placeholder='blur' quality={100} alt='brand' src={img2} />
                    <Image className='w-[10rem] h-[4.375rem] object-contain px-5 md:px-20' placeholder='blur' quality={100} alt='brand' src={img3} />
                    <Image className='w-[10rem] h-[4.375rem] object-contain px-5 md:px-20' placeholder='blur' quality={100} alt='brand' src={img4} />
                    <Image className='w-[10rem] h-[4.375rem] object-contain px-5 md:px-20' placeholder='blur' quality={100} alt='brand' src={img5} />
                    <Image className='w-[10rem] h-[4.375rem] object-contain px-5 md:px-20' placeholder='blur' quality={100} alt='brand' src={img6} />
                </Slider>
            </div>

        </div>
    );
};

export default BrandSlider;