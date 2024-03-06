'use client'
import OrdersCard from '@/components/account/orders/OrdersCard';
import { getAllOrdersByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';

const OrdersPage = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user?.data?.user?.email) {
                    const res = await getAllOrdersByEmail(user?.data?.user?.email);
                    if (res) {
                        setProducts(res)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [user?.data?.user?.email])

    return (
        <div>
            <h1 className='text-xl text-gray-800 font-[500] pb-4 border-dotted border-b border-b-dark'>View Orders</h1>

            <div className='mt-4'>
                { products?.data?.length > 0 ?
                    products?.data?.map(product =>
                        <OrdersCard
                            key={product?._id}
                            product={product}
                        />
                    ) : 
                    <p className='text-center mt-5'>No Orders Found</p>
                }
            </div>
        </div>
    );
};

export default OrdersPage;