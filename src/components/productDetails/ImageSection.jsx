'use client'
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ImageSection = ({ imgSrc, imgAlt }) => {
    return (
        <div>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: imgAlt,
                    isFluidWidth: true,
                    src: imgSrc,
                },
                largeImage: {
                    src: imgSrc,
                    width: 1200,
                    height: 1800
                }
            }} />
        </div>
    );
};

export default ImageSection;