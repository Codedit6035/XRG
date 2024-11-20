import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const ContactS = () => {
  return (
    <div>
    <div className='pt-14 pb-12  font-Raleway'>

         {/* body */}  
         <div>

         <div className=" container flex  flex-col items-center justify-center  gap-3   ">
            <a href="/get in touch"><button className='bg-shade7 hover:bg-primary  text-white border-2 border-gray-400 font-bold  text-xl px-10 py-2 '>Get in Touch</button></a>
            {/* Contact */}
            <h1>contact@xrg-advisory.com</h1>
            <div className='flex items-center text-gray-900  mt-7'>
                <h1 className='pr-5 border-r-2 border-gray-400  font-semibold'>Follow us</h1>
                <div>
                   <ul className='flex gap-5 pl-3 text-2xl '>
                    <a href="https://www.linkedin.com/in/ghazikablouti/ "  target="_blank"><CiLinkedin /></a>
                      <CiInstagram />
                      <FaXTwitter />              
                    </ul>
                </div>
            </div> 
         </div>       
         </div>


    </div>
    </div>
  )
}

export default ContactS