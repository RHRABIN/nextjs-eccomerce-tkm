import React from 'react';
import OrderDetailsClient from '@/clientSideRender/orders/OrderDetailsClient';
import OrdersSingleCard from './OrdersSingleCard';

const OrdersCard = ({ product }) => {
    const { orderId, totalAmount, createdAt } = product || {};
    return (
        <div className='border rounded p-4'>
            <div className='flex items-start justify-between mb-2'>
                <div>
                    <h4 className='text-blue-500 text-lg'>Order Id: {orderId}</h4>
                    <p className='text-sm font-[300]'>Date: {new Date(createdAt).toLocaleString()}</p>
                </div>
                <div>
                    <p className='text-sm font-[500]'>Total: {totalAmount}</p>
                    <OrderDetailsClient
                        product={product}
                    />
                </div>
            </div>
            {
                product?.products?.map(prod =>
                    <OrdersSingleCard
                        key={prod?._id}
                        orderProd={prod}
                        status={product?.status}
                    />
                )
            }
            <div className='flex items-center justify-end'>
                <button className='hover:bg-red-500 hover:text-white px-3 py-1.5 rounded text-xs border border-red-500'>Cancel</button>
            </div>
        </div>

    );
};

export default OrdersCard;