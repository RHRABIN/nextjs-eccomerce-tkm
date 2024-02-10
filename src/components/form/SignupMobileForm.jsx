'use client'
import { sendOtp, userSignup } from '@/config/authApi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import TihrtyMinuteCount from '../signup/TihrtyMinuteCount';

const SignupMobileForm = () => {
    const [signupInfo, setSignUpInfo] = useState({});
    const [otpData, setOtpData] = useState({});
    const [timeInSecs, setTimeInSecs] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isThirtyCount, setIsThirtyCount] = useState(false);
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
                toast.error("Then otp is incorrect", otpData.otp)
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


    useEffect(() => {
        let existingOtpArray;
        if (otpData?.otp) {
            var currentTime = new Date().getTime();
            existingOtpArray = JSON.parse(localStorage.getItem('otp')) || [];
            const updatedOtpArray = [...existingOtpArray, currentTime];
            localStorage.setItem('otp', JSON.stringify(updatedOtpArray));
        }
    }, [otpData]);



    // otp verification time count 
    let ticker;

    useEffect(() => {
        if (isRunning) {
            startTimer(2 * 60); // 5 minutes in seconds
        } else {
            clearInterval(ticker);
        }

        return () => clearInterval(ticker);
    }, [isRunning]);

    function startTimer(secs) {
        setTimeInSecs(secs);
        ticker = setInterval(tick, 1000);
    }

    function tick() {
        setTimeInSecs((prevSecs) => {
            if (prevSecs > 0) {
                return prevSecs - 1;
            } else {
                clearInterval(ticker);
                setIsRunning(false);
                return 0;
            }
        });
    }

    function formatTime(secs) {
        const mins = Math.floor(secs / 60);
        const remainderSecs = secs % 60;
        const pretty = `${mins < 10 ? '0' : ''}${mins}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
        return pretty;
    }


    useEffect(() => {
        if (otpData?.otp) {
            setIsRunning(true);
        }
        if (timeInSecs === 1) {
            setIsRunning(false);
        }
    }, [timeInSecs, otpData])



    return (
        <div className='my-6'>
            {
                isRunning && <p className='text-sm text-center font-medium mb-4'>
                    Resend OTP After
                    <span className='text-primary'> {formatTime(timeInSecs)}</span>
                    <span className='text-xs'> {timeInSecs <= 59 ? 'sec' : 'mins'}</span>
                </p>
            }
            <TihrtyMinuteCount
                isThirtyCount={isThirtyCount}
                setIsThirtyCount={setIsThirtyCount}
            />
            <form onSubmit={handleSubmit}>

                {/* initial input */}
                <input required onWheel={(e) => e.target.blur()} className={signupInfo.phone ? 'hidden' : 'border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter Phone Number' name='number' type="number" />

                {/* verify otp on sms */}
                <input onWheel={(e) => e.target.blur()} className={(!otpData.otp || signupInfo.isOtp) ? 'hidden' : ' border border-gray-300 outline-none p-2 rounded w-full block placeholder:text-sm placeholder:text-dark placeholder:font-[300]'} placeholder='Enter your 4 digits code' name='otp' type="number" />

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
                    <button className={`bg-secondary text-white font-[500] px-8 py-2 rounded ${isRunning || isThirtyCount ? 'hidden' : 'block'}`} type='submit'>{signupInfo?.number && signupInfo?.otp ? 'Signup' : 'Send'}</button>
                </div>
            </form>
        </div>
    );
};

export default SignupMobileForm;