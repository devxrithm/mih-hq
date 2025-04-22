import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image
    from 'next/image'
const Communit = () => {
    return (
        <div>
            <div className={`${greatVibes.className} h-auto backdrop-blur-sm mx-2 lg:mx-5 mt-5 px-1 lg:px-10 rounded-3xl py-14 text-white`}>
                <div className={`${greatVibes.className} text-5xl`}>
                    <div className="flex justify-center items-center gap-10 ">
                        <div className="rotate-225 hidden lg:block ">
                            {/* <Image
                                          src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                          height={100}
                                          width={100}
                                          alt='logo'
                                      /> */}
                        </div>
                        <h1 className={`${greatVibes.className} text-5xl lg:text-6xl text-center text-white`}></h1>
                        <div className="rotate-45 hidden lg:block ">
                            {/* <Image
                                          src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                          height={100}
                                          width={100}
                                          alt='logo'
                                      /> */}
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-center items-center gap-10 ">
                    <Image
                        src="/gdg.png"
                        width={300}
                        height={300}
                        alt='iimt'
                        className='rounded-xl lg:hidden block'
                        loading = 'lazy'
                    />
                    <Image
                        src="/logo SN.png"
                        width={100}
                        height={100}
                        alt='iimt'
                        className='rounded-xl hidden '
                        loading = 'lazy'
                    />
                </div>

                <div className="flex"></div>
            </div>
        </div>
    )
}

export default Communit