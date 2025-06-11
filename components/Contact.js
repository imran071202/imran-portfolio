import React from 'react'
import toast from 'react-hot-toast';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6b87daf5-3f0f-47ce-918f-f53190fb7881");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Form Submitted Successfully");
      toast.success("Your Message Submitted Successfully ")
      event.target.reset();
    } else {
      // console.log("Error", data);
      // setResult(data.message);
      toast.error('Something went wrong')
    }
  };
  return (
    <>
    <div id='Contact' name="Contact" className=" bg-gradient-to-r from-slate-200 to-indigo-200  flex flex-col justify-center items-center mt-12 mb-10 md:mb-20  w-full">
      
     <p className='text-3xl flex flex-col justify-center items-center font-bold mb-7 md:mb-1'>Contact <span className='h-1 rounded-full mt-2 bg-green-700 w-10'></span></p>

 


        <form onSubmit={onSubmit}>
          <div className="h-125  lg:w-130  w-80 flex flex-col">
                    <label className='mb-0.5 font-bold'>Your name</label>
                    <input className=" py-3 px-2 rounded-lg mb-4 border-1 outline-0" type="text" name="name" placeholder='Enter your name' required />

                    <label className='mb-0.5 font-bold'>Your phone number</label>
                    <input className=" py-3 px-2 rounded-lg mb-4 border-1  outline-0" type="text" name="Number" placeholder='Enter number' required />

                    <label className='mb-0.5 font-bold'>Your mail id</label>
                    <input className=" py-3 px-2 rounded-lg mb-4 border-1 outline-0" type="email" name="Mail id" placeholder='Enter mail id' required />

                    {/* <label className='mb-0.5 font-bold'>Enter your message</label>
                    <input className="bg-white py-12 px-1 rounded-lg mb-4 border-0 outline-0" type="text" placeholder='Enter message' /> */}

                    <label className='mb-1 font-bold'>Enter your message</label>
                    <textarea name="message" id="" rows="4" cols="50" className= 'border-1  outline-0 rounded-lg px-2 pt-3 mb-4' placeholder='Enter your message' required ></textarea>

                    <button className=' bg-green-700 text-white  h-15 w-2/2 rounded-xl cursor-pointer font-bold hover:bg-green-900 flex justify-center items-center  '>Send Message</button>
                </div></form></div>
    
    </>
  )
}

export default Contact