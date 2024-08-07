import SearchSidebar from '@/components/productsSearch/sidebar/SearchSidebar';
import SearchTopbar from '@/components/productsSearch/topbar/SearchTopbar';
import React from 'react';
import DefaultSortClient from '@/clientSideRender/productsSearch/DefaultSortClient';
import SearchHistory from '@/components/productsSearch/history/SearchHistory';
import SearchTitle from '@/components/productsSearch/searchTitle/SearchTitle';


export const metadata = {
    title: 'Filter Product | Korean Mall',
    description: 'Generated by Korean Mall',
}

const layout = ({ children }) => {
    return (
        <div className='container mx-auto my-4 md:my-8'>
           <SearchTitle />
            <div className='mx-4 md:mx-0 md:flex gap-6'>
                <div className='md:w-1/4 min-w-[220px] hidden md:block'>
                    <SearchSidebar />
                </div>
                <div className='md:w-3/4 items-center justify-center'>    
                    <div className='flex items-start mb-1 md:mb-4 justify-end'>
                        <div className='hidden'><SearchHistory /></div>
                        <div className='hidden md:block'>
                            <SearchTopbar />
                        </div>
                    </div>
                   
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layout;