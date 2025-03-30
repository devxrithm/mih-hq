"use client"; // Use "use client" for client-side rendering in Next.js

import React, { useState, useEffect } from "react";
import { greatVibes, born2b } from '../../../styles/font'
import { useTimer } from 'react-timer-hook';

const Counter = ({ expiryTimestamp }) => {

    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 20 });

    return (
        <div className="relative mt-5">
            <div style={{ textAlign: 'center' }}>
                <div className={`${born2b.className} text-7xl text-white flex justify-center items-center gap-5`}>
                    <span className=" bg-[url(/bg-nav.avif)] bg-no-repeat bg-center bg-cover rounded-2xl text-center " style={{ filter: 'brightness(0.9)' }}>
                        <p className="backdrop-blur-sm rounded-2xl p-4 "> {days}</p>
                    </span>

                    <span className=" bg-[url(/bg-nav.avif)] bg-no-repeat bg-center bg-cover  rounded-2xl text-center " style={{ filter: 'brightness(0.9)' }}>
                        <p className="backdrop-blur-sm rounded-2xl p-4"> {hours}</p>
                    </span>
                    
                    <span className=" bg-[url(/bg-nav.avif)] bg-no-repeat bg-center bg-cover  rounded-2xl text-center " style={{ filter: 'brightness(0.9)' }}>
                        <p className="backdrop-blur-sm rounded-2xl p-4"> {minutes}</p>
                    </span>
                    
                    <span className=" bg-[url(/bg-nav.avif)] bg-no-repeat bg-center bg-cover  rounded-2xl text-center " style={{ filter: 'brightness(0.9)' }}>
                        <p className="backdrop-blur-sm rounded-2xl p-4"> {seconds}</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Counter;