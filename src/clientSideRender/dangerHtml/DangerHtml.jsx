'use client'
import React from 'react';

const DangerHtml = ({ getText }) => {
    return (
        <div className='px-5' dangerouslySetInnerHTML={{ __html: getText }}>

        </div>
    );
};

export default DangerHtml;