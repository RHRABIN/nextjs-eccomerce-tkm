import AccountSidebar from '@/components/account/sidebar/AccountSidebar';
import React from 'react';

const AccoutnLayout = ({ children }) => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='md:col-span-1'>
                    <AccountSidebar />
                </div>
                <div className='md:col-span-3'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccoutnLayout;