'use client'
import OrderProgressBar from '@/components/account/orders/OrderProgressBar';
import OrdersSingleCard from '@/components/account/orders/OrdersSingleCard';
import Modal from '@/components/modal/Modal';
import React, { useState } from 'react';

const OrderDetailsClient = () => {
    const [openModal, setOpenModal] = useState(false);
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
                        <h4 className='text-blue-500 text-lg'>Order Id: BKON973630</h4>
                        <p className='text-sm font-[300]'>Date: 12/9/2023, 12:01:02 PM</p>
                        <p className='text-sm font-[500]'>Total: 2000</p>
                    </div>
                </div>
                
                {/* <OrderProgressBar /> */}
                <OrdersSingleCard />


                <div className='mt-4 border-t py-4'>
                    <h3 className='font-[500]'>Order summery</h3>
                    <span className='text-sm flex items-center justify-between'>
                        <p>Sub total:</p>
                        <p>1900 ৳</p>
                    </span>
                    <span className='text-sm flex items-center justify-between border-b pb-1'>
                        <p>Shipping:</p>
                        <p>100 ৳</p>
                    </span>
                    <span className='text-sm flex items-center justify-between py-1'>
                        <p>Total amount:</p>
                        <p>2000 ৳</p>
                    </span>
                </div>
            </Modal>
        </div>
    );
};

export default OrderDetailsClient;