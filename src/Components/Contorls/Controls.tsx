import React, { useState } from "react";

import './Controls.css'

type Props = {
    setTimeInSeconds: Function;
};

const Controls = (props: Props) => {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0)
    const [IsDisabled, setIsDisabled] = useState<boolean>(true);

    const handlePlayButton = () => {
 console.log('handlePlayButton')

        let interval:any = setInterval(()=>{
            setTimeInSeconds((prevState:number|string) => +prevState + 1 )
        }, 1000)

        setIntervalId(interval)
        setIsDisabled(false)
    }
    
    const handleStopButton = () => {
        clearInterval(intervalId)
        setIsDisabled(true)
    }
    
    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0)
        setIsDisabled(true)
    }

    return (
        <section>
            <ul>
                <li className="list-item" onClick={ IsDisabled ? handlePlayButton : undefined} >
                    <a href="#" className="round green">
                        Play
                        <span className="round">                        
                            {/* That is, if you already have an account. */}
                        </span>
                    </a>
                </li>
                <li className="list-item" onClick={handleStopButton} >
                    <a href="#" className="round red">
                        Stop
                        <span className="round">
                            {/* But only if you really, really want to.{" "} */}
                        </span>
                    </a>
                </li>
                <li className="list-item" onClick={handleResetButton} >
                    <a href="#" className="round yellow">
                        Reset
                        <span className="round">
                            {/* Take a look. This product is totally rad! */}
                        </span>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Controls;
