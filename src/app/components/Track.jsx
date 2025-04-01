import React from 'react'
import Image from 'next/image'
import { greatVibes, born2b } from '../../../styles/font'

const Track = () => {
    return (
        <>
            <div className="h-auto bg-[url(/cropbg.jpg)] bg-no-repeat bg-center bg-cover rounded-3xl mx-1 lg:mx-5 mt-5" id="track" >

                <div className=" flex lg:py-2 py-10 flex-col backdrop-blur-sm rounded-3xl h-auto">

                    <div className={`${greatVibes.className} text-5xl lg:mt-10`}>
                        <div className="flex justify-center items-center gap-10 ">
                            <div className="rotate-225 hidden lg:block ">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                    height={100}
                                    width={100}
                                    alt='logo'
                                />
                            </div>
                            <h1 className={`${greatVibes.className} text-6xl lg:text-8xl text-center text-white`}>Timeline </h1>
                            <div className="rotate-45 hidden lg:block ">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                    height={100}
                                    width={100}
                                    alt='logo'
                                />
                            </div>
                        </div>
                    </div>


                    <div className="flex lg:flex-row flex-col lg:py-2 py-5 justify-center items-center lg:mx-26 relative">

                        <div className="relative ">
                            <Image
                                src="/tracktime.jpg"
                                height={800}
                                width={800}
                                alt="logo"
                                className="w-80 lg:w-full h-full object-cover"
                            />
                            <div className={`${born2b.className} absolute inset-5 flex flex-col items-center justify-center text-center left-12`}>
                                <h1 className="text-5xl lg:text-6xl">Round 1</h1>
                                <p className="text-3xl lg:text-4xl">(Online)</p>
                                <p className="text-4xl lg:text-5xl">26 April</p>
                            </div>
                        </div>


                        <div className="flex flex-col justify-center items-center ">               
                                <Image
                                    src="/spartan.png"
                                    height={550}
                                    width={550}
                                    alt='logo'
                                    className="w-80 lg:w-full h-full object-cover"
                                />
                        </div>

                        <div className="relative">
                            <Image
                                src="/tracktime.jpg"
                                height={800}
                                width={800}
                                alt="logo"
                                className="w-80 lg:w-full h-full object-cover"
                            />
                            <div className={`${born2b.className} absolute inset-5 flex flex-col items-center justify-center text-center left-12`}>
                                <h1 className='text-5xl lg:text-6xl'>Finale</h1>
                                <p className="text-3xl lg:text-4xl ">(Offline)</p>
                                <p className="text-4xl lg:text-5xl">1 - 2 May</p>
                                <p className="text-xl lg:text-2xl">30 Hr Showdown</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Track