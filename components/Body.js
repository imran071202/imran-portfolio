"use client"
import React from 'react'
import { ReactTyped, Typed } from "react-typed";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Body = () => {
    return (
        <>
            <div id='Body' name="Home" className="main mt-5 px-3 md:px-0 flex flex-col md:flex-row justify-start md:justify-center md:h-[79vh]">
                <div className="left  md:h-[70vh] md:w-6/11 flex justify-center flex-col px-3 py-5 order-2 ">
                    <p className='text-lg mt-2 md:mt-0'>Welcome In My Feed</p>
                    <div className="space-x-2 mt-0.5"> <span className='font-semibold text-xl md:text-3xl'>Hello, I'm a</span>

                        <ReactTyped
                            className='text-2xl md:text-4xl text-green-600 font-bold'
                            strings={["Programmer", "Web Developer", "Coder"]}
                            typeSpeed={50}
                            backSpeed={40}
                            loop={true}

                        /></div>
                    <br />

                   <p className='text-justify text-lg '>Hi, I'm Imran Shaikh. I'm a BCA graduate from the class of 2024 with a strong passion for web development and technology.
                        I enjoy creating responsive, user-friendly websites and applications that deliver great digital experiences. Throughout my academic journey, I’ve worked on multiple projects that helped me strengthen my skills in HTML, CSS, JavaScript, React.js, Tailwind CSS, Php and Next.js. <br /><span className='mt-10'>Thanks for visiting my portfolio, let's connect and create something awesome together!</span>
                        </p>
                    <br />

                    {/* <div className="btn mt-3 ">
    <button className='px-10 py-1 rounded-2xl cursor-pointer border-0 outline-0 text-white bg-green-600 font-bold'>CV</button>
</div> */}
                    <div className="icon space-y-2">
                        <p className='text-lg font-semibold'> Available on</p>
                        <ul className='flex space-x-6 text-3xl'>
                            <a href="https://www.linkedin.com/in/imran-shaikh-163372241/" target="_blank"><li className='text-sky-600 cursor-pointer'><BsLinkedin  className='hover:text-sky-500'/></li></a>
                            <a href="https://github.com/imran071202" target="_blank"><li className=' cursor-pointer'><FaGithub  className='hover:text-green-900'/></li></a>
                            <a href="https://x.com/Imran___02" target="_blank"><li className=' cursor-pointer'><FaXTwitter className='hover:text-green-900' /></li></a>
                            <a href="https://www.facebook.com/imran.shaikh.562433" target="_blank"><li className='text-blue-700 cursor-pointer'><FaFacebookSquare className='hover:text-sky-600' /></li></a>
                        </ul>
                    </div>
                </div>
                {/* image */}
                <div className="right flex justify-center mt-2 md:mt-0 md:justify-end items-center  md:h-[70vh]  md:w-4/10 lg:w-3/10 order-1 md:order-2">
                    <div className=" rounded-full md:mr-10 overflow-hidden h-75 w-77 md:h-82 md:w-85 border-1 border-green-200">
                        <img src="./photo/imran.jpeg" alt="" className='h-75 w-77 md:h-82 md:w-85 bg-center bg-cover' />

                    </div>

                </div>

            </div>
            <div className="partition border-b-1 mt-6 border-gray-300"></div>
        </>
    )
}

export default Body