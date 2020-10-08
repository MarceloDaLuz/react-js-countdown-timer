import React, { useState, useEffect } from 'react';

import { Message, Timer, Days, Months, Hours, Minutes, Seconds } from './styles';

import { getLastDay, year } from './container';

const Counter = () => {
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            let [months, days, hours, mins, secs] = getLastDay();
            setMonths(months);
            setDays(days);
            setHours(hours);
            setMinutes(mins);
            setSeconds(secs);
        }, 1000);
    });

    return (
        <>
            <Message>Good bye {year}!</Message>
            <Timer>
                <Months>
                    <span>{months}</span>
                    <span>Months</span>
                </Months>
                <Days>
                    <span>{days}</span>
                    <span>Days</span>
                </Days>
                <Hours>
                    <span>{hours}</span>
                    <span>Hours</span>
                </Hours>
                <Minutes>
                    <span>{minutes}</span>
                    <span>Minutes</span>
                </Minutes>
                <Seconds>
                    <span>{seconds}</span>
                    <span>Seconds</span>
                </Seconds>
            </Timer>
        </>
    );
};

export default Counter;