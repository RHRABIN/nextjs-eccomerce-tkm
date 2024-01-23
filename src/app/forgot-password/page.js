import ForgotPasswordForm from '@/components/form/ForgotPasswordForm';
import React from 'react';

const FotgotPasswordPage = () => {
    return (
        <div className='container mx-auto my-16'>
            <div className='mx-4 md:mx-0'>
                <h1 className='uppercase text-center md:text-start text-2xl font-semibold text-secondary border-b-dark border-dotted border-b pb-4 mb-10'>Change your passwprd</h1>
                <div className='border  md:w-1/3 md:mx-auto p-4 rounded-md'>
                    <ForgotPasswordForm />
                </div>
            </div>
        </div>
    );
};

export default FotgotPasswordPage;