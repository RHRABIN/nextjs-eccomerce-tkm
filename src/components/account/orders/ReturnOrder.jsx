'use client'
import { orderCancelMutation } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import { Modal } from 'antd';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const ReturnOrder = ({ orderId, returnModal, setReturnModal }) => {
    const { user } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reason = e.target.reason.value;
        const description = e.target.description.value;
        const data = {
            orderId,
            email: user?.data?.user?.email,
            requestedFor: 'return',
            reason,
            description
        }


        try {
            setIsLoading(true)
            const res = await orderCancelMutation(data);
            if (res) {
                toast.success('Your Report has been submitted')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div>
            <Modal
                title="Return Order"
                centered
                open={returnModal}
                onCancel={() => setReturnModal(false)}
                footer={false}
            >
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <select className='rounded border outline-none p-2 w-full' name="reason" id="">
                        <option value="">Select Reason</option>
                        <option value="bad product">Bad Product</option>
                        <option value="duplicate product">Duplicate Product</option>
                        <option value="product doesn't match">Product doesn't match</option>
                    </select>
                    <label className='block font-semibold'>Tell us about your return</label>
                    <textarea className='rounded border w-full outline-none' name="description" id="" cols="55" rows="4"></textarea>

                    <div className='flex items-center justify-end'>
                        <button className='bg-secondary font-medium text-white rounded-md px-4 py-2 hover:bg-primary'>{isLoading ? 'Loading' : 'Submit'}</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ReturnOrder;