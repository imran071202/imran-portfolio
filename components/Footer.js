import React from 'react'
import { FaCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <a href="#Body"><div className="h-8 flex justify-center items-center text-sm font-semibold bg-gradient-to-r from-slate-700 to-indigo-950 text-white hover:cursor-pointer">Back to top</div></a>
   
      <div className="Footer h-89 md:h-25 bg-gradient-to-r from-indigo-950 to-slate-800 flex flex-col md:flex-row md:justify-around justify-around items-center  text-center ">

       <div className=""><a href="/" className='hover:scale-110 transition-transform duration-300 cursor-pointer' ><div className="logo  text-white text-2xl md:ml-10 cursor-pointer text-center"><p>&lt;Imr<span className='text-green-600'>an</span>/&gt;</p>
          <p className='text-sm text-center'>Web Developer</p></div></a>
          {/* <div className='flex w-70 bg-amber-200 mt-4 text-center text-sm sm:hidden md:block text-white'><p><FaLocationDot className='mt-0.5 pr-1.5 text-lg text-red-500 text-center' /></p> <p> Krishnanagar, Nadia. West Bengal</p></div> */}
          </div>

        <div className="menu text-center text-white flex justify-center mt-5   ">
          <ul className='flex space-y-5 flex-col md:flex-row justify-center md:space-x-10 md:ml-15 text-sm md:font-semibold'>
            <a href="#Body" className='hover:scale-115 transition-transform duration-300 cursor-pointer '><li id='' className='hover:underline hover:scale-100  hover:text-green-200'>Home</li></a>
            <a href="#About" className='hover:scale-115 transition-transform duration-300 cursor-pointer '><li id='' className='hover:underline hover:scale-100  hover:text-green-200'>About</li></a>
            <a href="#Project" className='hover:scale-115 transition-transform duration-300 cursor-pointer '><li id='' className='hover:underline hover:scale-100  hover:text-green-200'>Project</li></a>
            <a href="#Resume" className='hover:scale-115 transition-transform duration-300 cursor-pointer '><li id='' className='hover:underline hover:scale-100  hover:text-green-200'>Resume</li></a>
            <a href="#Contact" className='hover:scale-115 transition-transform duration-300 cursor-pointer '><li id='' className='hover:underline hover:scale-100  hover:text-green-200'>Contact</li></a>
          </ul>
        </div>
        <div className="icon text-white mt-8 mb-3 ">
          {/* <p className='mb-2 text-xl text-center'>Follow</p> */}
          <ul className='flex space-x-5 justify-center text-xl md:text-2xl md:space-x-6  ' >
            <a href="https://www.linkedin.com/in/imran-shaikh-163372241/"target="_blank"  className='cursor-pointer text-sky-500 hover:scale-115 transition-transform duration-300'><FaLinkedin /></a>
          <a href="https://github.com/imran071202" target="_blank" className='cursor-pointer hover:scale-115 transition-transform duration-300'><FaGithub /></a>
          <a href="https://x.com/Imran___02" target="_blank" className='cursor-pointer hover:scale-115 transition-transform duration-300'><FaXTwitter /></a>
          <a href="#1"  className='cursor-pointer text-red-400 hover:scale-115 transition-transform duration-300'><FaInstagram /></a>
          <a href="https://www.facebook.com/imran.shaikh.562433"target="_blank"  className='cursor-pointer text-blue-500 hover:scale-115 transition-transform duration-300'><FaFacebookSquare /></a></ul>
          <div className="location flex justify-center items-center   text-center pt-3 ">
        <p className='flex text-slate-400 text-sm  '><FaLocationDot className=' h-5  pr-1.5 text-sm  text-red-500 text-center' /> Krishnanagar, Nadia.  West Bengal</p>
      </div>
        </div>
 
         
          
      </div>
       {/* <div className="location flex justify-center items-center  bg-gradient-to-r from-slate-800 to-indigo-950 ">
        <p className='flex text-slate-400 text-sm '><FaLocationDot className=' h-5   pr-1.5 text-sm text-red-500 text-center' /> Krishnanagar, Nadia. West Bengal</p>
      </div> */}

      <div className="h-10 md:h-6 bg-slate-950 flex justify-center items-center">

        <ul className='text-sm text-white'>

          <li className='flex flex-row gap-2'><FaCopyright className='mt-1 text-sm' />Copyright 2025 . Made by Imran Shaikh</li>
        </ul></div></>
  )
}

export default Footer