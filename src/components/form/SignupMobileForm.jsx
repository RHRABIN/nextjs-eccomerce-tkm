'use client'
import { sendOtp, userSignup } from '@/config/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignupMobileForm = () => {
    const [signupInfo, setSignUpInfo] = useState({});
    const [otpData, setOtpData] = useState({});
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = e?.target?.number?.value;
        const name = e?.target?.name?.value;
        const password = e?.target?.password?.value;
        const otp = e?.target?.otp?.value;

        const updateUserInfo = {
            phone,
        }

        setSignUpInfo(updateUserInfo)

        if (otp?.length > 0) {
            if (otp == otpData.otp) {
                setSignUpInfo({ ...signupInfo, isOtp: true })
            } else {
                window.alert("Then otp is incorrect", otpData.otp)
            }
        }

        if (name && password) {
            // set user name and password and call final register api
            const userMutation = async () => {
                const success = await userSignup({ name, password, email: signupInfo.phone });
                if (success?.data) {
                    router.push('/')
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

        if (d) {
            const success = await sendOtp(d);
            if (success?.data) {
                setOtpData({ otp: success.data.data })
            }
        }
    };

    return (
        <div className='my-6'>
            <form onSubmit={handleSubmit}>

                {/* initial input */}
                <input required onWheel={(e) => e.target.blur()} className={signupInfo.phone ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter Phone Number' name='number' type="number" />

                {/* verify otp on sms */}
                <input onWheel={(e) => e.target.blur()} className={(!otpData.otp || signupInfo.isOtp) ? 'hidden' : ' border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter your 6 digits code' name='otp' type="number" />

                {/* final step for password and name */}

                {signupInfo.isOtp &&
                    <>
                        <label className='mb-2 block mt-4' htmlFor="">Name</label>
                        <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Name' name='name' type="text" />

                        <label className='mb-2 block mt-4' htmlFor="">Password</label>
                        <input className='border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]' placeholder='Password' name='password' type="password" />
                    </>
                }

                <div className='flex justify-center mt-4 hover:opacity-90'>
                    <button className='bg-secondary text-white font-[500] px-8 py-2 rounded' type='submit'>{signupInfo?.number && signupInfo?.otp ? 'Signup' : 'Send'}</button>
                </div>
            </form>
        </div>
    );
};

export default SignupMobileForm;