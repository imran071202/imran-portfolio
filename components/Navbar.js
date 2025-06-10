"use client"
import React, { useState, useEffect } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { BiSolidSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [menu, setmenu] = useState(false)

    const navMenu = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Project"
        },
        {
            id: 4,
            text: "Resume"
        },
        {
            id: 5,
            text: "Contact"
        },]

        const [mode, setmode] = useState("light");
        const change = ()=> {
            if(mode === "light"){
                setmode("dark")
            }else{
                setmode("light")
            }

        } 
        useEffect(() => {
    document.querySelector("body").className = mode
  }, [mode])


    return (
        <>
            <div id='Home' className="nav h-18 lg:h-20 md:pr-5  flex justify-between   ">
                <div className="logo sm: w-1/3 md:w-1/4 h-full justify-center items-center font-semibold flex flex-col">
                    <a href="/"><p className='text-2xl'>&lt;Imr<span className='text-green-600'>an</span>/&gt;</p>
                    <p className='text-sm text-center'>Web Developer</p></a>
                </div>


                {/* desktop menu */}
                <div className=" sm: hidden h-full  w-2/5 lg:flex  ">
                    <ul className='sm:hidden lg:flex w-full lg:justify-evenly lg:items-center'>
                        {navMenu.map(({ id, text }) => (
                           <li key={id} className='cursor-pointer text-lg font-semibold hover:border-b-2'>
                            <Link to={text}
                            smooth={true}
                            duration={150}
                            offset={-70}
                            activeClass='active'>{text}</Link></li>
                        ))}
                    
                    <li onClick={change} className=' flex justify-center '>{mode == "light" ? <BiSolidSun className='text-3xl text-yellow-500 cursor-pointer' /> : <FaRegMoon className='cursor-pointer text-2xl text-indigo-400' />}</li></ul>

                    {/* <div className="flex justify-center items-center w-10 mr-10"><BiSolidSun className='text-3xl cursor-pointer text-yellow-500' /></div> */}

                </div>
                <div onClick={() => setmenu(!menu)} className="flex justify-center items-center w-15 lg:hidden">
                    {menu ? <IoClose className='text-4xl' /> : <TiThMenu className='text-2xl cursor-pointer' />}</div>

                {/* mobile menu */}

            </div>
            <div className="partition border-b-1  border-gray-300"></div>

            {
            menu && <div className="menu h-90 w-full  flex justify-center items-center lg:hidden">

                <ul className='space-y-7 text-center'> {
                    navMenu.map(({ id, text }) => (
                        <li key={id} className='text-xl font-semibold '>
                            <Link to={text}
                            smooth={true}
                            duration={150}
                            offset={-70}
                            activeClass='active'>{text}</Link></li>

                    ))}<li onClick={change} className=' flex justify-center '>{mode == "light" ? <BiSolidSun className='text-3xl text-yellow-500 cursor-pointer' /> : <FaRegMoon className='text-2xl text-indigo-400 cursor-pointer' />}</li>
                </ul>

            </div>
            }

        </>
    )
}

export default Navbar