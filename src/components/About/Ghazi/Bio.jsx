import React, { useEffect, useState  } from 'react';
import GhaziImg from"../../../assets/GhaziPh2.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import BioData from "../../../data/BioData";

const Bio = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setStartAnimation(true);
  }, []);

  return (
    <div className='container '>
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
                    <button class="flex gap-2 items-center rounded-md bg-gradient-to-tr from-slate-950 to-shade1 py-2 px-4 border  text-center text-sm text-white t hover:bg-blue-500  " >
                     <FaDownload className=' text-white' />
 
                     Download Bio
                    </button>
                    </a>
                    <a href="https://www.linkedin.com/in/ghazikablouti/ "  target="_blank"><FaLinkedin className=' text-4xl text-sky-600' /></a>

                </div>
            </div>

        </div>
        {/* certificates*/}
    </div>
  )
}

export default Bio