import React, { useState, useEffect } from "react";
// import calculateTimer from "../Helper/CalculateTimer"
import calculateTimer from "../../Helper/CalculateTimer";
import Controls from "../Contorls/Controls";

import "./Main.css";

const Main = () => {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

    useEffect(() => {
        let timeArray: Array<number | string> = calculateTimer(timeInSeconds);

        setTimerArray(timeArray);
    }, [timeInSeconds]);

    return (
        <main>
            <section className="main-section">
                <p className="timer-text">{timerArray[0]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[1]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[2]}</p>
            </section>
            <Controls setTimeInSeconds={setTimeInSeconds} />
        </main>
    );
};

export default Main;
