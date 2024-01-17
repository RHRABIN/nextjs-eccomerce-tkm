'use client'
import ChangeDelivaryAddress from '@/clientSideRender/checkout/ChangeDelivaryAddress';
import CheckoutNewAddress from '@/clientSideRender/checkout/CheckoutNewAddress';
import React, { useContext } from 'react';
import ChekoutProductCard from '../card/ChekoutProductCard';
import { getAddToCartDataByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';

const CheckoutContent = async () => {
    const { user } = useContext(AuthContext)
    const data = await getAddToCartDataByEmail(user?.data?.user?.email);
    // console.log(data?.data?.data?.cartData?.products)
    return (
        <div>
            <CheckoutNewAddress />

            <div className='bg-white rounded mt-5 shadow p-2 border text-sm'>
                <p className='font-light'>Deliver to: Rafiul Hasan Rabin</p>
                <p className='font-light'><span className='bg-blue-100 p-0.5 rounded-md'>Home</span> | Bashundhara, Dhdka - Dhaka, Dhaka <ChangeDelivaryAddress /></p>
            </div>

            <div className='mt-4'>
                {
                    data?.data?.data?.cartData?.products?.map(product =>
                        <ChekoutProductCard
                            key={product?._id}
                            product={product?.product}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default CheckoutContent;