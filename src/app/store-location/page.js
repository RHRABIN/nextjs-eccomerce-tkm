import DangerHtml from '@/clientSideRender/dangerHtml/DangerHtml';
import { getStoreLocationQuery } from '@/config/footerApi';
import React from 'react';

const StoreLocationPage = async () => {
    const data = await getStoreLocationQuery();

    return (
        <div className='container mx-auto my-10'>
            <div className='mx-4 md:mx-0'>
                <h1 className='text-xl md:text-3xl font-semibold text-gray-800 pb-4 border-dotted border-b border-b-dark'>Our Outlet</h1>
                <div className='mt-5'>
                    {
                        data?.data?.data?.map(text =>
                            <DangerHtml
                                getText={text?.description}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default StoreLocationPage;