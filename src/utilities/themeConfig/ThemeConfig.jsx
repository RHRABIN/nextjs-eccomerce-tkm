'use client'
import React, { useEffect } from 'react';

const ThemeConfig = () => {

    useEffect(() => {
        document.documentElement.style.setProperty("--primary-color", "")
        document.documentElement.style.setProperty("--secondary-color", "")
    }, [])
    
    return (
        <div>

        </div>
    );
};

export default ThemeConfig;