'use client'
import SmallLoader from '@/components/loader/smallLoader/SmallLoader';
import { addToCartNewDataByEmail, deleteCardDataByEmailId } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const CheckoutCardActionsButton = ({ product }) => {
    const [selectProduct, setSelectProduct] = useState(product?.quantity);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [incrementLoading, setIncrementLoading] = useState(false);
    const [decrementLoading, setDecrementLoading] = useState(false);
    const { deleteSuccess, setDeleteSuccess, isCartSuccess, setIsCartSuccess, } = useContext(AuthContext);

    const { _id } = product?.product || {};
    const { user } = useContext(AuthContext)

    const handleIncrementProduct = async () => {
        setSelectProduct(selectProduct + 1)

        let data = {};
        if (user?.data?.user?.email) {
            data = {
                product: _id,
            };
        } else {
            toast.error('Please Signin Your Account')
        }
        try {
            setIncrementLoading(true)
            const res = await addToCartNewDataByEmail(user?.data?.user?.email, data);
            if (res) {
                setIsCartSuccess(true)
                setCheckoutSuccess(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIncrementLoading(false)
        }
    }

    const handleDecrementProduct = async () => {
        setSelectProduct(selectProduct - 1)

        let data = {};
        if (user?.data?.user?.email) {
            data = {
                product: _id,
                minusQty: product?.quantity
            };
        } else {
            toast.error('Please Signin Your Account')
        }
        try {
            setDecrementLoading(true)
            const res = await addToCartNewDataByEmail(user?.data?.user?.email, data);
            if (res) {
                setIsCartSuccess(true)
                setCheckoutSuccess(true)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setDecrementLoading(false)
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
            <div className='flex items-center gap-4 justify-center'>
                <button onClick={handleDecrementProduct} className={`bg-gray-100 p-1.5 rounded-full ${selectProduct <= 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                    {decrementLoading ? <SmallLoader /> : <FaMinus />}
                </button>
                <p>{selectProduct}</p>
                <button onClick={handleIncrementProduct} className={`bg-gray-100 p-1.5 rounded-full ${selectProduct >= 5 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                    {incrementLoading ? <SmallLoader /> : <FaPlus />}
                </button>
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