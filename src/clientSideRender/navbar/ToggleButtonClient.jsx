'use client'
import MobileNav from '@/shared/mobileNav/MobileNav';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

const ToggleButtonClient = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <button onClick={() => setToggle(!toggle)} className="lg:hidden">
                <FaBars />
            </button>
            {
                toggle ? <MobileNav /> : ''
            }
        </div>
    );
};

export default ToggleButtonClient;