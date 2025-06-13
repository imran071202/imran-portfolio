import React from 'react'
import { FaCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="Footer h-85 md:h-35 bg-[#232126] flex flex-col md:flex-row md:justify-around justify-around items-center border-t-1 ">

       
        <div className="menu text-white flex justify-center mt-5 order-1 md:order-2  ">
          <ul className='flex space-y-5 flex-col md:flex-row justify-center md:space-x-10 md:ml-15 text-sm md:font-semibold'>
            <a href="#Body"><li id='' className='hover:underline hover:scale-100  hover:pt-2 hover:text-green-200'>Home</li></a>
            <a href="#About"><li id='' className='hover:underline hover:scale-100 hover:pt-2 hover:text-green-200'>About</li></a>
            <a href="#Project"><li id='' className='hover:underline hover:scale-100 hover:pt-2 hover:text-green-200'>Project</li></a>
            <a href="#Resume"><li id='' className='hover:underline hover:scale-100 hover:pt-2 hover:text-green-200'>Resume</li></a>
            <a href="#Contact"><li id='' className='hover:underline hover:scale-100 hover:pt-2 hover:text-green-200'>Contact</li></a>
          </ul>
        </div>
        <div className="icon text-white mt-5 mb-3 order-2 md:order-3">
          {/* <p className='mb-2 text-xl text-center'>Follow</p> */}
          <ul className='flex space-x-4 text-xl md:text-2xl md:space-x-6' >
            <a href="https://www.linkedin.com/in/imran-shaikh-163372241/"target="_blank"  className='cursor-pointer text-sky-500'><FaLinkedin /></a>
          <a href="https://github.com/imran071202" target="_blank" className='cursor-pointer'><FaGithub /></a>
          <a href="https://x.com/Imran___02" target="_blank" className='cursor-pointer'><FaXTwitter /></a>
          <a href="#1"  className='cursor-pointer text-red-400'><FaInstagram /></a>
          <a href="https://www.facebook.com/imran.shaikh.562433"target="_blank"  className='cursor-pointer text-blue-500'><FaFacebookSquare /></a></ul>
        </div>
 <a href="#Home" ><div className="logo order-3 md:order-1 text-white text-2xl md:ml-10 cursor-pointer"><p>&lt;Imr<span className='text-green-600'>an</span>/&gt;</p>
          <p className='text-sm text-center'>Web Developer</p></div></a>
      </div>
      <div className="h-10 md:h-8 bg-slate-950 flex justify-center items-center">

        <ul className='text-sm text-white'>

          <li className='flex flex-row gap-2'><FaCopyright className='mt-1 text-sm' />Copyright 2025 . Made by Imran Shaikh</li>
        </ul></div></>
  )
}

export default Footer