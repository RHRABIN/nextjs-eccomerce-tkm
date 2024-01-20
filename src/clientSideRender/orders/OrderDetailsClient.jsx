'use client'
import OrderProgressBar from '@/components/account/orders/OrderProgressBar';
import OrdersSingleCard from '@/components/account/orders/OrdersSingleCard';
import Modal from '@/components/modal/Modal';
import React, { useState } from 'react';

const OrderDetailsClient = ({ product }) => {
    const [openModal, setOpenModal] = useState(false);
    const { orderId, totalAmount, createdAt, shippingCharge } = product || {};

    return (
        <div>
            <button onClick={() => setOpenModal(true)} className='border-none text-sm uppercase text-blue-500'>DETAILS</button>
            <Modal
                title={'Order Details'}
                modalOpen={openModal}
                setModalOpen={setOpenModal}
            >
                <div className='border-b pb-2'>
                    <div>
                        <h4 className='text-blue-500 text-lg'>Order Id: {orderId}</h4>
                        <p className='text-sm font-[300]'>Date: {new Date(createdAt).toLocaleString()}</p>
                        <p className='text-sm font-[500]'>Total: {totalAmount}</p>
                    </div>
                </div>

                {/* <OrderProgressBar /> */}
                {
                    product?.products?.map(prod =>
                        <OrdersSingleCard
                            key={prod?._id}
                            orderProd={prod}
                            status={product?.status}
                        />
                    )
                }


                <div className='mt-4 border-t py-4'>
                    <h3 className='font-[500]'>Order summery</h3>
                    <span className='text-sm flex items-center justify-between'>
                        <p>Sub total:</p>
                        <p>{shippingCharge ? (totalAmount - shippingCharge) : totalAmount} ৳</p>
                    </span>
                    <span className='text-sm flex items-center justify-between border-b pb-1'>
                        <p>Shipping:</p>
                        <p>{shippingCharge} ৳</p>
                    </span>
                    <span className='text-sm flex items-center justify-between py-1'>
                        <p>Total amount:</p>
                        <p>{totalAmount} ৳</p>
                    </span>
                </div>
            </Modal>
        </div>
    );
};

export default OrderDetailsClient;