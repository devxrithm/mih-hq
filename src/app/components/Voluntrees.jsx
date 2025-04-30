import React from 'react'
import Container from '../utils/Container'
import { greatVibes, born2b } from '../../../styles/font'


const Voluntrees = () => {
    return (
        <>
            <div className={`${greatVibes.className} text-5xl backdrop-blur-sm my-10`}>
                <div className="flex justify-center items-center gap-10 py-14 ">
                    <div className="rotate-225 hidden lg:block ">
                        {/* <Image
                                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                                    height={200}
                                                    width={200}
                                                    alt='logo'
                                                /> */}
                    </div>
                    <h1 className={`${greatVibes.className} text-5xl lg:text-6xl text-center text-white`}>Volunteers</h1>
                    <div className="rotate-45 hidden lg:block ">
                        {/* <Image
                                                    src="https://cdn-icons-png.flaticon.com/128/2858/2858964.png"
                                                    height={200}
                                                    width={200}
                                                    alt='logo'
                                                /> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 justify-center items-center my-5 mx-10">
                    <Container
                        img="/volunteers/sazid.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Sazid Sheikh"
                    />
                    <Container
                        img="/volunteers/gauri.jpg"
                        link="#"
                        name="Gauri Nautiyal"
                    />
                    <Container
                        img="/volunteers/riya.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Khushi"
                    />
                    <Container
                        img="/volunteers/IMG-20250430-WA0012.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Uday Singh Rana"
                    />
                    <Container
                        img="/volunteers/IMG-20250430-WA0050.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Harshit"
                    />
                    <Container
                        img="/volunteers/IMG-20250430-WA0051.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Aviral Singh"
                    />
                    <Container
                        img="/volunteers/IMG-20250430-WA0048.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Naveen"
                    />
                    <Container
                        img="/volunteers/IMG-20250430-WA0052.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Kanika Sharma"
                    />
                    <Container
                        img="/volunteers/muskan.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Muskan"
                    />
                    <Container
                        img="/volunteers/taniya.jpg"
                        link="https://www.linkedin.com/in/anshika-singh-2ab26830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        name="Taniya"
                    />
                </div>
            </div>
        </>
    )
}

export default Voluntrees