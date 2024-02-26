'use client'
import AddressForm from '@/components/account/address/AddressForm';
import Modal from '@/components/modal/Modal';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react';

const CreateNewAddressClient = () => {
    const { addressOpen, setAddressOpen } = useContext(AuthContext);
    return (

        <div>
            <button onClick={() => setAddressOpen(true)} className='bg-secondary text-sm rounded text-white px-4 py-1.5 hover:opacity-90'>+ Create New</button>
            <Modal
                modalOpen={addressOpen}
                setModalOpen={setAddressOpen}
                title={'Create New Address'}
            >
                <AddressForm />
            </Modal>
        </div>
    );
};

export default CreateNewAddressClient;