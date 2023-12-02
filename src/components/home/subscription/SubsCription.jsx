import React from 'react';

const SubsCription = () => {
    return (
        <div className="mt-10 py-8 bg-[#f2f1f1]">
            <div className='container mx-auto'>
                <h4 className="text-center text-secondary text-2xl font-semibold">Join the community</h4>
                <p className="text-center w-4/5 md:w-full mx-auto mt-4 font-[300]">Meet other Facetheorists, learn about product launches and get exclusive subscriber-only discounts.</p>
                <div className="text-center my-6 flex justify-center items-center">
                    <input className="border w-3/5 md:w-1/3 h-12 ps-5 rounded-s-md outline-none placeholder:text-secondary placeholder:text-xs" type="text" name="" placeholder="Enter your email address..." />
                    <input className="bg-secondary h-12 rounded-r-md px-5 cursor-pointer text-white" type="submit" name="" id="" value='Join' />
                </div>
            </div>
        </div>
    );
};

export default SubsCription;