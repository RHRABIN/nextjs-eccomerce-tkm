'use client'
import AddressForm from '@/components/account/address/AddressForm';
import Modal from '@/components/modal/Modal';
import React, { useState } from 'react';

const CheckoutNewAddress = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <button onClick={() => setOpenModal(true)} className='bg-white text-gray-800 font-medium w-full py-2 rounded border shadow'>+ Add New Address</button>

            <Modal
                title={'Add New Address'}
                modalOpen={openModal}
                setModalOpen={setOpenModal}
            >
                <AddressForm />
            </Modal>
        </div>
    );
};

export default CheckoutNewAddress;