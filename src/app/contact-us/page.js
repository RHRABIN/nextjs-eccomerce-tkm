import Image from 'next/image';
import React from 'react';
import waveImg from '../../../public/assets/wave-border.svg'
import { FaRegBuilding } from 'react-icons/fa6';

const ContactPage = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='flex flex-col items-center mb-10'>
                <p className='text-gray-800 text-2xl mb-3'>Contact Us</p>
                <Image className='w-fit' height={500} width={1000} src={waveImg} />
            </div>

            <div class="mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-20">

                <div className='md:col-span-2'>
                    <h1 class="text-dark-100 text-3xl font-[500] text-center md:text-start">Let's Get In Touch</h1>
                    <form>
                        <input class="placeholder:text-dark placeholder:text-sm outline-none border rounded w-full p-2 mt-10"
                            placeholder="Enter Your Name" type="text" />

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input class="placeholder:text-dark placeholder:text-sm outline-none border rounded w-full p-2 mt-10"
                                placeholder="Phone Number" type="text" />
                            <input class="placeholder:text-dark placeholder:text-sm outline-none border rounded w-full p-2 mt-10"
                                placeholder="Email Address" type="email" />
                        </div>

                        <textarea class="placeholder:text-dark placeholder:text-sm outline-none border rounded w-full p-2 mt-10"
                            name="" placeholder="Write Here Something" id="" cols="30" rows="3"></textarea>

                        <span className='flex justify-center md:justify-start'>
                            <button class="px-8 py-2 bg-secondary text-white rounded-full hover:opacity-90 mt-10">Send Your Message</button>
                        </span>

                    </form>
                </div>

                {/* sidebar  */}
                <div className='md:col-span-1'>
                    <div>
                        <span className='border-dotted border-b border-b-dark flex items-center gap-4 text-2xl pb-4'>
                            <FaRegBuilding />
                            <h1>Our Office</h1>
                        </span>
                        <div className='mt-4'>
                            <h4 className='text-lg font-medium text-gray-800'>The Korean Mall Korean Cosmetics and Skin Care Products</h4>
                            <h4 className='uppercase font-medium mt-4 mb-1 text-gray-800'>GULSHAN OUTLET</h4>

                            <p className='font-light'>Shop # 238, 1st Floor
                                Police Plaza Concord Shopping Mall
                                Hatirjheel, Gulshan 1</p>



                            <h4 className='uppercase font-medium mt-4 mb-1 text-gray-800'>DHANMONDI OUTLET</h4>
                            <p className='font-light'>1102, 1st Floor Shimanto Shombhar Shopping Mall Dhanmondi, Dhaka, Bangladesh 1212</p>



                            <h4 className='uppercase font-medium mt-4 mb-1 text-gray-800'>Contact Number</h4>
                            <p className='font-light'>+8801756167724</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;