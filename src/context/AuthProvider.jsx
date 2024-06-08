'use client'
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [isCartSuccess, setIsCartSuccess] = useState(false);
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [addressOpen, setAddressOpen] = useState(false);
    const [addressSuccess, setAddressSuccess] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('auth')
        setLoginSuccess(!loginSuccess)

        window.location.reload()
    }

    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem('auth'));
        if (getUser) {
            setUser(getUser);
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [])


    const authInfo = {
        user,
        loading,
        isCartSuccess,
        setIsCartSuccess,
        loginSuccess,
        setLoginSuccess,
        deleteSuccess,
        setDeleteSuccess,
        addressOpen,
        setAddressOpen,
        addressSuccess,
        setAddressSuccess,
        checkoutSuccess,
        setCheckoutSuccess,
        openDrawer,
        setOpenDrawer,
        handleLogout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;