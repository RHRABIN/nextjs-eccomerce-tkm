'use client'
import { createAddress, updateAddress } from '@/config/addressApi';
import { getAllDistrict, getAllDivisions, getAllSubDistrict } from '@/config/shippingApi';
import { AuthContext } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AddressForm = ({ address, onCloseModal }) => {
    const [newAddress, setNewAddress] = useState();
    const { user, setAddressOpen, addressSuccess, setAddressSuccess } = useContext(AuthContext);
    const [division, setDivision] = useState(null);
    const [district, setDistrict] = useState(null);
    const [subDistrict, setSubDistrict] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoadng] = useState(false)
    const [divisionNotClick, setDivisionNotClick] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const fetchDivisions = async () => {
            try {
                const divisionsResponse = await getAllDivisions();
                setDivision(divisionsResponse?.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch divisions");
            }
        };

        fetchDivisions();
    }, []);

    useEffect(() => {
        if (!newAddress?.division) return;

        const fetchDistricts = async () => {
            try {
                const districtsResponse = await getAllDistrict(newAddress.division);
                setDistrict(districtsResponse?.data);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch districts");
            }
        };

        fetchDistricts();
    }, [newAddress?.division]);

    useEffect(() => {
        if (!newAddress?.district) return;

        const fetchSubDistricts = async () => {
            try {
                const subDistrictsResponse = await getAllSubDistrict(newAddress.district);
                setSubDistrict(subDistrictsResponse?.data);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch subdistricts");
            }
        };

        fetchSubDistricts();
    }, [newAddress?.district]);


    const { _id, shippingName, shippingPhone, shippingEmail, district: defaultDistrict, division: defaultDivision, address: defaultAddress, upazila } = address || {};

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

        try {
            setIsLoadng(true)
            if (!address || Object.keys(address).length === 0) {
                const res = await createAddress(user?.data?.user?.email, newAddress);
                if (res) {
                    toast.success("Address created successfully!")
                    setAddressOpen(false)
                    setAddressSuccess(true)
                }
            } else {
                const res = await updateAddress(_id, newAddress);
                if (res) {
                    toast.success("Address Update successfully!")
                    setAddressOpen(false)
                    setAddressSuccess(true)
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            window.location.reload()
            setIsLoadng(false)
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
            <input required={!address?._id} onChange={handleAddressChange} defaultValue={shippingName} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Name' name='shippingName' type="text" />

            {/* <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Town / City <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Town' name='town' type="text" /> */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Division <span className='text-red-600'>*</span></label>
                    <select required={!address?._id} onChange={handleAddressChange} onClick={() => setDivisionNotClick(true)} defaultValue={defaultDivision} className='border outline-none bg-transparent rounded-md w-full px-2 py-1 text-sm' name="division" id="">
                        {(defaultDivision && !divisionNotClick) && <option value={defaultDivision} >{defaultDivision}</option>}
                        {
                            makeOptions(division?.result)
                        }


                    </select>
                </div>
                {/* <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Zip Code</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Zip Code' name='zipCode' type="text" />
                </div> */}

                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select District <span className='text-red-600'>*</span></label>
                    <select required={!address?._id} onChange={handleAddressChange} defaultValue={defaultDistrict} disabled={!defaultDistrict && !newAddress?.division} className='border outline-none bg-transparent rounded-md w-full px-2 py-1 text-sm' name="district" id="">
                        {
                            makeOptions(district?.result)
                        }
                        {(defaultDistrict && !district?.result) && <option value={defaultDistrict} >{defaultDistrict}</option>}
                    </select>
                </div>
                {/* <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Email</label>
                    <input onChange={handleAddressChange} defaultValue={shippingEmail} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Email' name='shippingEmail' type="text" />
                </div> */}


                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Upazilla <span className='text-red-600'>*</span></label>
                    <select required={!address?._id} disabled={!upazila && !newAddress?.district} defaultValue={upazila} onChange={handleAddressChange} className='border outline-none bg-transparent rounded-md w-full px-2 py-1 text-sm' name="upazila" id="">
                        {
                            makeOptions(subDistrict?.result)
                        }
                        {(upazila && !subDistrict?.result) && <option value={upazila} >{upazila}</option>}
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Phone</label>
                    <input required={!address?._id} onChange={handleAddressChange} defaultValue={shippingPhone} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Phone 11 digit' name='shippingPhone' type="number" />
                </div>
            </div>

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Address <span className='text-red-600'>*</span></label>
            <textarea required={!address?._id} onChange={handleAddressChange} defaultValue={defaultAddress} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Address' name='address' type="text" />


            <div className='flex items-center justify-end'>
                <button className='bg-secondary text-white px-6 py-2 hover:opacity-90 rounded mt-4'>{isLoading ? 'Submit..' : 'Submit'}</button>
            </div>
        </form>
    );
};

export default AddressForm;