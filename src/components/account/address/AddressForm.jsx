import React from 'react';

const AddressForm = () => {
    return (
        <form action="">
            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Name <span className='text-red-600'>*</span></label>
            <input className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Name' type="text" />

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Town / City <span className='text-red-600'>*</span></label>
            <input className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Town' type="text" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Division <span className='text-red-600'>*</span></label>
                    <select className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="" id="">
                        <option value="">Select One</option>
                        <option value="">Dhaka</option>
                        <option value="">Sylhet</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Zip Code</label>
                    <input className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Zip Code' type="text" />
                </div>

                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select District <span className='text-red-600'>*</span></label>
                    <select className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="" id="">
                        <option value="">Select One</option>
                        <option value="">Dhaka</option>
                        <option value="">Sylhet</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Email</label>
                    <input className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Email' type="text" />
                </div>


                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Select Upazilla <span className='text-red-600'>*</span></label>
                    <select className='border outline-none rounded-md w-full px-2 py-1 text-sm' name="" id="">
                        <option value="">Select One</option>
                        <option value="">Dhaka</option>
                        <option value="">Sylhet</option>
                    </select>
                </div>
                <div>
                    <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Phone</label>
                    <input className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Phone' type="text" />
                </div>
            </div>

            <label className='block my-2 text-sm text-black opacity-90' htmlFor="">Street Address <span className='text-red-600'>*</span></label>
            <input className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs' placeholder='Address' type="text" />
            <input className='border outline-none px-2 py-1 rounded-md w-full text-sm placeholder:text-xs mt-2' placeholder='Optional Address' type="text" />

            <div className='flex items-center justify-end'>
                <button className='bg-secondary text-white px-6 py-2 hover:opacity-90 rounded mt-4'>Submit</button>
            </div>
        </form>
    );
};

export default AddressForm;