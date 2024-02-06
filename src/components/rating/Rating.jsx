import React from 'react';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';

const Rating = ({ rate }) => {
    return (
        <div className='flex items-center gap-1'>
            {
                (rate >= 0.1 && rate <= 0.9) ? <IoIosStarHalf className={(rate >= 0.1 && rate <= 0.9) ? 'text-yellow-400 text-xl' : 'text-dark'} /> : <IoIosStar className={(rate >= 1) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} />
            }
            {
                (rate >= 1.1 && rate <= 1.9) ? <IoIosStarHalf className={(rate >= 1.1 && rate <= 1.9) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} /> : <IoIosStar className={(rate >= 2) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} />
            }
            {
                (rate >= 2.1 && rate <= 2.9) ? <IoIosStarHalf className={(rate >= 2.1 && rate <= 2.9) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} /> : <IoIosStar className={(rate >= 3) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} />
            }
            {
                (rate >= 3.1 && rate <= 3.9) ? <IoIosStarHalf className={(rate >= 3.1 && rate <= 3.9) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} /> : <IoIosStar className={(rate >= 4) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} />
            }
            {
                (rate >= 4.1 && rate <= 4.9) ? <IoIosStarHalf className={(rate >= 4.1 && rate <= 4.9) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} /> : <IoIosStar className={(rate >= 5) ? 'text-yellow-400 text-xl' : 'text-dark text-xl'} />
            }
        </div>
    );
};

export default Rating;