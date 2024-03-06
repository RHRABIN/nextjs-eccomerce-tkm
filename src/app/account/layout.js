import AccountSidebar from '@/components/account/sidebar/AccountSidebar';
import PrivateRoute from '@/router/PrivateRoute';
import React from 'react';

const AccoutnLayout = ({ children }) => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <PrivateRoute />
            <div className='mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='md:col-span-1'>
                    <div className='md:sticky md:top-5'>
                        <AccountSidebar />
                    </div>
                </div>
                <div className='md:col-span-3'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccoutnLayout;