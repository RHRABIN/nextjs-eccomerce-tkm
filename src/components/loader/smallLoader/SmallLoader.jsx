import React from 'react';
import './SmallLoader.css'
import { ImSpinner9 } from "react-icons/im";
const SmallLoader = () => {
    return (
        <div>
            <ImSpinner9 size={16} className="circle-loader" />
        </div>
    );
};

export default SmallLoader;