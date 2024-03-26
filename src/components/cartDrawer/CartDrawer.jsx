'use client'
import React, { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import ChekoutProductCard from '../card/ChekoutProductCard';
import Link from 'next/link';
import { getAddToCartDataByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import { Drawer } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import { baseUrl } from '@/config/baseUrl';

const CartDrawer = () => {
    const { user, isCartSuccess, setIsCartSuccess, deleteSuccess, setDeleteSuccess } = useContext(AuthContext)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [cartData, setCartData] = useState();
    useEffect(() => {
        const cartMutation = async () => {
            try {
                if(user?.data?.user?.email){
                    const response = await axios.post(`${baseUrl}/cart/myCart/${user?.data?.user?.email}`);
                    setCartData(response?.data?.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        cartMutation();
        if (isCartSuccess) {
            cartMutation();
            setIsCartSuccess(false);
        }

        if (deleteSuccess) {
            cartMutation()
            setDeleteSuccess(false)
        }
    }, [user, isCartSuccess, deleteSuccess]);


    return (
        <div className='mt-2'>
            <button onClick={() => setOpenDrawer(true)} className="relative">
                <BsBag />
                <span className="absolute bottom-2 left-2 bg-red-500 h-5 w-5 md:h-6 md:w-6 rounded-full text-white flex justify-center items-center"><small>{cartData?.totalQuantity ? cartData?.totalQuantity : 0}</small></span>
            </button>

            <Drawer
                title={'Your Bag'}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                closeIcon={null}
                extra={
                    <button onClick={() => setOpenDrawer(false)} className='text-xl font-light border border-white hover:border-dark'><AiOutlineClose /></button>
                }
                footer={
                    <div>
                        <div className='flex justify-between items-center'>
                            <p>Subtotal :</p>
                            <span className='flex items-center my-2 md:justify-center mr-4'>
                                <p className='font-semibold font-[auto] mr-1'>৳</p>
                                <p className='md:text-end font-bold text-orange-500'>{cartData?.subtotal ? cartData?.subtotal : 0}</p>
                            </span>
                        </div>
                        <div className="mb-10 mt-5 w-full">

                            {user?.data?.user?.email ? <Link onClick={() => setOpenDrawer(false)} href='/checkout' className="bg-secondary text-white hover:text-white text-lg p-2 w-full block text-center font-medium rounded hover:opacity-90">Place Order</Link> :

                                <Link onClick={() => setOpenDrawer(false)} href='/login' className="bg-secondary text-white hover:text-white text-lg p-2 w-full block text-center font-medium rounded hover:opacity-90">Place Order</Link>}

                            <Link onClick={() => setOpenDrawer(false)} href='/' className="text-gray-800 text-lg font-medium mt-4 hover:text-black text-center block">Continue Shopping</Link>
                        </div>
                    </div>
                }
            >
                <div className="relative w-full h-full">

                    {
                        cartData?.cartData?.products?.length > 0 ? cartData?.cartData?.products?.map(product =>

                            <ChekoutProductCard
                                key={product?._id}
                                product={product} />
                        ) : <p className='text-center'>No cart data found</p>
                    }
                </div>
            </Drawer>
        </div>
    );
};

export default CartDrawer;