import React from 'react';

const SignupForm = () => {
    return (
        <div>
            <form action="">
                <label className='mb-2 block' htmlFor="">Name</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Name' type="text" />

                <label className='mb-2 block mt-4' htmlFor="">Phone</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Phone' type="text" />

                <label className='mb-2 block mt-4' htmlFor="">Email</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Email' type="email" />

                <label className='mb-2 block mt-4' htmlFor="">Password</label>
                <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Password' type="password" />

                <div className='flex justify-center mt-6 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>Signup</button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;