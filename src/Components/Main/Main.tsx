import React, { useState, useEffect } from "react";
// import calculateTimer from "../Helper/CalculateTimer"
import calculateTimer from "../../Helper/CalculateTimer";
import Controls from "../Contorls/Controls";

import "./Main.css";

const Main = () => {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
    const [IsDisabled, setIsDisabled] = useState<Array<number | string>>([]);

    useEffect(() => {
        let timeArray: Array<number | string> = calculateTimer(timeInSeconds);

        setTimerArray(timeArray);
    }, [timeInSeconds]);

    return (
        <main>
            <section className="title-section">
                <div className="title-section__block">
                    <p>h</p>
                    <div className="title-section__block-litle" >
                        <span>o</span>
                        <span>u</span>
                        <span>r</span>
                    </div>
                </div>
                <div className="title-section__block">
                    <p>m</p>
                    <div className="title-section__block-litle" >
                        <span>i</span>
                        <span>n.</span>
                        {/* <span>r</span> */}
                    </div>
                </div>
                <div className="title-section__block">
                    <p>s</p>
                    <div className="title-section__block-litle" >
                        <span></span>
                        <span>e</span>
                        <span>s.</span>
                        {/* <span>r</span> */}
                    </div>
                </div>
            </section>
            <section className="timer-section">
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
