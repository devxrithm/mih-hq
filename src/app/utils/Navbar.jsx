import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className={`${greatVibes.className} relative flex items-center justify-center pt-3 text-lg text-white  `} >

                <div className="bg-[url(/bg-nav.avif)] bg-center bg-cover shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full hidden lg:block" style={{ filter: 'brightness(0.8)' }}>

                    <ul className=' flex gap-6 justify-center items-center px-10 py-4 text-2xl  backdrop-blur-md rounded-full'>
                        <Link href="#about">
                            <li>About</li>
                        </Link>
                        <Link href="#track">
                            <li>Timeline</li>
                        </Link>
                        <li>Rules</li>

                        <Link href="#prizes">
                            <li>Prizes</li>
                        </Link>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <Image
                        src="/mainLogo.png"
                        height={200}
                        width={200}
                        alt='logo'
                    />
                </div>
                <div className="bg-[url(/bg-nav.avif)] bg-center bg-cover shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full hidden lg:block" style={{ filter: 'brightness(0.8)' }}>

                    <ul className='flex gap-5 justify-center items-center px-14 py-4 text-center text-2xl backdrop-blur-xl rounded-full text-white'>
                        <Link href="#sponsor">
                            <li>Sponsor</li>
                        </Link>
                        <li>Past Hackathon</li>
                        <Link href="#contact">
                         <li>Contact</li>
                         </Link>
                        <li>Prizes</li>
                        <li></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar