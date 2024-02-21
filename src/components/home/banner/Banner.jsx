'use client'
import { bannerSettings } from '@/utilities/sliderSettings/bannerSettings';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getDesktopAllBanner, getMobileBanner } from '@/config/bannerApi';
import Link from 'next/link';

const Banner = async () => {
    const [bannerImage, setBannerImage] = useState({});
    const [mobileBannerImage, setMobileBannerImage] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [desktopBannerResponse, mobileBannerRespone] = await Promise.all([
                    getDesktopAllBanner(),
                    getMobileBanner()
                ])
                const { data: bannerImageData } = desktopBannerResponse || {};
                const { data: mobileBannerImageData } = mobileBannerRespone || {};
                setBannerImage(bannerImageData);
                setMobileBannerImage(mobileBannerImageData);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])


    return (
        <div>
            <div className='hidden md:block'>
                <Slider {...bannerSettings}>
                    {
                        bannerImage?.data?.map(banner =>
                            <Link key={banner._id} href={`/campaign-products/${banner?.slug}`}>
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
                            <Link key={banner._id} href={`/campaign-products/${banner?.slug}`}>
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