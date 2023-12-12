import ChangeDelivaryAddress from '@/clientSideRender/checkout/ChangeDelivaryAddress';
import CheckoutNewAddress from '@/clientSideRender/checkout/CheckoutNewAddress';
import React from 'react';
import ChekoutProductCard from '../card/ChekoutProductCard';

const CheckoutContent = () => {
    return (
        <div>
            <CheckoutNewAddress />

            <div className='bg-white rounded mt-5 shadow p-2 border text-sm'>
                <p className='font-light'>Deliver to: Rafiul Hasan Rabin</p>
                <p className='font-light'><span className='bg-blue-100 p-0.5 rounded-md'>Home</span> | Bashundhara, Dhdka - Dhaka, Dhaka <ChangeDelivaryAddress /></p>
            </div>

            <div className='mt-4'>
                <ChekoutProductCard />
            </div>
        </div>
    );
};

export default CheckoutContent;