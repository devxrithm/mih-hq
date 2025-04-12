import React from 'react'
import Image from 'next/image'
import { greatVibes, born2b } from '../../../styles/font'
import { motion } from "framer-motion"

const Track = () => {
    const timelineData = [
        {
            date: "",
            title: "Project Ppt. Submission",
            description: "Submit your project presentation using the provided template from the 'Download Attachments' section on Unstop. Convert from PDF to PPTX to start working.",
            time: "11:12 PM IST - 24 Apr 25, 12:00 AM IST",
            status: "Live",
            icon: "/spartan.png"
        },
        {
            date: "26 Apr 25",
            title: "Round 1 | Online Pitching",
            description: "Present your project in an Online Meet with mentors & organizing team. Selected teams will advance to the offline finale.",
            time: "10:00 AM IST - 05:00 PM IST",
            status: "Upcoming",
            icon: "/spartan.png"
        },
        {
            date: "1 May 25",
            title: "Round 2 | Offline Finale",
            description: "The ultimate 30-hour offline hackathon showdown! Bring your ideas to life and compete with the best minds from across the nation. 🏆",
            time: "10:00 AM IST - 02 May 25, 05:00 PM IST",
            status: "Final",
            icon: "/spartan.png"
        }
    ];
    return (
        <>
            <div className="h-auto bg-no-repeat bg-center bg-cover rounded-3xl mx-1 lg:mx-5 mt-5 w-full" id="schedule" >

                <div className=" flex lg:py-2 py-10 flex-col backdrop-blur-sm rounded-3xl h-auto ">

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
                    <div className="relative mt-10">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-red-600"></div>

                        {/* Timeline Items */}
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`mb-16 flex justify-center items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    }`}
                            >
                                <div className="w-5/12">
                                    <div className="glass-card p-6 rounded-lg">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Image
                                                src={item.icon}
                                                width={50}
                                                height={50}
                                                alt={item.title}
                                                className="animate-pulse"
                                            />
                                            <div>
                                                <span className={`${born2b.className} text-2xl text-orange-500`}>
                                                    {item.date}
                                                </span>
                                                <h2 className={`${born2b.className} text-3xl text-white`}>
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-4">{item.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-orange-500">{item.time}</span>
                                            <span className={`px-4 py-2 rounded-full ${item.status === "Live" ? "bg-green-500" :
                                                item.status === "Upcoming" ? "bg-blue-500" :
                                                    "bg-purple-500"
                                                }`}>
                                                {item.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <style jsx>{`
                .glass-card {
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 87, 34, 0.5);
                    box-shadow: 0 8px 32px 0 rgba(255, 87, 34, 0.2);
                }
                @keyframes flame {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                .animate-pulse {
                    animation: flame 2s infinite;
                }
            `}</style>

                </div>
            </div >

        </>
    )
}

export default Track