'use client'
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ImageSection = ({ imgSrc }) => {
    return (
        <div>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: imgSrc
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