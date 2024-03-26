'use client'
import { bannerSettings } from '@/utilities/sliderSettings/bannerSettings';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getDesktopAllBanner, getMobileBanner } from '@/config/bannerApi';
import Link from 'next/link';

const desktopBanner = [
    {
        "_id": "64abfca88b33d6360a96a59c",
        "image": "http://res.cloudinary.com/dksi7q3so/image/upload/v1688992935/DesktopBannerImages/1688992933510-banner3_ndikod.webp",
        "name": "Banner one",
        "slug": "Banner-one",
        "related": "category",
    },
    {
        "_id": "64abfcd08b33d6360a96a5b0",
        "image": "http://res.cloudinary.com/dksi7q3so/image/upload/v1688992975/DesktopBannerImages/1688992973520-banner2_xvk0kx.webp",
        "name": "Banner two",
        "slug": "Banner-two",
        "related": "category",
        
    },
    {
        "_id": "64abfd228b33d6360a96a5d4",
        "image": "http://res.cloudinary.com/dksi7q3so/image/upload/v1688993057/DesktopBannerImages/1688993055438-bannerOne_zporks.webp",
        "name": "Banner three",
        "slug": "Banner-three",
        "related": "category",
    }
]
const mobileBanner = [
    {
        "_id": "64abfd3f8b33d6360a96a5e6",
        "image": "http://res.cloudinary.com/dksi7q3so/image/upload/v1688993086/MobileBannerImage/1688993084766-mobile1_isndci.webp",
        "name": "mobile banner one",
        "slug": "mobile-banner-one",
        "related": "category",
    },
    {
        "_id": "64abfd648b33d6360a96a5fa",
        "image": "http://res.cloudinary.com/dksi7q3so/image/upload/v1688993123/MobileBannerImage/1688993122139-mobile2_mykmdd.webp",
        "name": "SKIN1004 Tone Brightening Capsule Cream",
        "slug": "SKIN1004-Tone-Brightening-Capsule-Cream",
        "related": "category",
    },
    {
        "_id": "64e52f0cd234b57ee1d2dc3b",
        "image": "http://res.cloudinary.com/dksi7q3so/image/upload/v1692741387/MobileBannerImage/1692741386293-AM_uvhwzn.webp",
        "name": "Artichoke Intensive Skin Barrier Ampoule",
        "slug": "https://koreanmallbd.org/product-detail/artichoke-intensive-skin-barrier-ampoule",
        "related": "product",
        "productName": "Artichoke Intensive Skin Barrier Ampoule 30ml",
        
    }
]
const Banner = async () => {
    // const [bannerImage, setBannerImage] = useState({});
    // const [mobileBannerImage, setMobileBannerImage] = useState({});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const [desktopBannerResponse, mobileBannerRespone] = await Promise.all([
    //                 getDesktopAllBanner(),
    //                 getMobileBanner()
    //             ])
    //             const { data: bannerImageData } = desktopBannerResponse || {};
    //             const { data: mobileBannerImageData } = mobileBannerRespone || {};
    //             setBannerImage(bannerImageData);
    //             setMobileBannerImage(mobileBannerImageData);
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchData();
    // }, [])


    return (
        <div>
            <div className='hidden md:block'>
                <Slider {...bannerSettings}>
                    {
                        desktopBanner?.map(banner =>
                            <Link key={banner._id} href={banner.related == "product" ? `/product-detail/${banner?.slug}` : `/campaign-products/${banner?.slug}`}>
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
                        mobileBanner?.map(banner =>
                            <Link key={banner._id} href={banner.related == "product" ? `/product-detail/${banner?.slug}` : `/campaign-products/${banner?.slug}`}>
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
            <div className='bg-black p-[6px] -mt-[8px]'></div>
        </div>
    );
};

export default Banner;