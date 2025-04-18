import React from 'react'
import Image from 'next/image'
import { greatVibes, born2b } from '../../../styles/font'
import { motion } from "framer-motion"

const Track = () => {

    return (
        <>
            <div id="schedule" className={`${greatVibes.className} h-auto backdrop-blur-md mx-2 lg:mx-5 mt-5 px-1 lg:px-10 rounded-3xl py-8 text-white`}>
                <div className=" flex lg:py-2 py-10 flex-col backdrop-blur-sm rounded-3xl h-auto ">

                    <div className={`${greatVibes.className} text-5xl lg:mt-10`}>
                        <div className="flex justify-center items-center gap-10 ">
                            <div className="rotate-225 hidden lg:block ">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                    height={100}
                                    width={100}
                                    alt='logo'
                                    loading='lazy'
                                />
                            </div>
                            <h1 className={`${greatVibes.className} text-6xl lg:text-8xl text-center text-white`}>Timeline </h1>
                            <div className="rotate-45 hidden lg:block ">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                    height={100}
                                    width={100}
                                    alt='logo'
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>


                    {/* <div className="flex lg:flex-row flex-col lg:py-2 py-5 justify-center items-center lg:mx-26 relative">

                        <div className="relative ">
                            <Image
                                src="/tracktime.jpg"
                                height={800}
                                width={800}
                                alt="logo"
                                className="w-80 lg:w-full h-full object-cover"
                            />
                            <div className={`${born2b.className} text-black absolute inset-5 flex flex-col items-center justify-center text-center left-12`}>
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
                                height={850}
                                width={850}
                                alt="logo"
                                className="w-96 lg:w-full h-full object-cover"
                            />
                            <div className={`${born2b.className} text-black absolute inset-5 flex flex-col items-center justify-center text-center left-12`}>
                                <h1 className='text-5xl lg:text-6xl'>Finale</h1>
                                <p className="text-3xl lg:text-4xl ">(Offline)</p>
                                <p className="text-4xl lg:text-5xl">1 - 2 May</p>
                                <p className="text-xl lg:text-2xl">30 Hr Showdown</p>
                            </div>
                        </div>

                    </div> */}

                    <ul className={`${greatVibes.className} timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white mt-10`}>
                        <li>
                            <div className="timeline-middle text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5 text-white">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-5 md:text-end border p-5 max-w-[100%] lg:max-w-[80%]  rounded-3xl">
                                <time className={`font-mono ${born2b.className} text-2xl text-orange-500`}>10th April 25</time>
                                <div className="text-xl">Project Ppt. Submission</div>
                                <p className="text-xl"> Submit your project presentation using the provided template from the 'Download Attachments' section on Unstop. Convert from PDF to PPTX to start working.</p>
                               
                                <div className=" p-3  flex justify-end">

                                    <p className="px-6 py-2 rounded-xl bg-orange-500 flex gap-4 text-xl justify-center items-center">
                                        <Image
                                            src="https://cdn-icons-png.flaticon.com/128/3049/3049365.png"
                                            width={20}
                                            height={20}
                                            alt='live'
                                            className='rounded'
                                        />
                                        Live</p>
                                </div>
                            </div>
                            <hr className='bg-orange-500' />
                        </li>

                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end mb-5 md:mb-10 border p-3 max-w-[100%] lg:max-w-[80%]  rounded-3xl">
                                <time className={`font-mono ${born2b.className} text-2xl text-orange-500`}>26th Apr 25</time>
                                <div className="text-xl">Round 1 | Online Pitching</div>
                                <p className="text-xl">Present your project in an Online Meet with mentors & organizing team. Selected teams will advance to the offline finale.</p>
                                
                            </div>
                            <hr className='bg-orange-500' />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end  border p-5 max-w-[100%] lg:max-w-[80%] rounded-3xl">
                                <time className={`font-mono ${born2b.className} text-2xl text-orange-500`}>1st May 25</time>
                                <div className="text-2xl">Grand Finale</div>
                                <p className="text-xl">The ultimate 30-hour offline hackathon showdown! Bring your ideas to life and compete with the best minds from across the nation. 🏆</p>
                                
                            </div>
                            <hr className='bg-orange-500' />
                        </li>



                    </ul>
                </div>
            </div>

        </>
    )
}

export default Track