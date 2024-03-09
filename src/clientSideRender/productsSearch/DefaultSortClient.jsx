'use client'
import SearchSidebar from '@/components/productsSearch/sidebar/SearchSidebar';
import { Drawer } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { MdKeyboardBackspace } from "react-icons/md";


const DefaultSortClient = ({total}) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const router = useRouter()
    const searchParams = useSearchParams();
   const isShowClear =  (searchParams.get('subcat') || searchParams.get("price")) ? true : false;
   
    return (
        <>
            <button onClick={() => setOpenDrawer(true)} className='flex items-center border rounded justify-center p-2 w-full py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M21 18V21H19V18H17V15H23V18H21ZM5 18V21H3V18H1V15H7V18H5ZM11 6V3H13V6H15V9H9V6H11ZM11 11H13V21H11V11ZM3 13V3H5V13H3ZM19 13V3H21V13H19Z"></path></svg>
                <span className='text-xs ml-2'>FILTER & SORT</span>
            </button>

            <Drawer
                title={<button onClick={() => setOpenDrawer(false)} className='flex items-center gap-2'>
                <MdKeyboardBackspace height={18} width={18} />
                Back
                </button>}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                closeIcon={null}
                width={'80%'}
                extra={
                    <button
                    onClick={() => {
                        router.push('/products');
                    }}
                    className={`${isShowClear ? 'block': 'hidden'} text-sm font-light`}>Clear All</button>
                }

            >

                <SearchSidebar totalProducts={total} isMobile={true} setOpenDrawer={setOpenDrawer} />
            </Drawer>
        </>
    );
};

export default DefaultSortClient;