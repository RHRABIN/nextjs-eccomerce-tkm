'use client'
import SmallLoader from '@/components/loader/smallLoader/SmallLoader';
import { deleteCardDataByEmailId } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';

const CheckoutCardActionsButton = ({ product }) => {
    const [selectProduct, setSelectProduct] = useState(1);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const { deleteSuccess, setDeleteSuccess } = useContext(AuthContext);

    const { _id } = product || {};
    const { user } = useContext(AuthContext)

    const handleIncrementProduct = () => {
        if (selectProduct >= 5) {
            toast.error('Already added 5 products')
        } else {
            setSelectProduct(selectProduct + 1)
        }
    }

    const handleDecrementProduct = () => {
        if (selectProduct <= 1) {
            toast.error('You have must select one product')
        } else {
            setSelectProduct(selectProduct - 1)
        }
    }

    const handleDeleteProduct = async (productId) => {
        setDeleteLoading(true);
        try {
            const res = await deleteCardDataByEmailId(user?.data?.user?.email, { productId });
            if (res) {
                setDeleteSuccess(true);
                toast.success('Cart delete successfull')
            }
        } catch (error) {
            console.error(error);
        } finally {
            setDeleteLoading(false);
        }
    };


    return (
        <div className='flex items-center justify-between md:block'>
            <div className='flex items-center gap-4 justify-end'>
                <button onClick={handleDecrementProduct} className='bg-gray-100 h-8 w-8 rounded-full text-2xl'>-</button>
                <p>{selectProduct}</p>
                <button onClick={handleIncrementProduct} className='bg-gray-100 h-8 w-8 rounded-full text-2xl'>+</button>
            </div>

            <div className='flex justify-end md:mt-6'>
                <button onClick={() => handleDeleteProduct(_id)} className='text-xl'>
                    {
                        deleteLoading ? <SmallLoader /> : <AiOutlineDelete />
                    }
                </button>
            </div>
        </div>
    );
};

export default CheckoutCardActionsButton;