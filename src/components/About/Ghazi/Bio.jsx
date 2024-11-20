import React, { useEffect, useState  } from 'react';
import GhaziImg from"../../../assets/GhaziPh2.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import BioData from "../../../data/BioData";
import { CiLinkedin } from "react-icons/ci";
const Bio = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setStartAnimation(true);
  }, []);

  return (
    <div className='py-10 container  font-raleway'>
        <div className='   py-10 flex-1  flex items-center gap-10 px-10 text-white  bg-secondary font-bold'>
          <h1 className=' text-2xl flex-1'>Dr. Ghazi Balkouti </h1>
          <p className=' flex-1 flex gap-5'><span>Envision. </span> <span>Lead. </span> <span>Inspire</span></p>
        </div>
        <div className=' flex gap-10 py-20'>
            {/* image */}
            <div className='flex-1  mt-2 relative overflow-hidden '>
                {/* Fixed Background Image */}
                <img src={GhaziImg}   
                           alt="img"
                           className={`inset-0 h-fit w-fit object-cover transition-transform  ${
                             startAnimation ? 'animate-zoomOut' : ''
                           }`}
                />
                {/* Animated Mask Layer */}
                <div
                 className={`absolute inset-0 bg-white transition-transform ${startAnimation ? 'animate-maskRevealBio' : ''}`}
                />

            </div>
            {/* text */}
            <div className='flex flex-1 flex-col  w-4/6  px-10 '>
                <h1 className=' text-xl text-shade1 mb-4 font-semibold '> Dr. Ghazi Balkouti </h1>
                {/* Blue line */}
                <div className="w-16 h-1 bg-shade5 mb-4  "></div>  
                {/* text */}
                <div className=" ">
                {BioData.map((para, index) => (
        <p key={index} className="text-base mb-4 text-justify">
          {para}
        </p>
      ))}                  
                </div>   

                {/* buttons links */}
                <div className='flex gap-5'>
                  <a  href="/Dr. Ghazi Kablouti.pdf" 
                      download="Dr_Ghazi_Bio.pdf" >
                    <button class="flex gap-2 items-center bg-shade7 hover:bg-primary font-bold  text-xl text-white border-2 border-gray-400 px-5 py-2 " >
                     <FaDownload className=' text-white' />
 
                     Download Bio
                    </button>
                    </a>
                    <a href="https://www.linkedin.com/in/ghazikablouti/ "  target="_blank"><CiLinkedin className=' text-5xl  text-shade7  hover:text-primary'/></a>

                </div>
                             {/* Get in touch link */}
        <div className=" flex   items-center  mt-10 ">
          <div className=''>
            <span>Any thoughts, need for support, </span>
             <a href="/get in touch" className='font-bold text-shade7'><span>let’s get in touch</span></a>
          </div>
        </div>
            </div>

        </div>

    </div>
  )
}

export default Bio