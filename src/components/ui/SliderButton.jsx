import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import './SliderButton.css';

export const ArrowLeft = ({ onClick }) => (
    <button
        className="p-2 h-10 w-10 flex items-center justify-center custom-arrow custom-arrow-left"
        onClick={onClick}
    >
        <FaArrowLeftLong />
    </button>
);

export const ArrowRight = ({ onClick }) => (
    <button
        className="p-2 h-10 w-10 flex items-center justify-center custom-arrow custom-arrow-right"
        onClick={onClick}
    >
        <FaArrowRightLong />
    </button>
);
