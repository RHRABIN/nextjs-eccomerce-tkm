'use client'
import React from 'react';
import Countdown from 'react-countdown';

const OfferCountDown = ({ timeStamps }) => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (!completed) {
            return (
                <div className="bg-[hsla(0,0%,80%,.4)] md:w-3/5 mx-auto rounded-sm border border-[#ccc]">
                    <div className="flex justify-center">
                        <div className="border-[#ccc]">
                            <p className="text-xs text-center mx-2">{days}</p>
                            <p className="text-xs text-center mx-2">
                                {days > 1 ? 'Days' : 'Day'}
                            </p>
                        </div>
                        <div className="border-l border-[#ccc]">
                            <p className="text-xs text-center mx-2">{hours}</p>
                            <p className="text-xs text-center mx-2">
                                {hours > 1 ? 'Hrs' : 'Hour'}
                            </p>
                        </div>
                        <div className="border-l border-[#ccc]">
                            <p className="text-xs text-center mx-2">{minutes}</p>
                            <p className="text-xs text-center mx-2">Min</p>
                        </div>
                        <div className="border-l border-[#ccc]">
                            <p className="text-xs text-center mx-2">{seconds}</p>
                            <p className="text-xs text-center mx-2">Sec</p>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <Countdown date={timeStamps} renderer={renderer} />
    );
};

export default OfferCountDown;
