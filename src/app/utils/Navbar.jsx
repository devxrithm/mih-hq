import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            {/* <nav className={`${greatVibes.className} relative flex items-center justify-center pt-3 text-lg text-white  `} >

                <div className="bg-[url(/bg-nav.avif)] bg-center bg-cover shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full hidden lg:block" style={{ filter: 'brightness(0.8)' }}>

                    <ul className=' flex gap-6 justify-center items-center px-10 py-4 text-2xl  backdrop-blur-md rounded-full'>
                        
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

                    <ul className='flex gap-5 justify-center items-center px-10 py-4 text-center text-2xl backdrop-blur-xl rounded-full text-white'>
                        <Link href="#sponsor">
                            <li>Sponsor</li>
                        </Link>
                        <li>Past Hackathon</li>
                        <Link href="#contact">
                         <li>Contact</li>
                         </Link>
                        
                        <li></li>
                    </ul>
                </div>
            </nav> */}

            <div className=" flex justify-center items-center gap-10  ">
                <div className="flex justify-center items-center">
                    <div className="">
                        <Image
                            src="/iimt.png"
                            width={200}
                            height={200}
                            alt='logo'

                        />
                    </div>
                
                </div>
                <nav className={`${greatVibes.className} border rounded-2xl w-[50%] lg:block hidden`}>
                    <ul className="flex justify-center items-center gap-10 p-5  backdrop-blur-md rounded-2xl text-xl">
                        <li>Rules</li>
                        <li>Prizes</li>
                        <li>Sponsors</li>
                        {/* <div className="">
                            <Image
                                src="https://cdn.universitykart.com//Content/upload/admin/k0tevuvr.1k4.png"
                                width={200}
                                height={200}
                                alt='logo'
                                
                            />
                            {/* <Image
                            src="/mainLogo.png"
                            height={200}
                            width={200}
                            alt='logo'
                        /> */}

                        <li>Contact</li>
                        <li>Theme</li>
                        <li>Timeline</li>
                    </ul>
                </nav>
                <div className="flex justify-center items-center lg:block">
                    
                    <div className="">
                        <Image
                            src="/gdg.png"
                            height={180}
                            width={180}
                            alt='logo'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar