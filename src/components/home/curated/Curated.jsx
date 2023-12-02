import ProductCard from '@/components/card/ProductCard';
import React from 'react';

const Curated = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-3xl font-semibold text-center border-dotted border-b pb-4'>NEWLY CURATED</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Curated;