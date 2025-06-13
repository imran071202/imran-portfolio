import React from 'react'

const Project = () => {
    return (
        <>
            <div id='Project' name="Project" className="">
                <p className=' bg-gradient-to-r from-slate-200 to-indigo-200 text-3xl flex flex-col justify-center items-center font-bold mt-10 mb-7 md:mb-12'>Projects <span className='h-1 rounded-full mt-2 bg-green-700 w-10'></span></p>
                {/* 1 */}
                <div className="projectOne  w-full items-center flex flex-col md:flex-row justify-center mb-5 md:mb-40">
                    <div className=" w-90 md:w-160 lg:w-175 flex flex-col justify-center items-center"> <img src="./photo/homeroots.png" className='h-45 w-80 md:h-72 md:w-130 lg:w-140 border-10 border-slate-600 rounded-t-md' alt="" />
                        <img src="./photo/laptop1.png" className='w-90 md:w-165' alt="" />
                    </div>
                    <div className="w-90  md:w-125 h-100 md:h-100  flex justify-around flex-col items-center px-6 "><p><b className='text-3xl text-green-700 '> Home Roots - Real Estate Website</b> <br /><span className='text-lg'>As part of my web development journey, I built a fully responsive Home Roots (Real Estate Website) where users can explore properties, connect with agents, and either buy or sell homes easily. The goal of this project was to simulate a real-world platform and improve my development skills. <br /><b className='font-semibold'>Technologies Used:
                        HTML, CSS,

                        Tailwind CSS,

                        React.js,

                        Next.js</b></span> </p>
                        {/* <button>Click</button> */}
                    </div>
                </div>
                {/* 2 */}
                <div className="projectOne w-full items-center flex flex-col md:flex-row justify-center mb-5 md:mb-40">
                    <div className=" w-90 md:w-160 lg:w-175 flex flex-col justify-center items-center"> <img src="./photo/net.png" className='h-45 w-80 md:h-72 md:w-130 lg:w-140 border-10 border-slate-600 rounded-t-md' alt="" />
                        <img src="./photo/laptop1.png" className='w-90 md:w-165' alt="" />
                    </div>
                    <div className="w-90 md:w-120 h-90 md:h-100 flex justify-center flex-col items-center px-4 "><p><b className='text-3xl  text-green-700'>Netflix Clone </b><br /><span className='text-lg'>I built a Netflix Clone to practice frontend design and layout skills using HTML, CSS, and Tailwind CSS. The aim was to replicate the clean and stylish interface of Netflix while improving my understanding of responsive web design and modern UI structure. <br /> <b className='font-semibold'>Technologies Used:
                        HTML,

                        CSS,

                        Tailwind CSS,
                        JavaScript</b></span></p>
                        {/* <button>Click</button> */}
                    </div>
                </div>
                {/* 3 */}
                <div className="projectOne  w-full items-center flex flex-col md:flex-row justify-center mb-5 md:mb-40">
                    <div className="w-90 md:w-160 lg:w-175 flex flex-col justify-center items-center"> <img src="./photo/Msi.png" className='h-45 w-80 md:h-72 md:w-130 lg:w-140 border-10 border-slate-600 rounded-t-md' alt="" />
                        <img src="./photo/laptop1.png" className='w-90 md:w-165' alt="" />
                    </div>
                    <div className="w-90 md:w-120  h-90 md:h-80 flex justify-center flex-col items-center px-4 "><p> <b className='text-3xl text-green-700'> MSI Website Homepage</b><br /><span className='text-lg'>I recreated the MSI (Micro-Star International) homepage to practice designing a real-world tech brand landing page. The goal was to capture the gaming aesthetic and layout style of a leading hardware company while using modern frontend tools.</span> <br /><b className='font-semibold'> Technologies Used:
                        HTML,

                        CSS

                        </b></p>
                        {/* <button>Click</button> */}
                    </div>
                </div>
                {/* 4 */}
                <div className="projectOne w-full items-center flex flex-col md:flex-row justify-center mb-5 md:mb-20">
                    <div className=" w-90 md:w-160 lg:w-175 flex flex-col justify-center items-center"> <img src="./photo/amazon.png" className='h-45 w-80 md:h-72 md:w-130 lg:w-140 border-10 border-slate-600 rounded-t-md' alt="" />
                        <img src="./photo/laptop1.png" className='w-90 md:w-165' alt="" />
                    </div>
                    <div className="w-90 md:w-120 h-90 md:h-80 flex justify-center flex-col items-center px-4 "><p><b className='text-3xl text-green-700'>Amazon Clone E-commerce </b><br /><span className='text-lg'>The Amazon Clone project focuses on replicating the layout and key components of one of the largest e-commerce platforms. This was a great exercise in building clean, scalable UIs and understanding product listing structure</span><br /><b className='font-semibold'>Technologies Used:
                        HTML,

                        CSS,
                    </b></p>
                        {/* <button>Click</button> */}
                    </div>
                </div>



            </div>
            <div className="partition border-b-1  border-gray-500"></div>

        </>
    )
}

export default Project