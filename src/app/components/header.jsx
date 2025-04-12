"use client"
import React, { useEffect, useState } from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Navbar from '../utils/Navbar'
import Counter from '../utils/Counter'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="relative h-auto">
            <Navbar />

            <div className="relative flex items-center justify-center flex-col text-white gap-5 pt-32">
                {/* <div className="">
                    <Image
                        src="/mainLogo.png"
                        height={250}
                        width={250}
                        alt='logo'
                    />
                </div> */}
                <div className="flex ">
                    <div className="rotate-237 relative top-20 hidden lg:block">
                        <Image
                            src="/weapon.png"
                            height={120}
                            width={120}
                            alt="logo"
                            style={{ width: "auto", height: "auto" }}
                            loading = 'lazy'
                        />
                    </div>
                    <h1 className={`${born2b.className} drop-shadow-2xl text-6xl lg:text-[9rem] leading-12 lg:leading-24 text-center font-bold mt-6`}>
                        MIND INSTALLERS <br />HACKATHON <span className="text-orange-500">3.O</span>
                    </h1>
                    <div className="rotate-54 relative top-20 hidden lg:block">
                        <Image
                            src="/weapon.png"
                            height={120}
                            width={120}
                            alt="logo"
                            style={{ width: "auto", height: "auto" }}
                            loading = 'lazy'
                        />
                    </div>
                </div>
                <h2 className={`${greatVibes.className} text-2xl lg:text-3xl text-center`}>
                    FORGE YOUR CODE. DEFEND YOUR GLORY!
                </h2>
            </div>

            <Counter />

            <div className="flex justify-center items-center text-2xl text-white relative mt-8 lg:mt-10 hover:scale-95">
                <Link href="https://unstop.com/hackathons/mind-installers-hackathon-3o-iimt-college-of-engineering-iimt-coe-greater-noida-1454209">
                    <button className={`${greatVibes.className} cursor-pointer transition px-7 py-3 bg-orange-500 rounded-3xl`}>Register Now</button>
                </Link>
            </div>

            <div className={`${born2b.className} mt-5 text-white`}>
                <p className="text-center text-xl">🚨 Registration deadline 23rd April 🚨 </p>
            </div>
        </div>
    );
};

export default Header;
