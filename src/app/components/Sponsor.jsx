import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'

const Sponsor = () => {
    return (
        <>
            <div className={`${greatVibes.className} h-auto backdrop-blur-md mx-1 lg:mx-5 mt-5 lg:px-10 rounded-3xl `} id="version">
                <div className={`${greatVibes.className} pt-8 mx-0 lg:mx-52`}>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                        <div className="rotate-225 hidden lg:block">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                        <h1 className={`${born2b.className} text-6xl lg:text-8xl text-center text-white leading-20`}>Our Sponsor</h1>
                        <div className="rotate-45 hidden lg:block">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-10 lg:mt-20">

                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <Image
                                src="/par2.png"
                                height={350}
                                width={350}
                                alt="logo"
                                className="w-full h-full object-cover"
                            />
                            <div className={`${born2b.className} absolute inset-5 right-10 flex items-center justify-center text-center lg:bottom-5`}>
                                <Image
                                    src="/pw.png"
                                    height={250}
                                    width={250}
                                    alt='logo'
                                    className="w-40 h-auto lg:w-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center lg:bottom-10">
                        <div className="relative">
                            <Image
                                src="/par.jpg"
                                height={370}
                                width={370}
                                alt="logo"
                                className="w-96 lg:w-full lg:h-full object-cover"
                            />
                            <div className={`${born2b.className} absolute inset-5 right-10 flex items-center justify-center text-center bottom-5`}>
                                <Image
                                    src="/pw.png"
                                    height={250}
                                    width={250}
                                    alt='logo'
                                    className="w-40 h-auto lg:w-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <Image
                                src="/par2.png"
                                height={350}
                                width={350}
                                alt="logo"
                                className="w-full h-full object-cover"
                            />
                            <div className={`${born2b.className} absolute inset-5 right-10 flex items-center justify-center text-center bottom-5`}>
                                <Image
                                    src="/pw.png"
                                    height={250}
                                    width={250}
                                    alt='logo'
                                    className="w-40 h-auto lg:w-auto object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* ********refreshment************** */}

                <div className="">
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                src="/refreshment.jpg"
                                height={350}
                                width={350}
                                alt="logo"
                                className="w-64 h-auto lg:w-auto object-cover"
                            />
                            <div className={`${born2b.className} absolute inset-0 flex items-center justify-center text-center bottom-5`}>
                                <h1 className="text-xl lg:text-3xl drop-shadow-lg">Refreshment Partner</h1>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <Image
                                src="/par2.png"
                                height={350}
                                width={350}
                                alt="logo"
                                className="w-full h-full object-cover"
                            />
                            <div className={`${born2b.className} absolute inset-5 right-10 flex items-center justify-center text-center bottom-5`}>
                                <Image
                                    src="/pw.png"
                                    height={250}
                                    width={250}
                                    alt='logo'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsor