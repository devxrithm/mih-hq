import React, { useState, useEffect } from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [popup, setPopup] = useState(true)
    const [clicked, setclicked] = useState(true)

    const popMenuHandler = () => {
        setPopup(!popup)
        setclicked(!clicked)
    }
    const ClosePopMenuHandler = () => {
        setPopup(!popup)
        setclicked(!clicked)
    }


    return (
        <>
            <nav className={`${greatVibes.className} flex justify-evenly items-center h-28 fixed top-0 left-0 w-full z-50 backdrop-blur-md rounded-b-5xl `}>


                <div className="flex justify-between items-center">
                    <Image
                        src="/IIMT.png"
                        width={250}
                        height={250}
                        alt='logo'
                        loading='lazy'
                    />
                    <button className='lg:hidden text-3xl ml-10 text-white' onClick={popMenuHandler}>
                        {
                            clicked ? <IoMenu /> : <RxCross2 />
                        }

                    </button>
                </div>



                <div className={` ${popup ? "hidden lg:block" : "block"}`}>
                    <ul className={`flex justify-center items-center gap-10 text-white border p-5 rounded-xl backdrop-blur-md text-xl border-orange-700 flex-col lg:flex-row bg-black lg:bg-transparent absolute lg:relative top-28 right-5 lg:right-0 lg:top-0 w-80 lg:w-[100%] `} onClick={ClosePopMenuHandler} >
                        {/*  w-full  lg:w-[50%]  */}

                        <li>
                            <Link href="#rules">Rules</Link>
                        </li>


                        <li>
                            <Link href="#schedule">Schedule</Link>
                        </li>

                        <li>
                            <Link href="#theme">Theme</Link>
                        </li>


                        <li>
                            <Link href="#prizes">Prizes</Link>
                        </li>


                        <li>
                            <Link href="#sponsor">Sponsor</Link>
                        </li>


                        <li>
                            <Link href="#team">Our Team</Link>
                        </li>


                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>


                    </ul>
                </div>
                <div className="hidden lg:block">
                    <Image
                        src="/gdg.png"
                        height={200}
                        width={200}
                        alt='logo'
                        loading='lazy'
                    />
                </div>
            </nav>
        </>
    )
}

export default Navbar