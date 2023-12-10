import EditNewAddressClient from '@/clientSideRender/address/EditNewAddressClient';
import React from 'react';

const AddressCard = () => {
    return (
        <div className={`bg-white p-4 rounded hover:shadow-md cursor-pointer border text-gray-600 mb-10`}>
            <div className='flex justify-between items-center'>
                <p className='text-sm font-[500]'>Adnan Hossain</p>
                <div className='flex justify-between items-center'>
                    {/* {
                                    adrs?.selected ? <span className='flex items-center mr-2'>
                                        <p className='mr-1 text-green-600 uppercase font-semibold text-sm'>Selected</p>
                                        <FaCheckCircle className='text-green-600 text-sm'></FaCheckCircle>
                                    </span> :
                                        <button onClick={() => handleActiveAddress(adrs?._id)} className='text-gray-500 uppercase font-semibold tracking-widest hover:bg-green-600 hover:text-white text-sm border p-1 rounded-md mr-3'>Select</button>
                                } */}
                    <EditNewAddressClient />
                </div>
            </div>
            <p className='text-sm my-2'>01772781540</p>
            <span className='flex justify-between items-center'>
                <p className='text-sm'>House No: Bashundhara Dhaka,Dhaka</p>
                {/* {
                                !adrs?.selected &&
                                <button onClick={() => handleDeleteAddress(adrs?._id)} className='border p-1 rounded-md text-sm font-semibold hover:bg-red-600 hover:text-white'>Remove</button>
                            } */}
            </span>
        </div>
    );
};

export default AddressCard;