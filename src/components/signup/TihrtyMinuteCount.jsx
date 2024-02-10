import React, { useEffect, useState } from 'react';


const TihrtyMinuteCount = ({ isThirtyCount, setIsThirtyCount }) => {
    const [timeInSecs, setTimeInSecs] = useState(0);

    let ticker;

    useEffect(() => {
        if (isThirtyCount) {
            startTimer(30 * 60); // 5 minutes in seconds
        } else {
            clearInterval(ticker);
        }

        return () => clearInterval(ticker);
    }, [isThirtyCount]);

    function startTimer(secs) {
        // setTimeInSecs(secs);
        localStorage.setItem('otp-time', JSON.stringify(secs));
        const isExitOtp = JSON.parse(localStorage.getItem('otp-time'));
        setTimeInSecs(isExitOtp)
        ticker = setInterval(tick, 1000);
    }

    function tick() {
        setTimeInSecs((prevSecs) => {
            if (prevSecs > 0) {
                return prevSecs - 1;
            } else {
                clearInterval(ticker);
                setIsThirtyCount(false);
                return 0;
            }
        });
    }

    function formatTime(secs) {
        const mins = Math.floor(secs / 60);
        const remainderSecs = secs % 60;
        const pretty = `${mins < 10 ? '0' : ''}${mins}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
        return pretty;
    }



    useEffect(() => {
        const fetchLoaclData = async () => {
            const isExit = JSON.parse(localStorage.getItem('otp')) || [];
            if (isExit?.length >= 3) {
                setIsThirtyCount(true)
            }
        }
        fetchLoaclData();

        if (timeInSecs === 1) {
            setIsThirtyCount(false);
            localStorage.removeItem('otp');
        }
    }, [timeInSecs])

    return (
        <div>
            {
                isThirtyCount && <p className='text-sm text-center font-medium mb-4'>
                    You've tried to signup too many times. Try again
                    <span className='text-primary'> {formatTime(timeInSecs)}</span>
                    <span className='text-xs'> {timeInSecs <= 59 ? 'sec' : 'mins'} later</span>
                </p>
            }
        </div>
    );
};

export default TihrtyMinuteCount;