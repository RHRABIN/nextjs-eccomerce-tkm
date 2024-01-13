import React from 'react';

const SuccessToast = ({ message }) => {
    return (
        <div className='border rounded-md p-4 border-green-500 bg-green-100 my-8'>
            <h1 className='text-green-500 text-center'>{message}</h1>
        </div>
    );
};

export default SuccessToast;