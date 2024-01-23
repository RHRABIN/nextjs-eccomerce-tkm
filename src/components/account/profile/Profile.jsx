import ForgotPasswordForm from '@/components/form/ForgotPasswordForm';
import Link from 'next/link';
import React from 'react';

const Profile = () => {

    return (
        <div className='my-5'>
            <form action="" className='md:w-3/5'>
                <label htmlFor="" className='block font-[300] ml-2 mb-2'>Name</label>
                <input className='border outline-none rounded-md p-2 w-full mb-4' disabled type="text" defaultValue='Adnan Hossain' />

                <label htmlFor="" className='block font-[300] ml-2 mb-2'>Email</label>
                <input className='border outline-none rounded-md p-2 w-full mb-4' disabled type="text" defaultValue='example@gmail.com' />

                <label htmlFor="" className='block font-[300] ml-2 mb-2'>Phone</label>
                <input className='border outline-none rounded-md p-2 w-full mb-4' disabled type="text" defaultValue='01***********' />

                <div className='flex items-center justify-end mt-4'>
                    <Link href='/account/update-profile' className='bg-secondary text-white px-6 py-2 font-[300] hover:opacity-90 rounded-md'>Update Profile</Link>
                </div>
            </form>

            <div className='md:w-3/5 mt-10'>
                <h1 className='text-2xl font-medium'>Change Password</h1>
                <ForgotPasswordForm />
            </div>
        </div>
    );
};

export default Profile;