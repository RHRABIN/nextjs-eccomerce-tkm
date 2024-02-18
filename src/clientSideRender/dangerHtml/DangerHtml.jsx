'use client'
import React from 'react';

const DangerHtml = ({ getText, padding }) => {
    return (
        <div className={`${padding ? 'px-5': ''} text-sm`} dangerouslySetInnerHTML={{ __html: getText }}>

        </div>
    );
};

export default DangerHtml;