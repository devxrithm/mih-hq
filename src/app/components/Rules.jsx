import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'

const Rules = () => {
    return (
        <>
            <div className={`${greatVibes.className} h-[90rem] backdrop-blur-md mx-5 mt-5 px-10 rounded-3xl `}>

                <div className={`${greatVibes.className} pt-8 mx-52 `}>
                    <div className="flex justify-center items-center ">
                        <div className="rotate-225 ">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div>
                        <h1 className={`${born2b.className} text-8xl text-center text-white leading-20`}>Mind Installers Hackathon 3.O</h1>
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

                <div className="flex justify-center items-center gap-10 mt-10 border-b pb-5 border-b-gray-400">
                    <div className={`${greatVibes.className} text-4xl pt-14 relative w-[35%] border-r border-r-gray-400`}>
                        <div className="flex justify-center items-center ">
                            <div className=" relative bottom-5 ">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/128/12712/12712504.png"
                                    height={100}
                                    width={100}
                                    alt='logo'
                                />
                            </div>
                            <h1 className={`${greatVibes.className} text-7xl text-center text-white relative right-10 `}>Rules & Guidlines</h1>
                            {/* <div className="rotate-45 ">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                height={100}
                                width={100}
                                alt='logo'
                            />
                        </div> */}
                        </div>
                    </div>

                    <div className={`${born2b.className}  w-[60%]`}>
                        <div className='bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl'>
                            <h1 className="text-4xl text-white">1. General Rules :</h1>
                            <div className="pl-5 text-gray-300 text-2xl">
                                <div className="flex gap-5">•
                                    <p className="">The Hackathon is open to all eligible participants for college students.
                                    </p>
                                </div>
                                <div className="flex gap-5">•
                                    <p className="">Participants must register as a team (team size: 2-4 members). Solo participation is not allowed.
                                    </p>
                                </div>
                                <div className="flex gap-5">•
                                    <p className="">Each team must submit their project idea and implementation details within the given deadline(To be announced).
                                    </p>
                                </div>
                                <div className="flex gap-5">•
                                    <p className="">Submissions must align with the open innovation theme, ensuring originality and feasibility.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className={`${born2b.className} flex justify-center items-center gap-5 mt-10 `}>

                    <div className=' bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl w-[50%] min-h-[26rem]'>
                        <h1 className="text-4xl text-white">2. Project Submission :</h1>
                        <div className="pl-5 text-gray-300 text-2xl">
                            <div className="">
                                <div className="flex gap-5">•
                                    <p className="">Teams must submit a well-documented project proposal (Provided Template), including :
                                    </p>
                                </div>
                                <div className="flex flex-col text-xl ml-10">
                                    <li>Problem statement</li>
                                    <li>Proposed solution</li>
                                    <li>Technology stack</li>
                                    <li>Implementation approach</li>
                                    <li>Expected impact</li>
                                </div>
                            </div>
                            <div className="flex gap-5">•
                                <p className="">A demo video (max 5 minutes) explaining the idea and progress.(Optional)
                                </p>
                            </div>
                            <div className="flex gap-5">•
                                <p className="">Code repositories (GitHub/GitLab/Bitbucket) must be shared if applicable.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl w-[50%] min-h-[26rem]'>
                        <h1 className="text-4xl text-white">3. Evaluation Criteria :</h1>
                        <div className="pl-5 text-gray-300 text-2xl">
                            <div className="flex gap-5">•
                                <p className="">Innovation & Creativity (30%) – Novelty of the idea and uniqueness.
                                </p>
                            </div>
                            <div className="flex gap-5">•
                                <p className="">Technical Feasibility (30%) – Implementation approach and technology used.
                                </p>
                            </div>
                            <div className="flex gap-5">•
                                <p className="">Impact & Usefulness (20%) – Real-world applicability and scalability.
                                </p>
                            </div>
                            <div className="flex gap-5">•
                                <p className="">Presentation & Clarity (20%) – Quality of documentation and demo video.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                {/* ************ */}
                <div className={`${born2b.className} flex justify-center items-center gap-5 mt-5 `}>

                    <div className=' bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl w-[50%] min-h-[20rem]'>
                        <h1 className="text-4xl text-white">4. Conduct & Ethics :</h1>
                        <div className="pl-5 text-gray-300 text-2xl">
                            <div className="">
                                <div className="flex gap-5">•
                                    <p className="">Teams must ensure originality—no plagiarism or use of pre-existing projects.
                                    </p>
                                </div>
                                {/* <div className="flex flex-col text-xl ml-10">
                                    <li>Problem statement</li>
                                    <li>Proposed solution</li>
                                    <li>Technology stack</li>
                                    <li>Implementation approach</li>
                                    <li>Expected impact</li>
                                </div> */}
                            </div>
                            <div className="flex gap-5">•
                                <p className="">AI-generated or automated submissions without actual development are not allowed.
                                </p>
                            </div>
                            <div className="flex gap-5">•
                                <p className="">Any attempt to manipulate submissions or misrepresent work will lead to disqualification.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='bg-[#0d0e11] border border-gray-700 p-5 rounded-2xl w-[50%] min-h-[20rem]'>
                        <h1 className="text-4xl text-white">5. Communication & Deadlines :</h1>
                        <div className="pl-5 text-gray-300 text-2xl">
                            <div className="flex gap-5">•
                                <p className="">All communication will be done via the official hackathon Email channel.
                                </p>
                            </div>
                            <div className="flex gap-5">•
                                <p className="">Teams must submit their project before the submission deadline (to be announced)—late submissions will not be considered.
                                </p>
                            </div>
                            <div className="flex gap-5">•
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