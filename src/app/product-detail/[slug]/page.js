import ProductDescription from '@/components/productDetails/ProductDescription';
import Image from 'next/image';
import React from 'react';
import MightAlsoSection from '@/components/productDetails/MightAlsoSection';
import MoreProducts from '@/components/productDetails/MoreProducts';
import ReviewSection from '@/components/productDetails/reviewSection';
import { getSingleProduct } from '@/config/productsApi';
import Link from 'next/link';
import ImageSection from '@/components/productDetails/ImageSection';

export async function generateMetadata({ params }) {
    const { slug } = params || {};
    const { data: product } = await getSingleProduct(slug) || {};
    const { name, description } = product?.result || {};
    return {
        title: name,
        description: description
    }
}

const ProductDetailsPage = async ({ params }) => {
    const { slug } = params || {};
    const { data: product } = await getSingleProduct(slug) || {};
    const { name, images, _id, manufacturer, profileImage } = product?.result || {};

    return (
        <div className='container mx-auto my-4 md:my-12'>
            {/* <div className='mb-4 px-4 md:px-0'>{
                product?.breadcrumb?.map((br, idx) => <Link className='text-blue-500 
                hover:underline hover:text-red-500 ' href={`/products?category=${br.slug}`} key={br.slug}>{br.title} <span className={`${idx == product.breadcrumb.length - 1 ? 'hidden' : ''}`}>/</span> </Link>)
                }
            </div> */}
            <div className='mx-4 md:mx-0'>
                <div className='md:flex items-start gap-8'>
                    <div className='w-full md:w-1/2 flex gap-2 mb-4 lg:mb-0 md:sticky md:top-10 flex-col-reverse md:flex-row'>
                        <div className='w-1/4 md:overflow-y-scroll h-fit flex gap-2 md:gap-0 md:block lg:h-[28rem] details-image'>
                            {
                                images?.map((img) =>
                                    <Image
                                        key={img}
                                        className='w-[70px] h-[70px] border mb-2'
                                        height={720}
                                        width={1280}
                                        src={img}
                                        alt={name} />
                                )
                            }
                        </div>
                        <div className='w-full'>
                            <ImageSection
                                imgAlt={'img'}
                                imgSrc={images?.[0]}
                            />
                            <Image className='h-auto w-full' height={720} width={1280} src={profileImage ? profileImage : images?.[0]} alt={name} />
                        </div>
                    </div>
                    {/* right side bar */}
                    <div className='w-full md:w-1/2'>
                        <ProductDescription product={product?.result} />
                    </div>
                </div>
            </div>
            <MightAlsoSection id={slug} />
            <MoreProducts brandId={manufacturer?._id} productId={_id} />
            <ReviewSection
                id={_id}
                productId={slug} />
        </div>
    );
};

export default ProductDetailsPage;