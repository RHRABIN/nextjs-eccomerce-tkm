'use client'
import React, { useState } from 'react';
import OrderDetailsClient from '@/clientSideRender/orders/OrderDetailsClient';
import OrdersSingleCard from './OrdersSingleCard';
import CancelOrder from './CancelOrder';
import ReturnOrder from './ReturnOrder';

const OrdersCard = ({ product }) => {
    const { orderId, totalAmount, createdAt } = product || {};
    const [modalOpen, setModalOpen] = useState(false);
    const [returnModal, setReturnModal] = useState(false);


    return (
        <div className='border rounded p-4'>
            <div className='flex items-start justify-between mb-2'>
                <div>
                    <h4 className='text-blue-500'>Order Id: {orderId}</h4>
                    <p className='text-xs font-[300]'>Date: {new Date(createdAt).toLocaleString()}</p>
                </div>
                <div className='w-1/3 text-end'>
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

                {
                    product?.report ?
                        <p className='text-xs md:text-sm font-[300] my-1 bg-slate-200 rounded-full w-fit px-3 py-1'>{`${product?.report?.requestedFor} ${product?.report?.status}`}</p> :
                        <>
                            {
                                product?.status === 'pending' || product?.status === 'processing' ?
                                    <button onClick={() => setModalOpen(true)} className='hover:bg-red-500 hover:text-white px-3 py-1.5 rounded text-xs border border-red-500'>Cancel</button> : null
                            }
                        </>
                }
                {
                    !product?.report &&
                        product?.status === 'delivered' ?
                        <button onClick={() => setReturnModal(true)} className='hover:bg-red-500 hover:text-white px-3 py-1.5 rounded text-xs border border-red-500'>Return</button> : null
                }

                <CancelOrder
                    orderId={orderId}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
                <ReturnOrder
                    orderId={orderId}
                    returnModal={returnModal}
                    setReturnModal={setReturnModal}
                />
            </div>
        </div>

    );
};

export default OrdersCard;