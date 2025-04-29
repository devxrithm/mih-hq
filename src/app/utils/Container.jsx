import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { greatVibes, born2b } from '../../../styles/font'

const Container = ({ img, name, link }) => {
    return (
        <>
            <div className={`${greatVibes.className} border min-w-96 p-7 rounded-3xl  flex flex-col gap-5 justify-center items-center`}>
                <div className="w-[100%] flex justify-center items-center">
                    <Image
                        src={img}
                        height={200}
                        width={200}
                        alt='logo'
                        className='text-center rounded-full w-auto h-auto'
                        loading='lazy'
                    />
                </div>
                <h1 className="text-4xl text-center">{name}</h1>
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