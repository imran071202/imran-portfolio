"use client"
import React, { useState, useEffect } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { BiSolidSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { Link } from 'react-scroll';
import { motion } from "motion/react"


const Navbar = () => {
    const [menu, setmenu] = useState(false)

    useEffect(() => {
    if(menu){
      document.body.style.overflow = 'hidden'
    }else{
 document.body.style.overflow = 'auto'
    }return ()=>{
 document.body.style.overflow = 'auto'
    }
  
  }, [menu])
  

    const navMenu = [
        // {
        //     id: 1,
        //     text: "Home"
        // },
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

        


    return (
        <>
            <div id='Home' className="nav fixed w-full z-50 opacity-98   text-slate-100 bg-gradient-to-r from-indigo-950 to-slate-700 h-16 lg:h-17 md:pr-5  flex justify-between   ">
                <div className="logo sm: w-1/3 md:w-1/4 h-full justify-center items-center font-semibold flex flex-col pl-5">
                    <a href="/" className='hover:scale-110 transition-transform duration-300 cursor-pointer'><p className='text-2xl'>&lt;Imr<span className='text-green-600'>an</span>/&gt;</p>
                    <p className='text-sm text-center'>Web Developer</p></a>
                </div>

                {/* desktop menu */}
                <div className="  hidden  h-full  w-2/5 md:flex  ">
                    <ul className='hidden md:flex  w-full md:justify-evenly md:items-center'>
                        <a href="#Body" className='hover:scale-110 transition-transform duration-300 cursor-pointer text-base font-semibold hover:border-b-2'> Home</a>
                        {navMenu.map(({ id, text }) => (
                           <li key={id} className='hover:scale-110 transition-transform duration-300 cursor-pointer text-base font-semibold hover:border-b-2'>
                            <Link to={text}
                            smooth={true}
                            duration={150}
                            offset={-70}
                            activeClass='active'>{text}</Link></li>
                        ))}
                    
                    {/* <li onClick={change} className=' flex justify-center '>{mode == "light" ? <BiSolidSun className='text-3xl text-yellow-500 cursor-pointer' /> : <FaRegMoon className='cursor-pointer text-2xl text-indigo-400' />}</li> */}
                    </ul>

                    {/* <div className="flex justify-center items-center w-10 mr-10"><BiSolidSun className='text-3xl cursor-pointer text-yellow-500' /></div> */}

                </div>
                <div onClick={() => setmenu(!menu) } className="flex justify-center items-center w-15 md:hidden">
                    {menu ? <IoClose className='text-4xl' /> : <TiThMenu className='text-3xl cursor-pointer' />}</div>

                {/* mobile menu */}

            </div>

            {
            menu && <motion.div
             initial={{ x: "-100%" }}
                animate={{ x: "-0%" }}
                 transition={{ duration: 0.5 }}
                 whileTap={{ scale: 1.1 }}

             className="menu h-screen top-16 pb-30  bg-gradient-to-r from-slate-300 to-indigo-300  w-full fixed z-50  flex flex-col justify-center items-center md:hidden">
                <a href="#Body" onClick={()=>setmenu(false)} className='hover:scale-110 transition-transform duration-300 cursor-pointer text-xl pb-9 font-bold md:hidden '> Home</a>

              <ul  className='space-y-9 text-center md:hidden '> {
                    navMenu.map(({ id, text }) => (
                        <li  key={id} className='text-xl font-bold md:hidden '>
                            <Link onClick={()=>setmenu(false)}
                             to={text}
                            smooth={true}
                            duration={150}
                            offset={-70}
                            activeClass='active'>{text}</Link></li>

                    ))}
                     {/* <li onClick={change} className=' flex justify-center '>{mode == "light" ? <BiSolidSun className='text-3xl text-yellow-500 cursor-pointer' /> : <FaRegMoon className='text-2xl text-indigo-400 cursor-pointer' />}</li> */}
                </ul>
                

            </motion.div>
            }

        </>
    )
}

export default Navbar