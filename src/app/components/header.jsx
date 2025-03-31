"use client"
import React, { version } from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Navbar from '../utils/Navbar'
import Counter from '../utils/Counter'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 2500000);

    return (
        <div className="relative h-[48rem]">
            {/* Background overlay */}
            {/* <div
                className="absolute inset-0 bg-[url(/cropbg.jpg)] bg-no-repeat bg-center bg-cover bg-fixed "
                style={{ filter: 'brightness(0.4)' }} // Adjust the brightness value as needed
            >
            </div> */}

            {/* ******Navbar********************* */}
            <Navbar />


            {/* *************MAIN TEXT HEADING*************** */}
            <div className="relative z-20 flex items-center justify-center flex-col text-white gap-8">
                <div className="flex">
                    <div className="rotate-237 relative top-20 hidden lg:block">
                        <Image
                            src="/weapon.png"
                            height={120}
                            width={120}
                            alt='logo'
                        />
                    </div>
                    <h1 className={`${born2b.className} drop-shadow-2xl  text-5xl lg:text-[9rem] leading-24 text-center font-bold mt-6`}>
                        MIND INSTALLERS <br />HACKATHON <span className='text-orange-500'>3.O</span>
                    </h1>
                    <div className="rotate-54 relative top-26 hidden lg:block">
                        <Image
                            src="/weapon.png"
                            height={120}
                            width={120}
                            alt='logo'
                        />
                    </div>
                </div>
                <h2 className={`${greatVibes.className} text-3xl`}> FORGE YOUR CODE. DEFEND YOUR GLORY!</h2>
            </div>

            {/* *********count*************** */}
            <Counter expiryTimestamp={time} />

            <div className="flex justify-center items-center text-2xl text-white relative mt-10 hover:scale-95">
                <button className={`${greatVibes.className} px-7 py-3 bg-orange-500 rounded-3xl`}>Register Now</button>
            </div>
        </div>
    )
}

export default Header

// rule
// past version
// our sponsor
// patron
// our team
// contact
// footer