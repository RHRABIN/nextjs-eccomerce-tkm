import OrdersCard from '@/components/account/orders/OrdersCard';
import React from 'react';

const OrdersPage = () => {
    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>View Orders</h1>

            <div className='mt-4'>
                <OrdersCard />
            </div>
        </div>
    );
};

export default OrdersPage;