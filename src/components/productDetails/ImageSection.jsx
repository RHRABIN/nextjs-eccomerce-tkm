'use client'
import React from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import thumbnail from 'lightgallery/plugins/thumbnail';

const ImageSection = ({ images, imgAlt }) => {
    return (
        <div className='h-[360px] md:h-[370px] overflow-hidden'>
            <LightGallery
                // onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, thumbnail]}
            >
                {
                    images.map(url=> <a key={url} href={url}>
                    <img alt="img1" className='h-[360px] md:h-[370px]' src={url} />
                </a>)
                }
            </LightGallery>
        </div>
    );
};

export default ImageSection;