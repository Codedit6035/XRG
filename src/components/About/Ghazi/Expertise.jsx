import React from 'react'
import Image from '../../../assets/expertiseph.jpeg'
import ExpertiseData from "../../../data/ExpertiseData";
import Certificates from './Expertise/Certificates';
import { CiLinkedin } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import { motion } from 'framer-motion'; 

const  Expertise = () => {
  return (
    <div>
      <div className='container  flex flex-col gap-10 py-10  font-raleway  text-base text-primary'>
        {/*quote img*/}
        <div className='flex gap-1'>
        <motion.div className='flex   text-2xl py-10  text-justify justify-center items-center flex-1 bg-shade2/50'
                                   initial={{ x: '-100%', opacity: 0 }}
                                   whileInView={{ x: 0, opacity: 1 }}
                                   transition={{ duration: 1.1, ease: "easeInOut" }}
                                   viewport={{ once: true }}>
          <p className='px-10  font-bold  '>“Mastery is not a question of intelligence, but a question of persistence & resilience” </p>
        </motion.div>
        <motion.div className='flex-1'
                                   initial={{ x: '100%', opacity: 0 }}
                                   whileInView={{ x: 0, opacity: 1 }}
                                   transition={{ duration: 1.1, ease: "easeInOut" }}
                                   viewport={{ once: true }}>
          <img src={Image} alt="" className=' size-full' />
        </motion.div>
        </div>

        {/* text */}
        <div className=" flex flex-col  ">
          {ExpertiseData.map((data, index) => (
            <div key={index}  className={`flex py-5 gap-10  pb-10 px-5   ${
        index % 2 === 0 ? '' : 'bg-shade2/50'
      } `}>
              <div className='w-2/6'>
                <h1           className="text-xl mb-4 font-semibold  text-shade1" >
                  {data.title}
                </h1>
                <div   className="w-16 h-1  mb-4 bg-shade5" ></div>
              </div>
              <div           className="w-4/6 text-justify ">
                <p>{data.text}</p>
              </div>
            </div>

      ))}                  
        </div> 
                      {/* certificates*/}
                      <div className=' flex-1 '>
                  <h1 className='text-xl bg-shade1 text-white mb-4 font-semibold py-1 px-2'>Courses and certificates</h1>
                  {/* Blue line */}
                  <div className="w-16 h-1 bg-shade5 mb-4  "></div>  
                  <Certificates/>

                </div>
                {/* links*/}
                <div className='container flex flex-col gap-10'>
        {/* Get in touch link */}
        <div className=" flex flex-col  justify-center items-center  gap-5 ">
             <a href="/get in touch" className='font-bold text-shade7 '><span>let’s get in touch</span></a>
             <a href="https://www.linkedin.com/in/ghazikablouti/ "  target="_blank"><CiLinkedin className=' text-5xl  text-shade7  hover:text-primary'/></a>
        </div>
        
        {/* services link */}
        <div className="flex  flex-col gap-5 justify-center items-center  bg-shade2/50 p-5">
        <h1 className='text-2xl '>
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
  )
}

export default  Expertise

{/* <ul className='flex flex-col gap-5 custom-circle-list'>
<li>Academic Lectures & Training: Designed and delivered academic courses focused on "Business & Society," with an emphasis on combining legal and management approaches</li>
<li>Sustainability in Energy Technologies (power generation, transmission, and distribution)</li>
<li>Product-level environmental impact assessment methodologies: Product Carbon Footprint (PCF) and Life Cycle Assessment (LCA) according to ISO 14040, ISO 14044, and ISO 14067, as well as sector-specific methodologies across industries like Metals, Chemicals, and Oil & Gas</li>
<li>Greenhouse Gas (GHG) Scope 3 Accounting covering both upstream and downstream activities</li>
<li>Sustainability Data Management Software (requirements engineering, selection, and implementation of sustainability data management software: supply chain management, product- and corporate-level sustainability reporting)</li>
</ul> */}