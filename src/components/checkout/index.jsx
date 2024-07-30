'use client'
import React, { useContext, useEffect, useState } from 'react';
import ChekoutProductCard from '../card/ChekoutProductCard';
import ChangeDelivaryAddress from '@/clientSideRender/checkout/ChangeDelivaryAddress';
import CheckoutNewAddress from '@/clientSideRender/checkout/CheckoutNewAddress';
import { getAddToCartDataByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import { getActiveAddress } from '@/config/addressApi';
import { useRouter } from 'next/navigation';

const CheckoutContent = () => {
    const { user, deleteSuccess, checkoutSuccess, addressSuccess } = useContext(AuthContext);
    
    const [cartData, setCartData] = useState(null);
    const [activeAddress, setActiveAddress] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [cartResponse, addressResponse] = await Promise.all([
                    getAddToCartDataByEmail(user?.data?.user?.email),
                    getActiveAddress(user?.data?.user?.email)
                ])
                setCartData(cartResponse);
                setActiveAddress(addressResponse.data);
            } catch (error) {
                console.error(error)
            }finally{
                setIsLoading(false)
            }
        };

        fetchData();

        if (checkoutSuccess || deleteSuccess) {
            fetchData()
            // setCheckoutSuccess(false)
        }
    }, [user?.data?.user?.email, checkoutSuccess, deleteSuccess, addressSuccess]);

    const {shippingName, upazila, district, division, shippingPhone, address} = activeAddress?.data || {};

    if(!isLoading && !cartData?.data?.data?.cartData?.products){
        router.replace('/')
    }
    
    return (
        <div>
            {
                isLoading ? <p className='text-center'>Loading...</p> : <>
                
                <CheckoutNewAddress />

            {
                activeAddress ?
                    <div className='bg-white rounded mt-5 shadow p-2 border text-sm'>
                        <p className='font-semibold mb-2'>Deliver to: {shippingName}</p>
                        <p className='font-semibold mb-2'>Phone: {shippingPhone}</p>
                        <p className='font-semibold mb-2 text-[#929292]'>Home: {upazila}, {district}, {division}</p>
                        <p className='font-light'><span className='bg-blue-100 p-1 rounded'>Details</span> | <span className='text-[#929292]'>{address} </span> <ChangeDelivaryAddress /></p>

                    </div> :
                    <p className='text-center mt-5 js--no-address'>No Address Found</p>
            }

            <div className='mt-4'>
                {cartData?.data?.data?.cartData?.products?.length > 0 ?
                    cartData?.data?.data?.cartData?.products?.map(product =>
                        <ChekoutProductCard
                            key={product?._id}
                            product={product}
                        />
                    ) :
                    <p className='text-center'>No Cart Data Found</p>
                }
            </div>
                </>
            }
        </div>
    );
};

export default CheckoutContent;