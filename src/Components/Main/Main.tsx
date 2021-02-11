import React, { useState } from 'react';

import './Main.css'

const Main = () => {
    const [setTimeInSeconds, setSetTimeInSeconds] = useState<number>(0)
    return (
        <section className="main-section" >
            <p className='timer-text' >00</p>
            <span>:</span>
            <p className='timer-text' >00</p>
            <span>:</span>
            <p className='timer-text' >00</p>
        </section>
    )
}

export default Main
