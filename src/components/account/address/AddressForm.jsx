'use client'
import { createAddress } from '@/config/addressApi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useState } from 'react';

const AddressForm = () => {
    const [newAddress, setNewAddress] = useState();
    const { user } = useContext(AuthContext);


    const handleSubmitAddress = (e) => {
        e.preventDefault();
        if(user?.data?.user?.email){
            createAddress(user?.data?.user?.email, newAddress)
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
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Name' name='shippingName' type="text" />

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Town / City <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Town' name='town' type="text" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Division <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="division" id="">
                        <option value="">Select One</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="sylhet">Sylhet</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Zip Code</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Zip Code' name='zipCode' type="text" />
                </div>

                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select District <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="district" id="">
                        <option value="">Select One</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="sylhet">Sylhet</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Email</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Email' name='shippingEmail' type="text" />
                </div>


                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Upazilla <span className='text-red-600'>*</span></label>
                    <select onChange={handleAddressChange} className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="upazila" id="">
                        <option value="">Select One</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="sylhet">Sylhet</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Phone</label>
                    <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Phone' name='shippingPhone' type="text" />
                </div>
            </div>

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Street Address <span className='text-red-600'>*</span></label>
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Address' name='address' type="text" />
            <input onChange={handleAddressChange} className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs mt-2' placeholder='Optional Address' type="text" />

            <div className='flex items-center justify-end'>
                <button className='bg-secondary text-white px-6 py-2 hover:opacity-90 rounded mt-4'>Submit</button>
            </div>
        </form>
    );
};

export default AddressForm;