import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'

const Sponsor = () => {
    return (
        <>
            <div className={`${greatVibes.className} h-[63rem] backdrop-blur-md mx-5 mt-5 px-10 rounded-3xl `} id="version">
                <div className={`${greatVibes.className} pt-8 mx-52 `}>
                    <div className="flex justify-center items-center gap-10">
                        <div className="rotate-225 ">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                        <h1 className={`${born2b.className} text-8xl text-center text-white leading-20`}>Our Sponsor</h1>
                        <div className="rotate-45 ">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-0 mt-20">

                    <div className="relative flex justify-center items-center">
                        <Image
                            src="/par2.png"
                            height={500}
                            width={500}
                            alt='logo'
                        />
                        <div className={`${born2b.className} absolute -top-10 left-8 text-center `}>
                            <Image
                                src="/pw.png"
                                height={300}
                                width={300}
                                alt='logo'
                            />
                            {/* <h1 className='text-6xl'>Round 1</h1>
                            <p className="text-4xl ">(Online)</p>
                            <p className="text-5xl">26 April</p> */}
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center bottom-10">
                        <Image
                            src="/par.jpg"
                            height={620}
                            width={620}
                            alt='logo'
                        />
                        <div className={`${born2b.className} absolute -top-10 left-[4.5rem] text-center `}>
                            <Image
                                src="/pw.png"
                                height={300}
                                width={300}
                                alt='logo'
                            />
                            {/* <h1 className='text-6xl'>Round 1</h1>
                            <p className="text-4xl ">(Online)</p>
                            <p className="text-5xl">26 April</p> */}
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center">
                        <Image
                            src="/par2.png"
                            height={500}
                            width={500}
                            alt='logo'
                        />
                        <div className={`${born2b.className} absolute -top-10 left-8 text-center `}>
                            <Image
                                src="/pw.png"
                                height={300}
                                width={300}
                                alt='logo'
                            />
                            {/* <h1 className='text-6xl'>Round 1</h1>
                            <p className="text-4xl ">(Online)</p>
                            <p className="text-5xl">26 April</p> */}
                        </div>
                    </div>
                </div>

                {/* ********refreshment************** */}

                <div className="">
                    <div className="flex justify-center">
                        <div className="relative ">
                            <Image
                                src="/refreshment.jpg"
                                height={650}
                                width={650}
                                alt='logo'
                            />
                            <div className={`${born2b.className} absolute top-12 left-36 text-center `}>
                                <h1 className='text-5xl leading-10'>Refreshment Partner</h1>
                                {/* <p className="text-4xl ">(Online)</p>
                                <p className="text-5xl">26 April</p> */}
                            </div>
                        </div>

                    </div>

                    <div className="relative flex justify-center items-center">
                        <Image
                            src="/par2.png"
                            height={400}
                            width={400}
                            alt='logo'
                        />
                        <div className={`${born2b.className} absolute top-2 left-[30rem] flex justify-center text-center `}>
                            <Image
                                src="/pw.png"
                                height={250}
                                width={250}
                                alt='logo'
                            />
                            {/* <h1 className='text-6xl'>Round 1</h1>
                            <p className="text-4xl ">(Online)</p>
                            <p className="text-5xl">26 April</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsor