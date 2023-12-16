import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/assets/about1.jpg'
import img2 from '../../../public/assets/about2.jpg'

const AboutPage = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='mx-4 md:mx-0'>
                <h1 className='text-center text-3xl font-medium text-gray-800'>About Us</h1>

                <div className='md:flex gap-6 mt-10'>
                    <div className='md:w-1/2 flex gap-4'>
                        <div className='w-1/2'>
                            <Image className='rounded-lg' height={720} width={1280} src={img1} alt='' />
                        </div>
                        <div className='w-1/2 mt-20'>
                            <Image className='rounded-lg' height={720} width={1280} src={img2} alt='' />
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <div className='mt-4 border-b border-dotted border-b-dark pb-4'>
                            <h4 className='text-primary font-medium uppercase'>WHO WE ARE</h4>

                            <h1 className='text-2xl md:text-4xl font-medium text-gray-800 my-4'>High Quality Cosmetics, Collection & Support Services.</h1>
                            <p className='font-light leading-7'>We are a renowned leading Korean cosmetics company in Bangladesh. we are reputedly dealing with various brands in this industry for 4 years. and by the time we have our own outlets in two different locations in the Dhaka city area. With a vision on, we will expand more with our authentic Korean cosmetic products.</p>
                        </div>

                        {/* mission vission */}
                        <div className='md:flex items-start gap-4 mt-5'>
                            <div>
                                <h3 className='text-xl font-medium text-gray-800'>Our Mission</h3>
                                <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam amet consequuntur natus .</p>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <h3 className='text-xl font-medium text-gray-800'>Our Vission</h3>
                                <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam amet consequuntur natus .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;