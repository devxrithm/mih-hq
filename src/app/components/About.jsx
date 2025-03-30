import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
import Box from '../utils/Box'

const About = () => {
    return (
        <>
            <div id="about" className="h-[40rem] px-14 py-12 mx-5 bg-transparent backdrop-blur-sm mb-10 text-white rounded-3xl ">
                <div className="flex justify-center items-center gap-5  ">
                    <Image
                        src="https://cdn-icons-png.flaticon.com/128/15621/15621476.png"
                        height={80}
                        width={80}
                        alt='logo'
                    />
                    <h1 className={`${greatVibes.className} text-8xl text-center`}>About <span className="text-orange-600">MIH</span> </h1>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/128/8583/8583878.png"
                        height={80}
                        width={80}
                        alt='logo'
                    />
                </div>

                <div className="flex justify-center items-center mt-5">
                    <h1 className={`${greatVibes.className} text-center text-3xl mx-14`}>The Mind Installers Hackathon is back with its 3rd edition, bringing together some of the brightest tech minds from all over the country for an exciting competition!</h1>
                </div>

                <div className="flex justify-center items-center gap-5 mt-10">
                    <Box
                        imgUrl="https://cdn-icons-png.flaticon.com/128/17379/17379046.png"
                        boxSec="36-Hour Coding Sprint"
                        desc="Immerse yourself in an intense coding experience from Feb 28-Mar 1, 2025"
                    />
                    <Box
                        imgUrl="https://cdn-icons-png.flaticon.com/128/923/923445.png"
                        boxSec="Team Building"
                        desc="Form teams of 1-4 members and collaborate to build innovative solutions"
                    />
                    <Box
                        imgUrl="https://cdn-icons-png.flaticon.com/128/10228/10228926.png"
                        boxSec="Innovation Focus"
                        desc="Work on cutting-edge technologies and solve real-world problems"
                    />
                    <Box
                        imgUrl="https://cdn-icons-png.flaticon.com/128/3112/3112946.png"
                        boxSec="Amazing Prizes"
                        desc="Win exciting prizes worth  ₹ 3,00,000 and gain recognition for your innovations"
                    />
                </div>


            </div>
        </>
    )
}

export default About