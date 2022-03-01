import React, { useState, useEffect } from "react";

import navtimer_titles from "../../assets/images/navtimer_titles.svg"
import "./NavTimer.scss"

const NavTimer = () => {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    useEffect(() => {
        const countdownDate = new Date("Mar 14, 2022 00:00:00").getTime();

        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeLeft = countdownDate - currentTime;

            const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

            setDays((daysLeft > 9 ? "" : "0") + daysLeft);
            setHours((hoursLeft > 9 ? "" : "0") + hoursLeft);
            setMinutes((minutesLeft > 9 ? "" : "0") + minutesLeft);
            setSeconds((secondsLeft > 9 ? "" : "0") + secondsLeft);

            if (timeLeft <= 0) {
                clearInterval(interval);
                setDays("00");
                setHours("00");
                setMinutes("00");
                setSeconds("00");
            }
        }, 1000);
    }, []);

    const colonBetweenTime = <div className="timer-item">
        <div className="timer-value">:</div>
    </div>

    return (
        <div className="timer__main-container">
            <div className="timer__titles-container">
                <img src={navtimer_titles} alt="timer-titles" className="timer-titles"/>
            </div>
            <div className="timer__inner-container">
                <div className="timer-items">
                <div className="timer-item first">
                    <div className="timer-value">{days}</div>
                </div>
                {colonBetweenTime}
                <div className="timer-item">
                    <div className="timer-value">{hours}</div>
                </div>
                {colonBetweenTime}
                <div className="timer-item">
                    <div className="timer-value">{minutes}</div>
                </div>
                {colonBetweenTime}
                <div className="timer-item last">
                    <div className="timer-value">{seconds}</div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default NavTimer;