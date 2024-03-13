'use client'
import React from 'react';

const DangerHtml = ({ getText, padding }) => {
    return (
        <div className={`${padding ? 'px-2 pt-2': ''}`} dangerouslySetInnerHTML={{ __html: getText }}>

        </div>
    );
};

export default DangerHtml;