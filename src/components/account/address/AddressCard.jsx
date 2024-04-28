'use client'
import { FaCheckCircle } from "react-icons/fa";
import { deleteAddress, getAllAddress, setActiveAddress } from '@/config/addressApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import AddressForm from './AddressForm';
import toast from "react-hot-toast";
import { Modal } from "antd";

const AddressCard = ({onCloseModal}) => {
    const { user, addressSuccess, setAddressSuccess } = useContext(AuthContext);
    const [addressOpen, setAddressOpen] = useState(false);
    const [editAddress, setEditAddress] = useState({});
    const [allAddress, setAllAddress] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dLoading, setDloading] = useState(false);
    const [error, setError] = useState(null);
    const [selectSuccess, setSelectSuccess] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getAllAddress(user?.data?.user?.email) || {};
                setAllAddress(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (user?.data?.user?.email) {
            fetchData();
        }

        if (selectSuccess || addressSuccess) {
            fetchData();
            setAddressSuccess(false)
        }
    }, [user, selectSuccess, addressSuccess]);

    const handleActiveAddress = async (id) => {
        try {
            await setActiveAddress({ id }, user?.data?.user?.email);
            setSelectSuccess(!selectSuccess);
            setAddressSuccess(true)
            onCloseModal(false)
        } catch (error) {
            setError(error.message);
        }
    }

    const handleDeleteAddress = async (id) => {
        try {
            setDloading(true)
            const res = await deleteAddress({ id }, user?.data?.user?.email);
            if (res) {
                setAddressSuccess(true);
                toast.success('Address Delete Successfull')
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setDloading(false)
        }
    }

    const handleEditAddress = (adrs) => {
        setAddressOpen(true);
        setEditAddress(adrs);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
            {
                allAddress?.map(adrs =>
                    <div key={adrs?._id} className={`bg-white p-4 rounded hover:shadow-md cursor-pointer border text-gray-600 ${adrs?.selected && 'border-green-600'}`}>
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
                                <div>
                                    <button onClick={() => handleEditAddress(adrs)} className='text-blue-500 text-sm'>Edit</button>
                                    <Modal
                                        title="Edit Address"
                                        centered
                                        open={addressOpen}
                                        onCancel={() => setAddressOpen(false)}
                                        footer={false}
                                    >

                                        <AddressForm address={editAddress} />
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <p className='text-sm mt-1'>{adrs?.shippingPhone}</p>
                        <p className='text-sm text-[#929292]'>{adrs?.upazila}, {adrs.district}, {adrs.division}</p>
                        <p className='flex justify-between items-center text-[#929292]'>
                            <p className='text-sm'>House No: {adrs?.address}</p>
                            {
                                !adrs?.selected &&
                                <button onClick={() => handleDeleteAddress(adrs?._id)} className='border p-1 rounded-md text-sm font-semibold hover:bg-red-600 hover:text-white'>{dLoading ? 'Removing..' : 'Remove'}</button>
                            }
                        </p>
                    </div>

                )
            }
        </div>

    );
};

export default AddressCard;