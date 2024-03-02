'use client'
import OrdersCard from '@/components/account/orders/OrdersCard';
import { getAllOrdersByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';

const CancelPage = () => {
    const [cancelProduct, setCancelProduct] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllOrdersByEmail(user?.data?.user?.email, 'status=cancelled')
                if (res?.data) {
                    setCancelProduct(res?.data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [user?.data?.user?.email])

    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>View Cancel</h1>

            <div className='mt-4'>
                {cancelProduct?.length > 0 ?
                    cancelProduct?.map(product =>
                        <OrdersCard
                            key={product?._id}
                            product={product}
                        />

                    ) : 
                    <p>No Cancellations</p>
                }
            </div>
        </div>

    );
};

export default CancelPage;