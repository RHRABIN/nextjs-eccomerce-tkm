'use client'
import { createAddress, updateAddress } from '@/config/addressApi';
import { getAllDistrict, getAllDivisions, getAllSubDistrict } from '@/config/shippingApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AddressForm = ({ address }) => {
    const [newAddress, setNewAddress] = useState();
    const { user } = useContext(AuthContext);
    const [division, setDivision] = useState(null);
    const [district, setDistrict] = useState(null);
    const [subDistrict, setSubDistrict] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [divisionsResponse, districtsResponse, subDistrictsResponse] = await Promise.all([
                    getAllDivisions(),
                    getAllDistrict(newAddress?.division),
                    getAllSubDistrict(newAddress?.district)
                ]);
                setDivision(divisionsResponse?.data);
                setDistrict(districtsResponse?.data);
                setSubDistrict(subDistrictsResponse?.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch address data");
            }
        };

        fetchData();

    }, [newAddress]);

    const { _id, shippingName, shippingPhone, shippingEmail } = address || {};




    const makeOptions = (options) => {
        let allOptions = [];
        allOptions.push(<option value="">Select one</option>)
        options?.map((op, index) => {
            allOptions.push(<option key={index} value={op?.title} >{op?.title}</option>)
        })
        return allOptions;
    }


    const handleSubmitAddress = async (e) => {
        e.preventDefault();

        if (!address || Object.keys(address).length === 0) {
            const res = await createAddress(user?.data?.user?.email, newAddress);
            if (res) {
                toast.success("Address created successfully!")
            }
        } else {
            const res = await updateAddress(_id, newAddress);
            if (res) {
                toast.success("Address Update successfully!")
            }
        }
    }

    const handleAddressChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const updateAddress = { ...newAddress };
        updateAddress[name] = value;
        setNewAddress(updateAddress);
    }

    return (
        <form onSubmit={handleSubmitAddress}>
            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Name <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} defaultValue={shippingName} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Name' name='shippingName' type="text" />

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Town / City <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Town' name='town' type="text" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Division <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="division" id="">
                        {
                            makeOptions(division?.result)
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Zip Code</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Zip Code' name='zipCode' type="text" />
                </div>

                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select District <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} disabled={!newAddress?.division} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="district" id="">
                        {
                            makeOptions(district?.result)
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Email</label>
                    <input onChange={handleAddressChange} defaultValue={shippingEmail} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Email' name='shippingEmail' type="text" />
                </div>


                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Upazilla <span className='text-red-600'>*</span></label>
                    <select disabled={!newAddress?.district} onChange={handleAddressChange} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="upazila" id="">
                        {
                            makeOptions(subDistrict?.result)
                        }
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Phone</label>
                    <input onChange={handleAddressChange} defaultValue={shippingPhone} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Phone' name='shippingPhone' type="text" />
                </div>
            </div>

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Street Address <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} defaultValue={address?.address} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Address' name='address' type="text" />
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs mt-2' placeholder='Optional Address' type="text" />

            <div className='flex items-center justify-end'>
                <button className='bg-secondary text-white px-6 py-2 hover:opacity-90 rounded mt-4'>Submit</button>
            </div>
        </form>
    );
};

export default AddressForm;