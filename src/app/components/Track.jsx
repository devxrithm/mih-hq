import React from 'react'
import Image from 'next/image'
import { greatVibes, born2b } from '../../../styles/font'

const Track = () => {
    return (
        <>
            <div className="h-[40rem]" id="track" >

                {/* <div
                    className="absolute inset-0 bg-[url(/secbg.jpg)] bg-no-repeat bg-center bg-cover "
                    style={{ filter: 'brightness(0.2)' }} // Adjust the brightness value as needed
                >
                </div> */}
                <div className=" flex items-center justify-center flex-col gap-8">
                    <div className={`${greatVibes.className} text-5xl pt-14 relative`}>
                        <div className="flex justify-center items-center gap-5 ">
                            <div className="rotate-280">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                    height={100}
                                    width={100}
                                    alt='logo'
                                />
                            </div>
                            <h1 className={`${greatVibes.className} text-8xl text-center text-white`}>Timeline </h1>
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div className="relative">
                            <Image
                                src="/track.jpg"
                                height={420}
                                width={420}
                                alt='logo'
                            />
                            <div className={`${born2b.className} absolute top-30 left-32 text-center `}>
                                <h1 className='text-6xl'>Round 1</h1>
                                <p className="text-4xl ">(Online)</p>
                                <p className="text-5xl">26 April</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="relative">
                                <Image
                                    src="/track2.png"
                                    height={350}
                                    width={350}
                                    alt='logo'
                                />
                                <div className={`${born2b.className} absolute top-10 left-26 text-center `}>
                                    <h1 className='text-6xl'>Round 2</h1>
                                    <p className="text-4xl ">(Online)</p>
                                    <p className="text-5xl">27 April</p>
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    src="/scanqr.png"
                                    height={300}
                                    width={300}
                                    alt='logo'
                                />
                                <div className={`${born2b.className} absolute top-10 left-20 text-center flex flex-col justify-center items-center`}>
                                    <Image
                                        src="/1000.png"
                                        height={90}
                                        width={90}
                                        alt='logo'
                                    />
                                    <h1 className='text-2xl'>Scan To Register</h1>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src="/track.jpg"
                                height={420}
                                width={420}
                                alt='logo'
                            />
                            <div className={`${born2b.className} absolute top-30 left-32 text-center `}>
                                <h1 className='text-6xl'>Finale</h1>
                                <p className="text-4xl ">(Offline)</p>
                                <p className="text-5xl">1 - 2 May</p>
                                <p className="text-2xl">30 Hr Showdown</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Track