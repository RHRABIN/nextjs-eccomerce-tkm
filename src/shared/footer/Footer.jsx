import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/footer-logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { CiMail } from "react-icons/ci";
import pay from '../../../public/assets/payment.png'

const Footer = () => {
    return (
        <div className='bg-secondary py-8 md:p-8'>
            <div className='container mx-auto'>
                <div className='mx-4 md:mx-0'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <div className='text-dark'>
                            <Link href='/'>
                                <Image className='w-52 h-auto' height={720} width={1280} src={logo} alt='logo' />
                            </Link>
                            <h5 className='pb-2'>Gulshan</h5>
                            <p className='text-xs mb-4'>Shop # 238, 1st Floor, Police Plaza Concord Shopping Mall Hatirjheel, Gulshan 1</p>
                            <h5 className='pb-2'>Dhanmondi</h5>
                            <p className='text-xs mb-4'>Shop # 1102, 1st Floor, Shimanto Shombhar, Dhanmondi (+88) 01756 167724 mail@thekoreanmall.com</p>

                            <div className='flex items-center gap-2'>
                                <FaTwitter className='text-2xl hover:text-white cursor-pointer' />
                                <FaFacebookF className='text-2xl hover:text-white cursor-pointer' />
                                <FaInstagram className='text-2xl hover:text-white cursor-pointer' />
                                <FaYoutube className='text-2xl hover:text-white cursor-pointer' />
                                <CiMail className='text-2xl hover:text-white cursor-pointer' />
                            </div>
                        </div>


                        <div>
                            <h4 className='text-white text-lg font-semibold'>About Us</h4>
                            <ul>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/about-us'>About Us</Link></li>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/store-location'>Store Location</Link></li>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/delivery-information'>Delivery information</Link></li>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/privacy-policy'>Privacy Policy</Link></li>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/terms-and-conditions'>Terms & Conditions</Link></li>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/contact-us'>Contact us</Link></li>
                            </ul>
                        </div>



                        <div>
                            <h4 className='text-white text-lg font-semibold'>Account</h4>
                            <ul>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/account'>My Account</Link></li>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/account/orders'>Order History</Link></li>
                                <li className='text-dark list-none my-2 hover:text-white'><Link href='/account/wishlist'>MY Wishlist</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-white text-lg font-semibold'>Licenses & Services</h4>
                            <ul>
                                <li className='text-dark list-none my-2 hover:text-white'>TRADE/DNCC/024738/2023</li>
                                <li className='text-dark list-none my-2 hover:text-white'>Inside Dhaka 48 Hours Delivery</li>
                                <li className='text-dark list-none my-2 hover:text-white'>Outside Dhaka 72 Hours Delivery</li>
                                <li className='text-dark list-none my-2 hover:text-white'>7 Days Happy Return</li>

                            </ul>
                        </div>



                    </div>
                    <div className='md:w-1/2 mx-auto mt-10'>
                        <p className='text-dark text-center text-sm mb-4'>Pay Secure</p>
                        <Image height={720} width={1280} src={pay} alt='pay' />
                    </div>

                    <p className='text-center text-sm mt-5 text-dark'>Copyright © {new Date().getFullYear()} The Korean Mall. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;