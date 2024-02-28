'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import waveImg from '../../../../public/assets/wave-border.svg'
import { useSearchParams } from 'next/navigation';
import { getCategoryData } from '@/config/productsApi';

const SearchTitle = () => {
    const [categoryData, setCategoryData] = useState([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        const loadData = async () => {
            try {
                const params = new URLSearchParams(searchParams.toString());
                const productsData = await getCategoryData(`?${params.toString()}`);
                setCategoryData(productsData?.data?.result);
            } catch (error) {
                console.error(error);
            }
        };

        loadData();
    }, [searchParams]);

    return (
        <div className='flex flex-col items-center mb-4 md:mb-8 md:max-w-[760px] m-auto px-4'>
                <p className='text-gray-800 text-3xl md:text-[40px] mb-3'>{categoryData?.title ? categoryData.title :'Searched Products'}</p>
                <Image className='w-fit' height={500} width={1000} src={waveImg} alt='wave' />
               {categoryData?.description && <p className=' text-center  md:text-xl' >{categoryData.description}</p>}
            </div>
    );
};

export default SearchTitle;