import AccordionClient from '@/clientSideRender/accordion/AccordionClient';
import React from 'react';
import { FaFacebookF, FaHeart, FaInstagram, FaPlus, FaYoutube } from 'react-icons/fa6';
import { FiMinus } from "react-icons/fi";
import { IoIosStar } from 'react-icons/io';

const ProductDescription = ({ product }) => {
    const { name, manufacturer, tags, price, offerPrice, description, directions, ingredients } = product || {};

    return (
        <div>
            <h1 className='uppercase text-xl'>{manufacturer?.name}</h1>
            <h2 className='font-semibold text-2xl text-gray-800 mb-3'>{name}</h2>

            <div className='flex items-center text-dark text-xl mb-3'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
            <span className='text-3xl font-semibold text-gray-800 flex items-start gap-2 mb-3 border-t border-dotted border-t-dark pt-3'>
                <p className='font-[auto]'>৳</p>
                <p>{offerPrice ? offerPrice : price}</p>
            </span>

            <div className='flex items-center gap-4'>
                <div className='w-2/5 border py-2 px-4 md:px-10 flex items-center'>
                    <p className='w-2/5'>1</p>
                    <div className='w-3/5 flex justify-between'>
                        <button className='bg-gray-200 p-1 rounded-full' type='button'>
                            <FiMinus />
                        </button>
                        <button className='bg-gray-200 p-1 rounded-full' type='button'>
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div className='w-3/5'>
                    <button className='bg-black text-white w-full py-2 tracking-widest'>Add to Bag</button>
                </div>
            </div>

            <div className='flex items-center gap-3 mt-3'>
                <FaYoutube className='border border-gray-300 p-2 rounded-full text-dark text-4xl cursor-pointer hover:bg-[#CD201F] hover:text-white' />
                <FaFacebookF className='border border-gray-300 p-2 rounded-full text-dark text-4xl cursor-pointer hover:bg-[#1877F2] hover:text-white' />
                <FaInstagram className='border border-gray-300 p-2 rounded-full text-dark text-4xl cursor-pointer hover:bg-gradient-to-br from-[#f9ce34]
                via-[#ee2a7b] to-[#6228d7] hover:text-white' />
                <FaHeart className='border border-gray-300 p-2 rounded-full text-dark text-4xl cursor-pointer hover:bg-orange-500 hover:text-white' />
            </div>

            <div className='flex flex-wrap gap-2 mt-5'>
                {
                    tags?.map((tag, idx) =>
                        <span key={idx} className='bg-[rgb(245,245,245)] text-gray-800 py-0.5 px-1 text-xs'>{tag}</span>
                    )
                }
            </div>

            <div className='mt-5'>
                <h3 className='text-gray-800 mb-2 font-semibold text-xl'>Ay&Me, A Microbiome Project</h3>
                <p className='font-[300] tracking-wide leading-7'>Ay&Me is Axis-Y's Biome line with a signature blend of five different prebiotics and probiotics to improve the skin's complexion and health by strengthening the skin barrier function and maintaining oil-sebum balance. Formulated free from exfoliants or traditionally sensitizing extracts, the line's biome blend focuses on protecting the skin from external aggressors.</p>
            </div>

            <div className='mt-10'>
                <AccordionClient title={'Activities'}>
                    <p className='p-2 text-gray-800 font-[300] leading-8 text-sm' dangerouslySetInnerHTML={{ __html: description }}></p>
                </AccordionClient>
                <AccordionClient title={'Directions'}>
                    <p className='p-2 text-gray-800 font-[300] leading-8 text-sm' dangerouslySetInnerHTML={{ __html: directions }}></p>
                </AccordionClient>
                <AccordionClient title={'Ingredients'}>
                    <p className='p-2 text-gray-800 font-[300] leading-8 text-sm' dangerouslySetInnerHTML={{ __html: ingredients }}></p>
                </AccordionClient>
                <AccordionClient title={'Shipping'}>
                    <p className='p-2 text-gray-800 font-[300] leading-8 text-sm'>
                        Houttuynia Cordata Extract(77%), Water, 1,2-Hexanediol, Glycerin, Betaine, Panthenol, Saccharum Officinarum (Sugar Cane) Extract, Portulaca Oleracea Extract, Butylene Glycol, Vitex Agnus-Castus Extract, Chamomilla Recutita (Matricaria) Flower Extract, Arctium Lappa Root Extract, Phellinus Linteus Extract, Vitis Vinifera (Grape) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Centella Asiatica Extract, Isopentyldiol, Methylpropanediol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Tromethamine, Disodium EDTA
                    </p>
                </AccordionClient>
            </div>
        </div>
    );
};

export default ProductDescription;