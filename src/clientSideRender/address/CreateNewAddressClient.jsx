'use client'
import AddressForm from '@/components/account/address/AddressForm';
import { AuthContext } from '@/context/AuthProvider';
import { Modal } from 'antd';
import React, { useContext } from 'react';

const CreateNewAddressClient = () => {
    const { addressOpen, setAddressOpen } = useContext(AuthContext);
    return (

        <div>
            <button onClick={() => setAddressOpen(true)} className='bg-secondary text-sm rounded text-white px-4 py-1.5 hover:opacity-90'>+ Create New</button>
            <Modal
                title={'Create New Address'}
                centered
                open={addressOpen}
                onCancel={() => setAddressOpen(false)}
                footer={false}
            >
                <AddressForm />
            </Modal>
        </div>
    );
};

export default CreateNewAddressClient;