import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'

const Rules = () => {
    return (
        <>
            <div id="rules" className={`min-h-[90rem] backdrop-blur-sm mx-2 lg:mx-5 mt-5 py-5 px-1 lg:px-10 rounded-3xl `}>


                <div className={`${greatVibes.className} pt-8  flex  justify-center items-center gap-8 `}>
                    <div className="rotate-225 hidden lg:block ">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                            height={100}
                            width={100}
                            alt='logo'
                            loading = 'lazy'
                        />
                    </div>
                    <h1 className={`${born2b.className} hidden lg:block text-5xl lg:text-8xl text-center text-white leading-20 `}>Mind Installers <br />Hackathon 3.O</h1>
                    <div className="rotate-45 hidden lg:block ">
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                            height={100}
                            width={100}
                            alt='logo'
                            loading = 'lazy'
                        />
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:mt-10 lg:border-b pb-5 border-b-gray-400">
                    <div className={`${greatVibes.className} text-4xl pt-14 relative max-w-[100%] lg:min-w-[30%] lg:border-r border-r-gray-400`}>

                        <h1 className={`${greatVibes.className} text-7xl text-center text-white lg:pr-10`}>Rules & <br />Guidlines</h1>

                    </div>

                    <div className={` max-w-[100%]  lg:min-w-[70%] hover:scale-105 transition delay-150 duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500`}>
                        <div className='bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl'>
                            <h1 className={`text-4xl ${born2b.className} text-orange-600`} >1. General Rules :</h1>
                            <div className="pl-5 text-gray-300 text-2xl">
                                <div className="flex gap-5"><span className="text-orange-600">•</span>
                                    <p className="">The Hackathon is open to all college students.
                                    </p>
                                </div>
                                <div className="flex gap-5"><span className="text-orange-600">•</span>
                                    <p className="">Participants must register as a team (team size: 2-4 members). Solo participation is not allowed.
                                    </p>
                                </div>
                                <div className="flex gap-5"><span className="text-orange-600">•</span>
                                    <p className="">Each team must submit their project idea and implementation details within the given deadline (Before Midnight, 24 April).
                                    </p>
                                </div>
                                <div className="flex gap-5"><span className="text-orange-600">•</span>
                                    <p className="">Submissions must align with the open innovation theme, ensuring originality and feasibility.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className={`flex flex-col lg:flex-row justify-center items-center gap-5 mt-5 lg:mt-10 `}>

                    <div className=' bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl max-w-[100%] lg:min-w-[50%] min-h-[26rem] hover:scale-105 transition delay-150 duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500'>
                        <h1 className={`text-4xl ${born2b.className} text-orange-600`}>2. Project Submission :</h1>
                        <div className="pl-5 text-gray-300 text-2xl">
                            <div className="">
                                <div className="flex gap-5"><span className="text-orange-600">•</span>
                                    <p className="">Teams must submit a well-documented project proposal (Provided Template), including :
                                    </p>
                                </div>
                                <ul className="flex flex-col text-xl ml-10">
                                    <li className='text-orange-200'>Problem statement</li>
                                    <li className='text-orange-200'>Proposed solution</li>
                                    <li className='text-orange-200'>Technology stack</li>
                                    <li className='text-orange-200'>Implementation approach</li>
                                    <li className='text-orange-200'>Expected impact</li>
                                </ul>
                            </div>
                            <div className="flex gap-5 "><span className="text-orange-600">•</span>
                                <p className="">A demo video (max 5 minutes) explaining the idea and progress.(Optional)
                                </p>
                            </div>
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">Code repositories (GitHub/GitLab/Bitbucket) must be shared if applicable.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl max-w-[100%] lg:min-w-[50%] min-h-[26rem] hover:scale-105 transition delay-150 duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500'>
                        <h1 className={`text-4xl ${born2b.className} text-orange-600`}>3. Evaluation Criteria :</h1>
                        <div className="pl-5 text-gray-300 text-2xl">
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">Innovation & Creativity (30%) – Novelty of the idea and uniqueness.
                                </p>
                            </div>
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">Technical Feasibility (30%) – Implementation approach and technology used.
                                </p>
                            </div>
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">Impact & Usefulness (20%) – Real-world applicability and scalability.
                                </p>
                            </div>
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">Presentation & Clarity (20%) – Quality of documentation and demo video.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                {/* ************ */}
                <div className={`flex flex-col lg:flex-row justify-center items-center gap-5 mt-5 lg:mt-10 `}>

                    <div className='hover:shadow-lg hover:shadow-orange-500 hover:scale-105 transition delay-150 duration-300 ease-in-out bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl max-w-[100%] lg:min-w-[50%] min-h-[20rem]'>
                        <h1 className={`text-4xl ${born2b.className} text-orange-600`}>4. Conduct & Ethics :</h1>
                        <div className="pl-5 text-gray-300 text-2xl">

                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">Teams must ensure originality—no plagiarism or use of pre-existing projects.
                                </p>
                            </div>


                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">AI-generated or automated submissions without actual development are not allowed.
                                </p>
                            </div>
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">Any attempt to manipulate submissions or misrepresent work will lead to disqualification.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='hover:shadow-lg hover:shadow-orange-500 hover:scale-105 transition delay-150 duration-300 ease-in-out bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl max-w-[100%] lg:min-w-[50%]  min-h-[20rem]'>
                        <h1 className={`text-4xl ${born2b.className} text-orange-600`}>5. Communication & Deadlines :</h1>
                        <div className="pl-5 text-gray-300 text-2xl">
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">All communication will be done via the official hackathon Email channel.
                                </p>
                            </div>
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">Teams must submit their project before the submission deadline (Before Midnight, 24 April) —late submissions will not be considered.
                                </p>
                            </div>
                            <div className="flex gap-5"><span className="text-orange-600">•</span>
                                <p className="">The top-performing teams will be shortlisted for the final offline round.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Rules