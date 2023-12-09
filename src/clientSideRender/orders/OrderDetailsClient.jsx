'use client'
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
                <OrdersSingleCard />
            </Modal>
        </div>
    );
};

export default OrderDetailsClient;