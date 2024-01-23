import ProductCard from '@/components/card/ProductCard';
import { getCampaignProducts } from '@/config/productsApi';
import React from 'react';

const CampaignPage = async ({ params }) => {
    const { slug } = params || {};
    const data = await getCampaignProducts()
    console.log('hittttttttttt', slug)
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10'>
                    {
                        Array(9).fill().map((_, idx) =>
                            <ProductCard />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CampaignPage;