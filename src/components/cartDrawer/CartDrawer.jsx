'use client'
import React, { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import Drawer from '../drawer/Drawer';
import ChekoutProductCard from '../card/ChekoutProductCard';
import Link from 'next/link';
import { getAddToCartDataByEmail } from '@/config/addCartToapi';
import { AuthContext } from '@/context/AuthProvider';

const CartDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [cartData, setCartData] = useState();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const cartMutation = async () => {
            const cart = await getAddToCartDataByEmail(user?.data?.user?.email);
            setCartData(cart?.data?.data)
        }

        cartMutation();
    }, [])

    return (
        <div>
            <button onClick={() => setOpenDrawer(true)} className="relative">
                <BsBag />
                <span className="absolute bottom-2 left-2 bg-red-500 h-5 w-5 rounded-full text-white flex justify-center items-center"><small>0</small></span>
            </button>
            <Drawer
                title={'Your Bag'}
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            >
                <div className="relative w-full h-full">

                    {
                        cartData?.cartData?.products?.map(product =>

                            <ChekoutProductCard
                                key={product?._id}
                                product={product?.product} />
                        )
                    }
                    <div className="absolute bottom-20 w-full">
                        <Link href='/checkout' className="bg-secondary text-white text-lg p-2 w-full block text-center font-medium rounded hover:opacity-90">Place Order</Link>
                        <Link href='/' className="text-gray-800 text-lg font-medium mt-4 hover:text-black text-center block">Continue Shopping</Link>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default CartDrawer;