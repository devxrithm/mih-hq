import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { greatVibes, born2b } from '../../../styles/font'

const Container = ({ img, name, link }) => {
    return (
        <>
            <div className={`${greatVibes.className} border border-white px-5 py-6 rounded-3xl  flex flex-col gap-5 justify-center items-center max-w-96`}>
                <div className="w-[100%] flex justify-center items-center">
                    <Image
                        src={img}
                        height={250}
                        width={250}
                        alt='logo'
                        className='text-center rounded-full'
                        loading='lazy'
                    />
                </div>
                <h1 className="text-3xl lg:text-2xl text-center text-white">{name}</h1>
                <Link href={link}>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png"
                        height={30}
                        width={30}
                        alt='logo'
                        className='text-center'
                        loading='lazy'
                    />
                </Link>
            </div>
        </>
    )
}

export default Container