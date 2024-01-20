'use client'
import AddressCard from '@/components/account/address/AddressCard';
import Modal from '@/components/modal/Modal';
import React, { useState } from 'react';

const ChangeDelivaryAddress = () => {
    const [openModal, setModalOpen] = useState(false);
    return (
        <span>
            <button onClick={() => setModalOpen(true)} className='text-blue-600 font-medium'>Change</button>
            <Modal
                title={'Delivery Address'}
                modalOpen={openModal}
                setModalOpen={setModalOpen}
            >
                <AddressCard />
            </Modal>
        </span>
    );
};

export default ChangeDelivaryAddress;