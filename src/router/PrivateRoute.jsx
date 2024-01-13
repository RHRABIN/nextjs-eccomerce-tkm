'use client'
import { AuthContext } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen w-full'>
                <h1>Loading...</h1>
            </div>
        )
    }
    useEffect(() => {
        if (!user?.data?.user?.email) {
            router.push('/login')
        }
    }, [user?.data?.user?.email])

    return (
        <div>
            {children}
        </div>
    )
};

export default PrivateRoute;