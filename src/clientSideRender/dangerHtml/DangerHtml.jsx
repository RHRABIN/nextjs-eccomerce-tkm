'use client'
import React from 'react';

const DangerHtml = ({ getText }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: getText }}>

        </div>
    );
};

export default DangerHtml;