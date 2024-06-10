import Link from 'next/link';
import React from 'react';

const ProductDetailsPage = async ({ params }) => {

    return (
        <div className='container text-center px-4 my-20 text-xl mx-auto' >
            <h2 className='text-[#33c24d]'>
                Your Order is placed successfull ! Thanks for stay with <span className='font-bold'>The Korean Mall</span>
                <br />
                Your Order No is: {params.orderId}
            </h2>
            <p className='text-sm my-4 text-[#333]'>In case of defective products, The Korean Mall offers happy return facility. <br />Report the product problem within 7 days and get fresh product or refund from The Korean Mall. Visit our <Link href='/terms-and-conditions' className='text-primary'>Return policy</Link> for details.</p>
        </div>
    );
};

export default ProductDetailsPage;