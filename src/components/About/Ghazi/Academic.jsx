import React from 'react'
import { FaDownload } from "react-icons/fa";
import AcademiaData from '../../../data/AcademiarightData';
import AcademialeftData from '../../../data/AcademialeftData';
import AcademiarightData from '../../../data/AcademiarightData';
import AcademiaImg from "../../../assets/academiaimg.jpg"

const Academic = () => {
  return (
    <div className=' container py-10 '> 
            {/*slogan*/}
            <div className='  py-10  '>
              <img src={AcademiaImg } alt="" />

            </div>
             <div className='flex flex-col gap-10  ' >
             {/* text */}
              <div className='flex gap-1' >
                {/* left*/}
                <div className=" ">
                {AcademialeftData.map((para, index) => (
                <p key={index} className="text-base mb-4 text-justify">
                    {para}
                </p>
                ))}     
                </div>  
                 {/* right */}
                <div className=" ">
                {AcademiarightData.map((para, index) => (
                <p key={index} className="text-base mb-4 text-justify">
                    {para}
                </p>
                ))}     
                </div>            
                </div>   

                {/*publications*/}
                <div className='  flex  flex-1 flex-col  '>
                <h1 className='text-xl text-shade1 mb-4 font-semibold '>Links to download documents</h1>
                  {/* Blue line */}
                  <div className="w-16 h-1 bg-shade5 mb-4  "></div>
                <div className='  flex   flex-col gap-5'>         
        {/*element2*/}
        <div className='flex justify-between border-l-4 border-shade5 bg-shade2/10 p-5 mr-20  '>
          <div className='flex flex-col '>
            <h1 className='font-semibold text-xl text-shade1'>Dr. Ghazi Kablouti Publications List  </h1>
          </div>
          <a  href="/thesis.pdf" 
              download="Dr_Ghazi_List_Of_Publications.pdf" >
            <button>
              <FaDownload className='text-xl text-shade7  hover:text-primary' />
            </button>
           </a>
        </div>
        {/*element2*/}
        <div className='flex justify-between border-l-4 border-shade5 bg-shade2/10 p-5 mr-20  '>
          <div className='flex flex-col '>
            <h1 className='font-semibold text-xl text-shade1'>Dr. Ghazi Kablouti Ph.D. Thesis Outline</h1>
          </div>
          <a  href="/publications.pdf" 
              download="Dr_Ghazi_List_Of_Publications_2.pdf" >
            <button>
              <FaDownload className='text-xl text-shade7  hover:text-primary' />
            </button>
           </a>
        </div>
                        {/* links*/}
                <div>
                  <h1>Link (download) Dr. Ghazi Kablouti (Profile document)</h1>
                  <h1>Link to LinkedIn Profile (https://www.linkedin.com/in/ghazikablouti/)</h1>
                  <h1>Get in Touch</h1>
                </div>


      </div>
      </div>
      
    </div>

    </div>
  )
}

export default Academic