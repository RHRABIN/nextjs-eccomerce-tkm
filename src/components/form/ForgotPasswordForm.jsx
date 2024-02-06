'use client'
import { forgetPassword, sendOtp } from '@/config/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ForgotPasswordForm = () => {
    const [changePassword, setChangePassword] = useState({});
    const [otpData, setOtpData] = useState({});
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = e?.target?.number?.value;
        const otp = e.target?.otp?.value;
        const password = e.target?.password?.value;
        const confirmPassword = e.target?.confirmPassword?.value;
        const updateUserInfo = {
            phone
        }

        setChangePassword(updateUserInfo)

        if (otp?.length > 0) {
            if (otp == otpData.otp) {
                setChangePassword({ ...changePassword, isOtp: true })
            } else {
                window.alert("Then otp is incorrect", otpData.otp)
            }
        }

        if (confirmPassword && password) {
            // set user name and password and call final register api
            const userMutation = async () => {
                const success = await forgetPassword({ confirmPassword, password, email: changePassword.phone });
                if (success?.data) {
                    router.push('/login')
                }

            };
            userMutation();
        }

        if ((phone.length > 0 && !otpData.otp)) {
            userMutation({ phone });
        }
    }



    const userMutation = async (d) => {
        //set local storage how time user send mail at a time, after 30m he can send sms (max 3 times send sms)

        const success = await sendOtp(d);
        if (success?.data) {
            setOtpData({ otp: success.data.data })

        }
    };


    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit}>
                <input className={changePassword?.phone ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter Phone Number' name='number' type="text" />

                <input className={(!otpData?.otp || changePassword.isOtp) ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter your 6 digits code' name='otp' type="text" />



                {changePassword.isOtp &&
                    <>

                        <label className='mb-2 block mt-4' htmlFor="">New Password</label>
                        <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='New Password' name='password' type="password" />

                        <label className='mb-2 block mt-4' htmlFor="">Confirm Password</label>
                        <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Confirm Password' name='confirmPassword' type="password" />

                    </>
                }


                <div className='flex justify-center mt-6 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>{changePassword?.number && changePassword?.otp ? 'Change' : 'Send'}</button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;