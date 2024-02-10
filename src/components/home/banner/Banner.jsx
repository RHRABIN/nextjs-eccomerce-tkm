'use client'
import { bannerSettings } from '@/utilities/sliderSettings/bannerSettings';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { getDesktopAllBanner, getMobileBanner } from '@/config/bannerApi';
import Link from 'next/link';

const Banner = async () => {
    const [desktopBannerResponse, mobileBannerRespone] = await Promise.all([
        getDesktopAllBanner(),
        getMobileBanner()
    ])
    const { data: bannerImage } = desktopBannerResponse || {};
    const { data: mobileBannerImage } = mobileBannerRespone || {};
    return (
        <div>
            <div className='hidden md:block'>
                <Slider {...bannerSettings}>
                    {
                        bannerImage?.data?.map(banner =>
                            <Link href={`/campaign-products/${banner?.slug}`}>
                                <Image
                                    key={banner?._id}
                                    className='w-full'
                                    height={650}
                                    width={1920}
                                    quality={100}
                                    alt={banner?.name}
                                    src={banner?.image}
                                />
                            </Link>
                        )
                    }
                </Slider>
            </div>
            <div className='md:hidden'>
                <Slider {...bannerSettings}>
                    {
                        mobileBannerImage?.data?.map(banner =>
                            <Link href={`/campaign-products/${banner?.slug}`}>
                                <Image
                                    key={banner?._id}
                                    className='w-full'
                                    height={650}
                                    width={1920}
                                    quality={100}
                                    alt={banner?.name}
                                    src={banner?.image}
                                />
                            </Link>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Banner;