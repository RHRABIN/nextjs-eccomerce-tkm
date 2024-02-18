'use client'

import React, { useCallback } from 'react';
import { MdPlayArrow } from "react-icons/md";
import Accordion from '../accordion/Accordion';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchSidebar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name, value) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
          return params.toString()
        },
        [searchParams]
      )

     const handleSearch = (e)=>{
        e.preventDefault();
        const min = e.target.min.value;
        const max= e.target.max.value;

        router.push(pathname + '?' + createQueryString('price', `${min}-${max}`))
     } 

    return (
        <div className='border rounded ring-1 ring-gray-100 p-4'>
            <div className='flex items-center justify-between border-b border-dark pb-4'>
                <p className='text-gray-800 font-[500] text-lg'>Filter Section</p>
                <button onClick={()=> router.push(pathname)} className='text-primary font-semibold' type='button'>Clear All</button>
            </div>
            <Accordion />
            <div className='mt-10'>
                <p className='text-gray-800 font-[500] text-lg mb-2'>Price</p>
                <form onSubmit={handleSearch} className='flex items-center gap-2'>
                    <input required className='w-2/5 border border-dark rounded outline-none p-1 placeholder:text-black font-[300] placeholder:text-xs' name='min' placeholder='Min' type="number" />

                    <input required className='w-2/5 border border-dark rounded outline-none p-1 placeholder:text-black font-[300] placeholder:text-xs' name='max' placeholder='Max' type="number" />
                    <button type='submit' className='bg-blue-500 p-2'>
                        <MdPlayArrow className='text-white' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchSidebar;