'use client'

import React, { useCallback } from 'react';
// import { MdPlayArrow } from "react-icons/md";
import Accordion from '../accordion/Accordion';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Slider } from 'antd';

const SearchSidebar = ({ isMobile, setOpenDrawer, totalProducts }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());

    const createQueryString = useCallback(
        (name, value) => {
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    const handleSearch = (values) => {

        const min = values[0];
        const max = values[1];

        router.push(pathname + '?' + createQueryString('price', `${min}-${max}`))
    }

    const queryPrice =  params.get('price');
    const startPrice =  queryPrice?.split("-")[0] || 0;
    const endPrice =  queryPrice?.split("-")[1] || 5000;
    return (
        <div className={`${isMobile ? 'p-2' : 'border rounded ring-1 ring-gray-100 p-4'}`}>
            {!isMobile && <div className='border-b pb-4 flex justify-between'>
                <h1 className='text-gray-800 font-[500] text-lg'>Filters</h1>
                <button onClick={() => router.push(pathname)} className='transition-colors text-xs hover:text-primary' type='button'>Clear All</button>
            </div>}
            <div className={`${isMobile ? 'max-h-[65vh] overflow-auto mobile-scrollbar' : ''}`}>

                <Accordion />
                
                <div className="flex justify-between text-black mt-2 font-semibold px-2 md:px-0">

                    {
                      queryPrice ? <>
                        <span>{queryPrice.split('-')[0]}</span>
                        <span>{queryPrice.split('-')[1]}</span>
                      </> : 
                      <>
                        <span>0</span>
                        <span>5000</span>
                      </>
                    }
                </div>
                <div className="px-2 md:px-0">
                <Slider onChangeComplete={(value)=>handleSearch(value)} trackStyle={[{background:"black"}]} range max={5000} defaultValue={[startPrice, endPrice]} />
                </div>
            </div>
            {
                isMobile && <div className='flex w-full gap-2 absolute bottom-[20px]'>
                    <button className='text-sm border-0 p-2 w-[40%]'>
                      Items: {totalProducts}
                    </button>

                    <button onClick={() => setOpenDrawer(false)} className='text-sm border rounded p-2 w-[40%]'>VIEW RESULTS</button>
                </div>
            }
        </div>
    );
};

export default SearchSidebar;