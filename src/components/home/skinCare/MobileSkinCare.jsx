'use client'
import AccordionClient from '@/clientSideRender/accordion/AccordionClient';
import ProductCard from '@/components/card/ProductCard';
import { productSettings } from '@/utilities/sliderSettings/productSetting';
import React from 'react';
import Slider from 'react-slick';
import img1 from '../../../../public/assets/2.webp'
import img2 from '../../../../public/assets/4.webp'
import img3 from '../../../../public/assets/5.webp'

const MobileSkinCare = () => {
    return (
        <div className='mx-4 md:hidden mt-10'>
            <AccordionClient title={<p className='uppercase'>Best Seller</p>}>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2 py-10'>
                                <ProductCard />
                            </div>
                        )
                    }
                </Slider>
            </AccordionClient>

            <AccordionClient title={<p className='uppercase'>Skin Type</p>}>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2 py-10'>
                                <ProductCard propsImg={img3} />
                            </div>
                        )
                    }
                </Slider>
            </AccordionClient>

            <AccordionClient title={<p className='uppercase'>Skin Concern</p>}>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2 py-10'>
                                <ProductCard propsImg={img2} />
                            </div>
                        )
                    }
                </Slider>
            </AccordionClient>

            <AccordionClient title={<p className='uppercase'>Routine</p>}>
                <Slider {...productSettings}>
                    {
                        Array(5).fill().map((_, idx) =>
                            <div key={idx} className='px-2 py-10'>
                                <ProductCard propsImg={img3} />
                            </div>
                        )
                    }
                </Slider>
            </AccordionClient>
        </div>
    );
};

export default MobileSkinCare;