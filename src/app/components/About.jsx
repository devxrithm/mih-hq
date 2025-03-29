import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <div className="h-[35rem] px-14 py-10 mx-10 bg-black text-white rounded-3xl relative -mt-14 ">
                <div className="flex justify-center items-center gap-5">
                    <h1 className={`${greatVibes.className} text-5xl text-center`}>About MIH </h1>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/128/16462/16462849.png"
                        height={50}
                        width={50}
                        alt='logo'
                    />
                </div>

                <div className="flex mt-10 gap-10">
                    <div className="w-[40%] border rounded-3xl flex justify-center items-center">
                        <Image
                            src="/weapon.png"
                            height={300}
                            width={300}
                            alt='logo'
                        />

                    </div>
                    <div className={`${greatVibes.className} w-[60%] text-xl`}>
                        <p>The Mind Installers Hackathon is back with its 3rd edition, bringing together some of the brightest tech minds from all over the country for an exciting competition!

                            The event kicks off with an online round on April 26-27, 2025, where 1,000-1,200 participants will compete in coding challenges, problem-solving tasks, and innovation-driven projects
                        </p>
                        <br />
                        <p>The Mind Installers Hackathon is back with its 3rd edition, bringing together some of the brightest tech minds from all over the country for an exciting competition!

                            The event kicks off with an online round on April 26-27, 2025, where 1,000-1,200 participants will compete in coding challenges, problem-solving tasks, and innovation-driven projects
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About