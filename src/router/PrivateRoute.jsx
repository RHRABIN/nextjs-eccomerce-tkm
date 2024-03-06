'use client'
import { AuthContext } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    if (loading) {
        return (
            <h1></h1>
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