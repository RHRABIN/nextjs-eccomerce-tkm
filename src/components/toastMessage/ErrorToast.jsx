import React from 'react';

const ErrorToast = ({ message }) => {
    return (
        <div className='border rounded-md p-4 border-red-500 bg-red-100 my-8'>
            <h1 className='text-red-500 text-center'>{message}</h1>
        </div>
    );
};

export default ErrorToast;