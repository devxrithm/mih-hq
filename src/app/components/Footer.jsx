import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className={`${greatVibes.className} pb-5 h-[25rem] mx-5 text-white bg-black rounded-3xl flex flex-col items-center justify-center `}>
                <div className="flex justify-evenly pt-14">
                    <div className={`max-w-[25%] ${born2b.className} flex flex-col justify-center items-center`}>
                        <div>
                            <Image
                                src="/mainLogo.png"
                                height={200}
                                width={200}
                                alt='logo'
                            />
                        </div>
                        <h1 className="text-white text-5xl text-center">MIND INSTALLERS HACKATHON 3.0</h1>
                    </div>
                    <div className={`max-w-[25%]`}>
                        <div>
                            <h1 className="text-3xl text-gray-400">Quick Links</h1>
                        </div>
                        <ul className="">
                            <li>FAQs</li>
                            <li>Timeline</li>
                            <li>Themes</li>
                            <li>Contact Us</li>
                            <li>Sponsor</li>
                        </ul>
                    </div>
                    <div className={`max-w-[25%]`}>
                        <div>
                            <h1 className="text-3xl text-gray-400">Contact Us</h1>
                        </div>
                        <div className={`${born2b.className} text-2xl `}>
                            <div className="flex items-center gap-3 ">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/4213/4213179.png"
                                    height={25}
                                    width={25}
                                    alt='logo'
                                />
                                <p className="">+91 8059487235</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png"
                                    height={25}
                                    width={25}
                                    alt='logo'
                                />
                                <p className="">iimthackathon_gn@iimtindia.net</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/9800/9800512.png"
                                    height={25}
                                    width={25}
                                    alt='logo'
                                />
                                <p className="">Greater Noida, India</p>
                            </div>
                        </div>
                    </div>

                    <div className={`max-w-[25%] `}>
                        <div>
                            <h1 className="text-3xl text-gray-400">Connect With Us</h1>
                        </div>
                        <div className={`${born2b.className} text-2xl flex items-center gap-5 mt-5`}>

                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                                height={50}
                                width={50}
                                alt='logo'
                            />

                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
                                height={50}
                                width={50}
                                alt='logo'
                            />
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2504/2504957.png"
                                height={50}
                                width={50}
                                alt='logo'
                            />

                        </div>
                    </div>
                </div>
                <div className="px-10 w-[100%] mx-10 ">
                    <div className="flex border-t-2 border-t-gray-400  justify-between gap-5 items-center mt-5 p-5">
                        <div className="">
                            <p className={`${born2b.className} text-2xl`}>© 2025 MIH 3.0 | All rights reserved.</p>
                        </div>
                        <div className="">
                            <p className={`${born2b.className} text-2xl`}>Design & Develop By @devrithm</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer