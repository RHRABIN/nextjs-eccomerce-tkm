'use client'
import OrdersCard from '@/components/account/orders/OrdersCard';
import { getAllOrdersByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react';

const OrdersPage = async () => {
    const { user } = useContext(AuthContext);
    const { data: products } = await getAllOrdersByEmail(user?.data?.user?.email) || {};

    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>View Orders</h1>

            <div className='mt-4'>
                {
                    products?.map(product =>
                        <OrdersCard
                            key={product?._id}
                            product={product}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default OrdersPage;