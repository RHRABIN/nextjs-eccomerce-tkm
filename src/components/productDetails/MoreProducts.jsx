'use client'
import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../card/ProductCard';
import { productSettings } from '@/utilities/sliderSettings/productSetting';
import img from '../../../public/assets/5.webp'

const MoreProducts = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-2xl md:text-3xl font-semibold text-center border-dotted border-b pb-4'>More Products From This Brand</h1>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2 py-10'>
                                <ProductCard propsImg={img} />
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default MoreProducts;