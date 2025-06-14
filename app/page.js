"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Body from '@/components/Body'
import About from '@/components/About'
import Project from '@/components/Project'
import Resume from '@/components/Resume'
import Contact from "@/components/Contact"
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast';

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <Navbar/>
        <Body />
        <About />
        <Project />
        <Resume />
        <Contact />
        <Footer />
      </div>
      <Toaster position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 9000,
          removeDelay: 3000,
          style: {

          },

          // Default options for specific types
          success: {
            duration: 5000,
            iconTheme: {
              primary: '',
              secondary: 'black',
            },
          },
        }} />

    </>
  )
}

export default page