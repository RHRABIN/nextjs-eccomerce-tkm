'use client'
import Modal from '@/components/modal/Modal';
import React, { useState } from 'react';

const OrderDetailsClient = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <button onClick={() => setOpenModal(true)} className='border-none text-sm uppercase text-blue-500'>DETAILS</button>
            <Modal
                modalOpen={openModal}
                setModalOpen={setOpenModal}
            />
        </div>
    );
};

export default OrderDetailsClient;