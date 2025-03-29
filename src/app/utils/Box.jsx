import React from 'react'
import Image from 'next/image'
import { greatVibes, born2b } from '../../../styles/font'

const Box = ({ imgUrl, boxSec, desc }) => {
    return (
        <>
            <div className="border border-orange-700 flex justify-center items-center min-w-72 flex-col gap-5 p-4 rounded-3xl shadow-white min-h-64 ">

                <div className="logo">
                    <Image
                        src={imgUrl}
                        height={50}
                        width={50}
                        alt='logo'
                    />
                </div>
                <div className="text-4xl text-center">
                    <h2 className={`${born2b.className} leading-7`}>{boxSec}</h2>
                </div>
                <div className="text-2xl text-center leading-5 text-gray-300 ">
                    <p className={`${born2b.className}`}>
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Box