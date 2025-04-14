import React from 'react'
import Image from 'next/image'
import { greatVibes, born2b } from '../../../styles/font'

const Theme = () => {
    return (
        <div id="theme">
            <div className={`${greatVibes.className} h-auto backdrop-blur-md mx-2 lg:mx-5 mt-5 px-1 lg:px-10 rounded-3xl py-14 text-white`}>
                <div className={`${greatVibes.className} text-5xl`}>
                    <div className="flex justify-center items-center gap-10 ">
                        <div className="rotate-225 hidden lg:block ">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                        <h1 className={`${greatVibes.className} text-6xl lg:text-8xl  text-center text-white`}>Theme </h1>
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
                <div className="flex lg:flex-row flex-col mt-5 justify-center items-center ">

                    <div className="relative">
                        <Image
                            src="/innovation.png"
                            height={1000}
                            width={1000}
                            alt="logo"
                            className="w-auto h-auto object-cover"
                            loading='lazy'
                        />

                        <div className={`${born2b.className} absolute inset-5 right-5 flex items-center justify-center text-center bottom-8`}>
                            <h1 className="text-6xl lg:text-8xl text-center leading-10 lg:leading-16 text-black">Open <br /> <span className="text-orange-600"> Innovation</span></h1>
                        </div>

                    </div><Image
                        src="https://static.vecteezy.com/system/resources/previews/049/392/133/large_2x/achilles-god-holding-weapon-greek-god-watercolor-free-png.png"
                        height={400}
                        width={400}
                        alt="logo"
                        className="w-auto h-auto object-cover hidden lg:block"
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    )
}

export default Theme