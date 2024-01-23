'use client'
import { bannerSettings } from '@/utilities/sliderSettings/bannerSettings';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { getDesktopAllBanner } from '@/config/bannerApi';
import Link from 'next/link';

const Banner = async () => {
    const { data: bannerImage } = await getDesktopAllBanner() || {};
    return (
        <div>
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
    );
};

export default Banner;