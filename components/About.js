import React from 'react'
import { GiPlayButton } from "react-icons/gi";
import { motion } from "motion/react"

const About = () => {
    return (
        <>
            <div
                            // initial={{ x: "100%" }}
                            // animate={{ x: "0%" }}
                            //  transition={{ duration: 1 }} 
                             name="About" id='About' className=" bg-gradient-to-r from-slate-200 to-indigo-200 flex flex-col  justify-center items-center text-center ">
              
                <div className="flex flex-col items-center  px-6 md:px-20 md:mb-10 mb-3 ">
                    <div className="headline mt-3 ">
                        <p className='text-3xl flex flex-col justify-center items-center font-bold mt-6 mb-2 md:mb-1'>About<span className='h-1 rounded-full mt-2 bg-green-700 w-10'></span>
                        </p>
                          <p className=' mt-5 md:mb-7 text-lg text-justify px-2 md:px-25 '>Hi, I'm Imran Shaikh. I'm a BCA graduate from the class of 2024 with a strong passion for web development and technology.
                        I enjoy creating responsive, user-friendly websites and applications that deliver great digital experiences. Throughout my academic journey, I've worked on multiple projects that helped me strengthen my skills in HTML, CSS, JavaScript, React.js, Tailwind CSS, Express.js, Node.js, MongoDB, Php and Next.js. <span className=''>Thanks for visiting my portfolio, let's connect and create something awesome together.</span>
                        </p>
                        {/* 
                        <span className='text-md md:text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore, dolor praesentium deleniti, accusamus officiis ratione amet expedita rerum elit aspernatur magni.</span> */}
                    </div>
                    <br />
                  <div
                            initial={{ x: "50%" }}
                            animate={{ x: "0%" }}
                             transition={{ duration: 1 }}  className="contain">
                        <p className='text-2xl md:text-3xl text-green-800 font-bold text-center'>Education</p>
                        {/* college */}
                        <div className="border-1  hover:border-0  hover:text-green-950 mt-6 rounded-lg hover:bg-gray-300 cursor-pointer px-8 py-4 md:px-50">
                            <b className='text-xl '> Bachelor of Computer Applications (BCA)</b>
                            <p className='text-lg font-semibold'> JIS COLLEGE OF ENGINEERING <br /><span className='font-normal text-[15px] '>2021-24</span><br /> <span className='text-lg font-normal'>Kalyani, Nadia. WB</span><br /><span className='font-normal text-[15px]'>Year of passing: 2024</span> </p></div>

                        {/* 12 */}
                        <div className="border-1  hover:border-0 hover:text-green-950  mt-6 rounded-lg hover:bg-gray-300 cursor-pointer px-8 py-4 md:px-50">
                            <b className='text-xl '>WBCHSE (12th) </b>
                            <p className='text-lg font-semibold'> KABI BIJOYLAL HS INTITUTE <br /><span className='font-normal text-[15px] '>2029-21</span><br /> <span className='text-lg font-normal'>Krishnanagar, Nadia. WB</span><br /><span className='font-normal text-[15px]'>Year of passing: 2021</span> </p></div>

                        {/* 10 */}
                        <div className="border-1  hover:border-0 hover:text-green-950  mt-6 rounded-lg hover:bg-gray-300 cursor-pointer px-8 py-4 md:px-50">
                            <b className='text-xl '> WBBSE (10th)</b>
                            <p className='text-lg font-semibold'>DON BOSCO HIGH SCHOOL <br /><span className='font-normal text-[15px] '>2009-19</span><br /> <span className='text-lg font-normal'>Krishnanagar, Nadia. WB</span><br /><span className='font-normal text-[15px]'>Year of passing: 2019</span> </p></div>


                    </div>

                    <p className='text-2xl flex flex-col justify-center items-center font-bold mt-15 mb-7 md:mb-5 text-green-800'>My Skills
                    </p>
                    <div className="skills pl-5  md:ml-10 text-center flex space-x-3  flex-wrap">
                        <p className='hover:scale-115 transition-transform duration-200 bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold  py-2 mt-3 md:px-6 md:py-2 hover:bg-gray-700 hover:text-white cursor-pointer'>HTML</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold  py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>CSS</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5  font-semibold py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>Python</p>

                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold  py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>Tailwind CSS</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold  py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>JavaScript</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5  font-semibold py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>React JS</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5  font-semibold py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>Next JS</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5  font-semibold py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>Node JS</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold  py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>Express JS</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold  py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>PHP</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold  py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>Wordpress</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>MongoDB</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5  font-semibold py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>SQL</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5  font-semibold py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>Github</p>
                        <p className='hover:scale-115 transition-transform duration-200  bg-gray-200 border-1 text-green-900 rounded-md px-5 font-semibold  py-2 mt-3 md:px-6 md:py-2  hover:bg-gray-700 hover:text-white cursor-pointer'>Responsive Design
                        </p>

                    </div>
                </div>
            </div>
            <div className="partition border-b-1 mt-6 border-gray-500"></div>
        </>
    )
}

export default About