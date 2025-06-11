import React from 'react'
import { useState } from 'react';
import { FaFileDownload } from "react-icons/fa";
const Resume = () => {
     const [isOpen, setIsOpen] = useState(false);

     const handleDownloadJpg = () => {
    const link = document.createElement('a');
    link.href = './photo/Imran_Shaikh_cv.jpg'; // Replace with your image path
    link.download = './photo/Imran_Shaikh_cv.jpg';
    link.click();
  };

    const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = './photo/Imran_Shaikh_cv.pdf'; // Replace with your image path
    link.download = './photo/Imran_Shaikh_cv.pdf';
    link.click();
  };


  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
   <>
   <p className=' text-3xl flex flex-col justify-center items-center font-bold mt-10 mb-7 md:mb-1'>Resume <span className='h-1 rounded-full mt-2 bg-green-700 w-10'></span></p>

   <div id='Resume' name="Resume" className=" bg-gradient-to-r from-slate-200 to-indigo-200 h-160 mt-3 flex justify-center items-center flex-col md:flex-row">
     
    <div className="pic h-100 w-80 md:h-140 md:w-100 md:ml-40">
        <img src="./photo/Imran_Shaikh_cv.jpg" className='h-100 w-80 md:h-140 md:w-100 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer border-1' alt=""  onClick={handleImageClick} />
    </div>




    {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
      Thumbnail Image
      <img
        src="./photo/Imran_Shaikh_cv.jpg" 
        alt="Zoom"
        className="cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        onClick={handleImageClick}
      /> */}

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
          onClick={handleClose}
        >
          <img
            src="./photo/Imran_Shaikh_cv.jpg" // higher resolution image
            alt="Zoomed"
            className="max-w-3xl max-h-[60vh] md:max-h-[90vh] rounded-lg transition-transform duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    



    <div className="btn  h-50 w-80 md:w-120 flex flex-col justify-center items-center">
       
        <div className="docBtn"><button onClick={handleDownloadJpg} className='bg-red-100  hover:bg-red-300 hover:text-red-900 cursor-pointer px-20 py-5 rounded-lg font-semibold text-xl md:text-2xl mt-5 flex text-black'><FaFileDownload className='text-red-700 mt-1 mr-2 md:mr-5'/>Download Jpg</button></div>

         <div className="pdfBtn"><button onClick={handleDownloadPdf} className='bg-red-500 hover:bg-red-700 hover:text-white cursor-pointer px-20 py-5 rounded-lg font-semibold text-xl md:text-2xl mt-5 flex '><FaFileDownload className='mt-1 mr-3 md:mr-5'/>Download Pdf</button></div>
    </div>
   </div>
    <div className="partition border-b-1 mt-7 border-gray-300"></div>
   </>
  )
}

export default Resume