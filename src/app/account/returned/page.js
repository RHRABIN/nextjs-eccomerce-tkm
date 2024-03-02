'use client'
import OrdersCard from '@/components/account/orders/OrdersCard';
import { getAllOrdersByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';

const ReturnPage = () => {
    const [returnOrder, setReturnOrder] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllOrdersByEmail(user?.data?.user?.email, 'status=returned')
                if (res?.data) {
                    setReturnOrder(res?.data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [user?.data?.user?.email])
    
    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>View Return</h1>

            <div className='mt-4'>
                {returnOrder?.length > 0 ?
                    returnOrder?.map(product =>
                        <OrdersCard
                            key={product?._id}
                            product={product}
                        />

                    ) :
                    <p className='text-center'>No Return</p>
                }
            </div>
        </div>
    );
};

export default ReturnPage;