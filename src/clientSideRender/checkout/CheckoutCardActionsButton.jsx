'use client'
import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const CheckoutCardActionsButton = () => {
    const [selectProduct, setSelectProduct] = useState(1);

    const handleIncrementProduct = () => {
        if (selectProduct >= 5) {
            alert('Already added 5 products')
        } else {
            setSelectProduct(selectProduct + 1)
        }
    }

    const handleDecrementProduct = () => {
        if (selectProduct <= 1) {
            alert('You have must select one product')
        } else {
            setSelectProduct(selectProduct - 1)
        }
    }

    const handleDeleteProduct = () => {
        alert('Are you sure you want to delete this product')
    }

    return (
        <div>
            <div className='flex items-center gap-4 justify-end'>
                <button onClick={handleDecrementProduct} className='bg-gray-100 h-8 w-8 rounded-full text-2xl'>-</button>
                <p>{selectProduct}</p>
                <button onClick={handleIncrementProduct} className='bg-gray-100 h-8 w-8 rounded-full text-2xl'>+</button>
            </div>

            <div className='flex justify-end mt-6'>
                <button onClick={handleDeleteProduct} className='text-xl'>
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
};

export default CheckoutCardActionsButton;