import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FiMinus } from "react-icons/fi";
import { IoIosStar } from 'react-icons/io';

const ProductDescription = () => {
    return (
        <div>
            <h1 className='uppercase text-xl'>AXIS-Y</h1>
            <h2 className='font-semibold text-2xl text-gray-800 mb-3'>Biome Radiating Intensified Essence 50ml</h2>

            <div className='flex items-center text-dark text-xl mb-3'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
            <span className='text-3xl font-semibold text-gray-800 flex items-start gap-2 mb-3 border-t border-dotted border-t-dark pt-3'>
                <p className='font-[auto]'>৳</p>
                <p>1900</p>
            </span>

            <div className='flex items-center gap-4'>
                <div className='w-2/5 border py-2 px-10 flex items-center'>
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
        </div>
    );
};

export default ProductDescription;