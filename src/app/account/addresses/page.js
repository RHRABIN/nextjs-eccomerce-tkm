import AddressCard from '@/components/account/address/AddressCard';
import React from 'react';

const AddressPage = () => {
    return (
        <div>
            <div className='border-dotted border-b pb-4 border-b-dark flex items-center justify-between'>
                <h1 className='text-xl text-gray-800 font-[500]'>My Address</h1>
                <button className='bg-secondary text-sm rounded text-white px-4 py-1.5 hover:opacity-90'>+ Create New</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                <AddressCard />
            </div>
        </div>
    );
};

export default AddressPage;