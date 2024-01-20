import CreateNewAddressClient from '@/clientSideRender/address/CreateNewAddressClient';
import AddressCard from '@/components/account/address/AddressCard';
import React from 'react';

const AddressPage = () => {
    return (
        <div>
            <div className='border-dotted border-b pb-4 border-b-dark flex items-center justify-between'>
                <h1 className='text-xl text-gray-800 font-[500]'>My Address</h1>
                <CreateNewAddressClient />
            </div>
            <AddressCard />
        </div>
    );
};

export default AddressPage;