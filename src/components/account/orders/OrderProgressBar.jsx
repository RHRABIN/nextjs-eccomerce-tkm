'use client'
import React, { useState } from 'react';
import './OrderProgressBar.css'

const OrderProgressBar = () => {
    const [status, setStatus] = useState('picked by courier')
    return (
        <div>
            <ul className="progressbar">
                <li className={`${status === 'pending' || status === 'processing' || status === 'picked by courier' || status === 'delivered' ? 'active' : ''} 
                        mb-8 text-xs md:text-sm`}>Pending</li>
                <li className={`${status === 'processing' || status === 'picked by courier' || status === 'delivered' ? 'active' : ''} mb-8 text-xs md:text-sm`}>Processing</li>
                <li className={`${status === 'picked by courier' || status === 'delivered' ? 'active' : ''} mb-8 text-xs md:text-sm`}>Shipped</li>
                <li className={`${status === 'delivered' ? 'active' : ''} mb-8 text-xs md:text-sm`}>Delivered</li>
            </ul>
        </div>
    );
};

export default OrderProgressBar;