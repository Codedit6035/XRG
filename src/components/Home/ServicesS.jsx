import React from 'react'
import { RiSpeakFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { PiArrowElbowDownRight } from "react-icons/pi";
const ServicesS = () => {
  return (
    <div className='pt-10 pb-12  font-Raleway'>
        {/* Header section */}
        <div className="mb-10  bg-white  animate-slideInFromLeft w-full pl-20   text-black">
          <h1 className="text-left   text-3xl font-Raleway text-primary ">
            Services
          </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
        </div>
        <div>
        <p data-aos="fade-up" className=" max-w-[800px]  text-xl font-semibold text-primary text-center  mx-auto mb-10">
          At XRG Advisory, we pride ourselves on our commitment to fostering growth and innovation in every organization we collaborate with. 
          </p>
        </div>   
         {/* body */}  
         <div className='flex justify-center '>  
        <div className=' w-9/12  flex justify-between gap-5  '>
            <div className='flex flex-1 flex-col gap-5 space-y-3 bg-primary p-5 rounded-md text-white'
                            data-aos="fade-up"
                            data-aos-delay="0"
                            >
              <a href="/services "><IoMdPeople  className=' text-5xl ' /></a>
              <h1 className=' text-3xl '>Advising</h1>
            </div>
            <div className='flex flex-1 flex-col gap-5 space-y-3 bg-primary p-5 rounded-md text-white'
                            data-aos="fade-up"
                            data-aos-delay="200">
              <a href="/services" ><FaChalkboardTeacher className=' text-5xl ' /></a>
              <h1 className=' text-3xl '>Educating</h1>
            </div>
            <div className='flex flex-1 flex-col gap-5 space-y-3 bg-primary p-5 rounded-md text-white'
                            data-aos="fade-up"
                            data-aos-delay="400">
              <a href="/services"  ><RiSpeakFill className=' text-5xl ' /></a>
              <h1 className='text-3xl '>Speaking</h1>
            </div>
            <div className='relative flex flex-1 space-y-3 '
                            data-aos="fade-up"
                            data-aos-delay="600">
              <a href="/services"   className='flex absolute bottom-5 justify-start items-center'><PiArrowElbowDownRight className=' text-5xl text-primary  ' /> <span className='text-primary text-lg' >Learn more</span></a> 
              
            </div>
        </div>
        </div>  
    </div>
  )
}

export default ServicesS