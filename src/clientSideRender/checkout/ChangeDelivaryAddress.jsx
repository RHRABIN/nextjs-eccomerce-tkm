'use client'
import AddressCard from '@/components/account/address/AddressCard';
import { Modal } from 'antd';
import React, { useState } from 'react';

const ChangeDelivaryAddress = () => {
    const [openModal, setModalOpen] = useState(false);
    return (
        <span>
            <button onClick={() => setModalOpen(true)} className='text-blue-600 font-medium ml-2'>Change</button>
            <Modal
                title={'Delivery Address'}
                width={800}
                centered
                open={openModal}
                onCancel={() => setModalOpen(false)}
                footer={false}
            >
                <AddressCard />
            </Modal>
        </span>
    );
};

export default ChangeDelivaryAddress;