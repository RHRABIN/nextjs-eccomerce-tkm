import React, { useEffect, useState } from 'react';


const TihrtyMinuteCount = ({ isThirtyCount, setIsThirtyCount }) => {
    const [timeInSecs, setTimeInSecs] = useState(null);

    useEffect(() => {
        const fetchLoaclData = async () => {
            const isExit = JSON.parse(localStorage.getItem('otp')) || [];
            if (isExit?.length >= 3) {
                setIsThirtyCount(true)
            }
            const milliseconds = isExit?.[0];
            const currentTime = new Date().getTime();
            const difference = currentTime - milliseconds;
            const minutes = Math.floor(difference / (1000 * 60));
            const countTime = 30 - minutes;
            setTimeInSecs(countTime);
        }
        fetchLoaclData();

        if (timeInSecs === 0) {
            localStorage.removeItem('otp');
            setIsThirtyCount(false)
        }
    }, [timeInSecs])

    return (
        <div>
            {
                isThirtyCount && <p className='text-sm text-center font-medium mb-4'>
                    You've tried to signup too many times. Try again
                    <span className='text-primary'> {(timeInSecs)}</span>
                    <span className='text-xs'> mins later</span>
                </p>
            }
        </div>
    );
};

export default TihrtyMinuteCount;