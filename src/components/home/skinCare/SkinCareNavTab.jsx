'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import wave from '../../../../public/assets/wave-border.svg'
import ProductCard from '@/components/card/ProductCard';

const SkinCareNavTab = () => {
    const [selectNav, setSelectNav] = useState('seller');
    return (
        <div>
            <div className='flex justify-center gap-6 mt-5 md:mt-10'>
                <button onClick={() => setSelectNav('seller')} className='uppercase text-sm group'>
                    <p className={selectNav === 'seller' ? 'text-primary mb-3' : 'mb-3 group-hover:text-primary'}>shop by best sellers</p>
                    <Image className={`w-full opacity-0 group-hover:opacity-100 ${selectNav === 'seller' && 'opacity-100'}`} height={500} width={1000} src={wave} />
                </button>


                <button onClick={() => setSelectNav('skin-type')} className='uppercase text-sm group'>
                    <p className={selectNav === 'skin-type' ? 'text-primary mb-3' : 'mb-3 group-hover:text-primary'}>Shop by Skin type</p>
                    <Image className={`w-full opacity-0 group-hover:opacity-100 ${selectNav === 'skin-type' && 'opacity-100'}`} height={500} width={1000} src={wave} />
                </button>


                <button onClick={() => setSelectNav('skin-concern')} className='uppercase text-sm group'>
                    <p className={selectNav === 'skin-concern' ? 'text-primary mb-3' : 'mb-3 group-hover:text-primary'}>Shop by skin concern</p>
                    <Image className={`w-full opacity-0 group-hover:opacity-100 ${selectNav === 'skin-concern' && 'opacity-100'}`} height={500} width={1000} src={wave} />
                </button>


                <button onClick={() => setSelectNav('routine')} className='uppercase text-sm group'>
                    <p className={selectNav === 'routine' ? 'text-primary mb-3' : 'mb-3 group-hover:text-primary'}>Shop by routine</p>
                    <Image className={`w-full opacity-0 group-hover:opacity-100 ${selectNav === 'routine' && 'opacity-100'}`} height={500} width={1000} src={wave} />
                </button>
            </div>

            {
                selectNav === 'seller' &&
                <div className='grid grid-cols-4 mt-10 gap-5'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            }
            {
                selectNav === 'skin-type' && <p>skin-type</p>
            }
            {
                selectNav === 'skin-concern' && <p>skin-concern</p>

            }
            {
                selectNav === 'routine' && <p>routine</p>
            }
        </div>
    );
};

export default SkinCareNavTab;