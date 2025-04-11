import React from 'react'
import { greatVibes, born2b } from '../../../styles/font'

const Benifectro = () => {
  return (
    <div>
      <div className={`${greatVibes.className} h-auto backdrop-blur-md mx-2 lg:mx-5 mt-5 px-1 lg:px-10 rounded-3xl py-14 text-white`}>
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
            <h1 className={`${greatVibes.className} text-5xl lg:text-6xl text-center text-white`}>Benefactor</h1>
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
        <div className="flex justify-center items-center gap-10">
        <div className="flex lg:flex-row flex-col mt-16 justify-center items-center ">
          <div className="border rounded-3xl p-10 border-gray-400">
            <h1 className="text-4xl text-center">Sarathi Gouda</h1>
            <p className={`${born2b.className} text-center text-2xl text-gray-300`}>Director - Training & Placement</p>
            <p className="text-center text-2xl text-gray-300">IIMT Group Of Colleges</p>
          </div>
          <div className=""></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Benifectro