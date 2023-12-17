import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/assets/about1.jpg'
import img2 from '../../../public/assets/about2.jpg'
import { IoFingerPrintSharp } from 'react-icons/io5';

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


                <div className='about-bg mt-20 rounded-lg hidden md:block'>
                    <div className='p-20 flex items-center justify-between'>
                        <span className='text-center'>
                            <h1 className='text-white text-4xl font-medium'>3546+</h1>
                            <p className='text-white font-light'>Happy Clients</p>
                        </span>
                        <span className='text-center'>
                            <h1 className='text-white text-4xl font-medium'>1169+</h1>
                            <p className='text-white font-light'>Product Collection</p>
                        </span>
                        <span className='text-center'>
                            <h1 className='text-white text-4xl font-medium'>99%</h1>
                            <p className='text-white font-light'>Customer Positive Reviews</p>
                        </span>
                        <span className='text-center'>
                            <h1 className='text-white text-4xl font-medium'>3218+</h1>
                            <p className='text-white font-light'>Clients Supoort Done</p>
                        </span>
                    </div>
                </div>


                {/* reason to choose us  */}
                <div className='mt-20'>
                    <div>
                        <h4 className='text-primary font-medium uppercase text-center'>Reason to choose us</h4>
                        <h1 className='text-2xl md:text-4xl text-center font-medium mt-4'>We provide truly prominent <br />
                            Cosmetics solutions.</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 bg-slate-50 p-10'>
                        {
                            Array(9).fill().map((_, idx) =>
                                <div key={idx} className='border rounded-lg p-5 bg-white shadow'>
                                    <IoFingerPrintSharp className='text-blue-500 text-4xl mb-2' />
                                    <h3 className='text-lg font-medium'>Qualityfull Cosmetics point</h3>
                                    <p className='font-light mt-2'>Accelerate innovation with world-class tech teams We’ll match you to an entire innovation with world-class tech teams We’ll match you to an entire</p>
                                </div>
                            )
                        }
                    </div>



                    <div className='flex flex-col-reverse md:flex-row gap-6 mt-10'>
                        <div className='md:w-1/2'>
                            <div className='border-b border-dotted border-b-dark pb-4'>
                                <h1 className='text-2xl md:text-4xl font-medium text-gray-800 mb-4'>Preparing for your success, we provide truly prominent solutions</h1>
                                <p className='font-light leading-7'>We are a renowned leading Korean cosmetics company in Bangladesh. we are reputedly dealing with various brands in this industry for 4 years. and by the time we have our own outlets in two different locations in the Dhaka city area. With a vision on, we will expand more with our authentic Korean cosmetic products.</p>
                            </div>

                            {/* mission vission */}
                            <div className='md:flex items-start gap-4 mt-5'>
                                <div className='md:w-1/2'>
                                    <h3 className='text-xl font-medium text-gray-800 mb-2'>Demo Name</h3>
                                    <p className='font-light'>CEO, The Koreanmall</p>
                                </div>
                                <div className='md:w-1/2 mt-4 md:mt-0'>
                                    <h3 className='text-xl font-medium text-gray-800 mb-2'>Call to ask any question</h3>
                                    <p className='font-light'>017664664**</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <div>
                                <h3 className='text-xl font-medium text-gray-800'>Want to know about our company?</h3>
                                <p className='font-light mt-4'>We are a renowned leading Korean cosmetics company in Bangladesh. we are reputedly dealing with various brands in this industry for 4 years. and by the time we have our own outlets in two different locations in the Dhaka city area. With a vision on, we will expand more with our authentic Korean cosmetic products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;