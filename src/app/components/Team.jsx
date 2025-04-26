import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'
import Image from 'next/image'
import Link from 'next/link'

const Team = () => {
  return (
    <div id="team">
      <div className={`${greatVibes.className} h-auto backdrop-blur-sm mx-2 lg:mx-5 mt-5 px-1 lg:px-10 rounded-3xl py-14 text-white`}>
        <div className={`${greatVibes.className} text-5xl`}>
          <div className="flex justify-center items-center gap-10 ">
            <div className="rotate-225 hidden lg:block ">
              {/* <Image
                                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                                    height={200}
                                                    width={200}
                                                    alt='logo'
                                                /> */}
            </div>
            <h1 className={`${greatVibes.className} text-5xl lg:text-6xl text-center text-white`}>Student Co-ordinators</h1>
            <div className="rotate-45 hidden lg:block ">
              {/* <Image
                                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                                    height={200}
                                                    width={200}
                                                    alt='logo'
                                                /> */}
            </div>
          </div>
        </div>


        <div className="mt-16 flex lg:flex-row flex-col gap-14 justify-center">
          <div className="COLLEGE Gdg flex flex-col gap-10 justify-center items-center  ">



            <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/yuvraj.jpeg"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Yuvraj Anand	</h1>
              <Link href="https://www.linkedin.com/in/yuvraj-anand-548593269/">
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

            <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/akshat.jpg"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Akshat Bhargav	</h1>
              <Link href="https://www.linkedin.com/in/akshat-bhargav-647289266/">
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



            
            <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/prakshi.jpeg"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Prakshi Goel</h1>
              <Link href="https://www.linkedin.com/in/prakshi-goel-4b75a6228/">
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

            <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/akash.jpeg"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Akash Maity	</h1>
              <Link href="https://www.instagram.com/akash123.m/profilecard/">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                  height={30}
                  width={30}
                  alt='logo'
                  className='text-center'
                  loading='lazy'
                />
              </Link>
            </div>


          </div>


          {/* ********************** */}

          <div className="COLLEGE GDG flex flex-col gap-10 justify-center items-center  ">




            <div className="border min-w-96 p-10 rounded-3xl flex flex-col gap-5 justify-center items-center">

              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQFtLxAZk46_HA/profile-displayphoto-shrink_800_800/B56ZWBPCpaHEAc-/0/1741629959518?e=1749686400&v=beta&t=N7PY9Ip7TChHCIF3EqqW3PFjnUguNW2bddq37UHI9fM"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Sharique Hussain</h1>
              <Link href="https://www.linkedin.com/in/shariquehussain-/">
                <div className="flex gap-5">

                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png"
                    height={30}
                    width={30}
                    alt='logo'
                    className='text-center'
                    loading='lazy'
                  />
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                    height={30}
                    width={30}
                    alt='logo'
                    className='text-center'
                    loading='lazy'
                  />
                </div>
              </Link>

            </div>


            <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/ukcode07.jpeg"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Ujjwal Katiyar</h1>
              <Link href="https://www.linkedin.com/in/itsukcode/">
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



            <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/anshika.jpeg"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Anshika Singh</h1>
              <Link href="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
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



            {/* <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQE5xn1hOoYf5g/profile-displayphoto-shrink_800_800/B56ZOvC1_lGwAc-/0/1733808579423?e=1749686400&v=beta&t=9-CcAZPF0dq2bWKQkjLCOtB-QeEqW6aaTq4YWtiaWOc"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Anish</h1>
              <Link href="https://www.linkedin.com/in/anish-gupta-5471a129a/">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png"
                  height={30}
                  width={30}
                  alt='logo'
                  className='text-center'
                  loading='lazy'
                />
              </Link>
            </div> */}
          </div>

          {/* ******************** */}
          <div className="COLLEGE GDG flex flex-col gap-10 justify-center items-center  ">


            <div className="border min-w-96 p-10 rounded-3xl flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/prince.jpeg"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Prince Jha</h1>
              <Link href="https://www.linkedin.com/in/prince-jha-6baa1626b/">
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


            <div className="border min-w-96 p-10 rounded-3xl flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/shekhar.png"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">	Shekhar Thathera	</h1>
              <Link href="https://www.linkedin.com/in/shekharthathera/">
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



            <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFmxon2QaCUow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692674612590?e=1749686400&v=beta&t=4JRGSss21xc4zmPZqgE3hyvuZZA5RIxnQPOck8Uq0_0"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Kush Singhal	</h1>
              <Link href="https://www.linkedin.com/in/kush-singhal-488a53246/">
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





            <div className="border min-w-96 p-10 rounded-3xl  flex flex-col gap-5 justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <Image
                  src="/vibhashu.jpeg"
                  height={200}
                  width={200}
                  alt='logo'
                  className='text-center rounded-full w-auto h-auto'
                  loading='lazy'
                />
              </div>
              <h1 className="text-4xl text-center">Vibhawshu Pratap	</h1>
              <Link href="https://www.linkedin.com/in/vibhawshu-pratap-singh-44473126a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team