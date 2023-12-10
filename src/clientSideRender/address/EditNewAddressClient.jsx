'use client'
import AddressForm from '@/components/account/address/AddressForm';
import Modal from '@/components/modal/Modal';
import React, { useState } from 'react';

const EditNewAddressClient = () => {
    const [addressOpen, setAddressOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setAddressOpen(true)} className='text-blue-500 text-sm'>Edit</button>
            <Modal
                modalOpen={addressOpen}
                setModalOpen={setAddressOpen}
                title={'Edit Address'}
            >

                <AddressForm />
            </Modal>
        </div>
    );
};

export default EditNewAddressClient;