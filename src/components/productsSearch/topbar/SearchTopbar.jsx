"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';

const SearchTopbar = () => {
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

    const handleSort = (e)=>{
        router.push(pathname + '?' + createQueryString('sort', e.target.value))

    }
    const handleFilter = (e)=>{
        router.push(pathname + '?' + createQueryString('limit', e.target.value))

    }

    return (
        <div className=' flex gap-4 justify-end items-center'>
           <div className='border rounded p-1 md:p-2'>
                 <select onChange={handleSort} className=' outline-none text-gray-800 text-sm font-[300]' name="" id="">
                    <option value="default">Default Sorting</option>
                    <option value="newest">Newest Product</option>
                    <option value="price-asc">Price low to high</option>
                    <option value="price-desc">Price high to low</option>
                </select>
           </div>
            <div className='border rounded p-1 md:p-2'>
                <select onChange={handleFilter} className='outline-none text-gray-800 text-sm font-[300]' name="" id="">
                    <option value="12">Show 12</option>
                    <option value="24">Show 24</option>
                    <option value="36">Show 36</option>
                    <option value="50">Show 50</option>
                </select>
            </div>
        </div>
    );
};

export default SearchTopbar;