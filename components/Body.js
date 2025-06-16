"use client"
import React from 'react'
import { ReactTyped, Typed } from "react-typed";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { motion } from "motion/react"

const Body = () => {
    return (
        <>
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                 transition={{ duration: 1.5 }}


                id='Body' name="Home" className=" h-195 text-center md:text-left md:h-175 text-white main bg-gradient-to-r from-slate-700 to-indigo-950  md:mt-0 px-3 md:px-0 flex flex-col md:flex-row justify-center md:justify-center ">

              <motion.div

          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
           className="left md:pl-25  mt-3 md:mt-0  md:w-6/11 flex justify-center md:mr-4 flex-col px-3 py-5 order-2 md:ml-10 lg:ml-0 ">

                    <span className='text-3xl hover:scale-95 transition-transform duration-300 cursor-pointer hover:text-pink-300 '><h1 className="blog-title">
                        <span className="blog-title-emoji text-5xl ">👋🏼</span>
                    </h1> <span className=' text-xl md:text-3xl '>Hello I'm</span></span>

                    <span className=' text-4xl md:text-7xl font-bold pb-2 hover:scale-95 transition-transform duration-300 cursor-pointer hover:text-pink-300 '>Imran Shaikh</span>

                    <div className="space-x-2 pt-2 h-15 mt-0.5 flex items-center  flex-col md:flex-row hover:scale-95 transition-transform duration-300 cursor-pointer hover:text-pink-300 "> <span className='font-semibold text-lg md:text-3xl'>Welcome In My Feed I'm</span>
                        <span className='font-semibold text-lg md:text-3xl  '> <span></span>
                            <ReactTyped
                                className='text-3xl md:text-4xl text-green-600 font-bold'
                                strings={["Programmer", "Web Developer", "Coder"]}
                                typeSpeed={50}
                                backSpeed={40}
                                loop={true}

                            /></span>

                    </div>
                    <br />

                    {/* <p className='text-justify text-lg '>Hi, I'm Imran Shaikh. I'm a BCA graduate from the class of 2024 with a strong passion for web development and technology.
                        I enjoy creating responsive, user-friendly websites and applications that deliver great digital experiences. Throughout my academic journey, I've worked on multiple projects that helped me strengthen my skills in HTML, CSS, JavaScript, React.js, Tailwind CSS, Php and Next.js. <br /><span className='mt-10'>Thanks for visiting my portfolio, let's connect and create something awesome together!</span>
                        </p> */}
                    <br />

                    {/* <div className="btn mt-3 ">
    <button className='px-10 py-1 rounded-2xl cursor-pointer border-0 outline-0 text-white bg-green-600 font-bold'>CV</button>
</div> */}
                    <div className="icon pt-5 space-y-2 text-center mx-auto md:mx-0 md:w-1/3 ">
                        <p className='text-lg font-semibold md:text-left pb-0.5 '> Available on</p>
                        <ul className='flex space-x-6 text-3xl '>
                            <a href="https://www.linkedin.com/in/imran-shaikh-163372241/" target="_blank" className='hover:scale-120 transition-transform duration-300 cursor-pointer hover:text-pink-300'><li className='text-sky-400 cursor-pointer '><BsLinkedin className='hover:text-sky-600 ' /></li></a>
                            <a href="https://github.com/imran071202" target="_blank" className='hover:scale-120 transition-transform duration-300 cursor-pointer'><li className=' cursor-pointer '><FaGithub className='hover:text-red-200 ' /></li></a>
                            <a href="https://x.com/Imran___02" target="_blank" className='hover:scale-120 transition-transform duration-300 cursor-pointer'><li className=' cursor-pointer '><FaXTwitter className='hover:text-orange-200 ' /></li></a>
                            <a href="https://www.facebook.com/imran.shaikh.562433" target="_blank" className='hover:scale-120 transition-transform duration-300 cursor-pointer'><li className='text-blue-600  cursor-pointer'><FaFacebookSquare className='hover:text-sky-500 ' /></li></a>
                        </ul>
                    </div>
                </motion.div>

                {/* image */}
                <div className=" right pt-5 flex justify-center  md:mt-18 md:justify-center lg:justify-center md:items-start md:pt-30 lg:pt-25 items-center  md:h-[50vh] lg:h-[70vh]  md:w-5/10 lg:w-3/10 xl:w-2.5/10 2xl:w-2/10  order-1 md:order-2 ">
                    <div className="pic rounded-full h-65 w-67 md:h-85 md:w-88 md:mr-10 lg:mr-0 overflow-hidden  bg-center bg-cover hover:scale-115 transition-transform duration-300 cursor-pointer border-9 border-slate-600 ">
                        <img src="./photo/imran.jpeg" alt="" className='h-65 w-67 md:h-85 md:w-88 bg-center bg-cover  ' />

                    </div>

                </div>

            </motion.div>
            {/* <div className="partition border-b-1 mt-6 border-gray-300"></div> */}
        </>
    )
}

export default Body