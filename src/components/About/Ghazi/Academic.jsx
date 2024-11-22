import React from 'react'
import AcademiaData from '../../../data/AcademiarightData';
import AcademialeftData from '../../../data/AcademialeftData';
import AcademiarightData from '../../../data/AcademiarightData';
import { CiLinkedin } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import AcademiaImg from "../../../assets/academia.jpg"
import { motion } from 'framer-motion';

const Academic = () => {
  return (
    <div className='container  flex flex-col gap-10 py-10  font-raleway  text-base'> 
        {/*quote img*/}
        <div className='flex gap-1'>
        <motion.div className='flex   text-2xl py-10  text-justify justify-center items-center flex-1 bg-shade2/50'
                                   initial={{ x: '-100%', opacity: 0 }}
                                   whileInView={{ x: 0, opacity: 1 }}
                                   transition={{ duration: 1.1, ease: "easeInOut" }}
                                   viewport={{ once: true }}>
          <p className='px-10 text-primary font-bold  '>“Education is the most powerful weapon which you can use to change the world."  – <br /> <span className='text-lg text-shade6'>Nelson Mandela</span></p>
        </motion.div>
        <motion.div className='flex-1'
                                   initial={{ x: '100%', opacity: 0 }}
                                   whileInView={{ x: 0, opacity: 1 }}
                                   transition={{ duration: 1.1, ease: "easeInOut" }}
                                   viewport={{ once: true }}>
          <img src={AcademiaImg} alt="" className=' size-full' />
        </motion.div>
        </div>
         
             {/* text */}
              <div className='' >
                {/* left*/}
                <div className=" flex flex-col gap-5 text-justify">
                {AcademialeftData.map((para, index) => (
                <p key={index} className= {`rounded-s-sm p-3 text-shade5  ${
                  index % 2 === 0 ? '' : 'bg-gray-300'
                }`}
                >
                    {para.text}
                </p>
                ))}     
                </div>  
           
  

                {/*publications*/}
                <div className='  flex  flex-1 flex-col  pt-10 '>
                <h1 className='text-xl text-shade1 mb-4 font-semibold '>Links to download documents</h1>
                  {/* Blue line */}
                  <div className="w-16 h-1 bg-shade5 mb-4  "></div>
                <div className='  flex   flex-col gap-5'>         
        {/*element2*/}
        <div className='flex justify-between border-l-4 border-shade5 bg-shade2/10 p-5 mr-20  '>
          <div className='flex flex-col '>
            <h1 className='font-semibold text-xl text-shade1'>Dr. Ghazi Kablouti Publications List  </h1>
          </div>
          <a  href="/publications.pdf" 
              download=" Dr. Ghazi Kablouti Ph.D. Thesis Outline.pdf" >
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
          <a  href="/thesis.pdf" 
              download="Dr. Ghazi Kablouti Publications List.pdf" >
            <button>
              <FaDownload className='text-xl text-shade7  hover:text-primary' />
            </button>
           </a>
        </div>
 
                {/* links*/}
                <div className='pt-10 flex flex-col gap-10'>
        {/* Get in touch link */}
        <div className=" flex flex-col  justify-center items-center  gap-5 ">
             <a href="/get in touch" className='font-bold text-shade7 '><span>let’s get in touch</span></a>
             <a href="https://www.linkedin.com/in/ghazikablouti/ "  target="_blank"><CiLinkedin className=' text-5xl  text-shade7  hover:text-primary'/></a>
        </div>
        
        {/* services link */}
        <div className="flex  flex-col gap-5 justify-center items-center  bg-shade2 p-5">
        <h1 className='text-2xl'>
        Dr. Ghazi Kablouti biography 
          </h1>
        <a  href="/Dr. Ghazi Kablouti.pdf" 
                      download="Dr_Ghazi_Bio.pdf" >
                    <button class="flex gap-2 items-center bg-shade7 hover:bg-primary font-bold  text-xl text-white px-5 py-2 " >
                     <FaDownload className=' text-white' />
 
                     Download Bio
                    </button>
                    </a>
        </div>


                </div>



      </div>
      </div>
      
    </div>

    </div>
  )
}

export default Academic