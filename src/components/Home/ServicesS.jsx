import React from 'react'
import { RiSpeakFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { PiArrowElbowDownRight } from "react-icons/pi";
const ServicesS = () => {
  return (
    <div className='pt-10 pb-12  '>
        {/* Header section */}
        <div className="mb-10  bg-white  animate-slideInFromLeft w-full pl-20   text-black">
          <h1 className="text-left   text-3xl font-Raleway ">
            Services
          </h1>
        </div>
        <div>
        <p data-aos="fade-up" className=" max-w-[800px]  text-xl font-semibold text-primary text-center  mx-auto mb-10">
          At XRG Advisory, we pride ourselves on our commitment to fostering growth and innovation in every organization we collaborate with. 
          </p>
        </div>   
         {/* body */}  
         <div className='flex justify-center '>  
        <div className=' w-9/12  flex justify-between gap-5  '>
            <div className='flex flex-1 flex-col gap-5 space-y-3 bg-zinc-200 p-5 rounded-md'
                            data-aos="fade-up"
                            data-aos-delay="0"
                            >
              <a href="/XRG-App/services "  target="_blank"><IoMdPeople  className=' text-4xl text-secondary' /></a>
              <h1 className='font-custom text-4xl text-secondary'>Advising</h1>
            </div>
            <div className='flex flex-1 flex-col gap-5 space-y-3 bg-zinc-200 p-5 rounded-md'
                            data-aos="fade-up"
                            data-aos-delay="200">
              <a href="/XRG-App/services"  target="_blank"><FaChalkboardTeacher className=' text-4xl text-secondary' /></a>
              <h1 className='font-custom text-4xl text-secondary'>Educating</h1>
            </div>
            <div className='flex flex-1 flex-col gap-5 space-y-3 bg-zinc-200 p-5 rounded-md'
                            data-aos="fade-up"
                            data-aos-delay="400">
              <a href="/XRG-App/services"  target="_blank"><RiSpeakFill className=' text-4xl text-secondary' /></a>
              <h1 className='font-custom text-4xl text-secondary'>Speaking</h1>
            </div>
            <div className='relative flex flex-1 space-y-3 '
                            data-aos="fade-up"
                            data-aos-delay="600">
              <a href="/XRG-App/services"   className='flex absolute bottom-5 justify-start items-center'><PiArrowElbowDownRight className=' text-5xl text-primary  ' /> <span className='text-primary text-lg' >Learn more</span></a> 
              
            </div>
        </div>
        </div>  
    </div>
  )
}

export default ServicesS