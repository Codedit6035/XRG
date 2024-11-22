import React from 'react'
import Awards from './Leadership/Awards'
import Achievments from './Leadership/Achievments'
import { CiLinkedin } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import AchievmentImg from "../../../assets/achievement.jpg"


const  Expertise = () => {
  return (
    <div>
      <div className=' flex flex-col gap-10 py-10  '>
        {/*slogan*/}
        <div className=' text-2xl py-10 text-center  '>
          <p className='px-10 text-primary font-bold'>“If you want to go fast, go alone. If you want to go far, go together” <span className="text-lg ">– African Proverb</span> </p>
        </div>
        {/*Img*/}
        <div>
          <img src={AchievmentImg} alt="" className='w-fit' />
        </div>
        <Achievments/>
        <Awards/>

                {/* links*/}
                <div className=' container flex flex-col gap-10'>
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
  )
}

export default  Expertise