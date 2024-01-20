'use client'
import EditNewAddressClient from '@/clientSideRender/address/EditNewAddressClient';
import { FaCheckCircle } from "react-icons/fa";
import { deleteAddress, getAllAddress, setActiveAddress } from '@/config/addressApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react';

const AddressCard = async () => {
    const { user } = useContext(AuthContext);
    const { data: allAddress } = await getAllAddress(user?.data?.user?.email) || {};

    const handleActiveAddress = async (id) => {
        await setActiveAddress(id, user?.data?.user?.email)
    }

    const handleDeleteAddress = async (Id) => {
        await deleteAddress(Id, user?.data?.user?.email)
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
            {
                allAddress?.map(adrs =>
                    <div key={adrs?._id} className={`bg-white p-4 rounded hover:shadow-md cursor-pointer border text-gray-600 mb-10`}>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm font-[500]'>{adrs?.shippingName}</p>
                            <div className='flex justify-between items-center'>
                                {
                                    adrs?.selected ? <span className='flex items-center mr-2'>
                                        <p className='mr-1 text-green-600 uppercase font-semibold text-sm'>Selected</p>
                                        <FaCheckCircle className='text-green-600 text-sm'></FaCheckCircle>
                                    </span> :
                                        <button onClick={() => handleActiveAddress(adrs?._id)} className='text-gray-500 uppercase font-semibold tracking-widest hover:bg-green-600 hover:text-white text-sm border p-1 rounded-md mr-3'>Select</button>
                                }
                                <EditNewAddressClient address={adrs} />
                            </div>
                        </div>
                        <p className='text-sm my-2'>{adrs?.shippingPhone}</p>
                        <span className='flex justify-between items-center'>
                            <p className='text-sm'>House No: {adrs?.address}</p>
                            {
                                !adrs?.selected &&
                                <button onClick={() => handleDeleteAddress(adrs?._id)} className='border p-1 rounded-md text-sm font-semibold hover:bg-red-600 hover:text-white'>Remove</button>
                            }
                        </span>
                    </div>

                )
            }
        </div>

    );
};

export default AddressCard;