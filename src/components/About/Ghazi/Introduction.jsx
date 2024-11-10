import React from 'react'
import GhaziImg from"../../../assets/GhaziPh2.jpeg"
import { FaLinkedin } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className='h-screen '>
        <div className='container h-screen flex gap-10 py-20'>
            {/* image */}
            <div className='  '>
                <img src={GhaziImg} alt="img"  className=' h-full w-fit' />
            </div>
            {/* text */}
            <div className='flex flex-col  w-4/6  px-10'>
                <h1 className='text-4xl text-cyan-700 mb-4 '> INTRODUCTION </h1>
                {/* Blue line */}
                <div className="flex justify-center w-16 h-1 bg-cyan-700 mb-4 "></div>   
                <p className='text-justify '>
                Dr. Ghazi Kablouti is the founder and CEO of XRG Impact Management Advisory, a firm dedicated to helping organizations achieve sustainable growth and navigate complex challenges. With a Ph.D. in [Field/Discipline] from [University Name] and over [X years] of experience in [relevant fields like corporate strategy, sustainability], Dr. Kablouti is a respected expert in impact management and strategic consulting. His work focuses on aligning corporate goals with measurable social and environmental impact, making him a trusted advisor to corporations, financial institutions, and regulatory bodies worldwide.
                </p> <br />
                <p className='text-justify pb-5 '>
                Dr. Ghazi Kablouti is the founder and CEO of XRG Impact Management Advisory, a firm dedicated to helping organizations achieve sustainable growth and navigate complex challenges. With a Ph.D. in [Field/Discipline] from [University Name] and over [X years] of experience in [relevant fields like corporate strategy, sustainability], Dr. Kablouti is a respected expert in impact management and strategic consulting. His work focuses on aligning corporate goals with measurable social and environmental impact, making him a trusted advisor to corporations, financial institutions, and regulatory bodies worldwide.
                </p>
                {/* buttons links */}
                <div className='flex gap-5'>
                <button class="flex items-center rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white t hover:bg-blue-500  " type="button">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1.5">
                      <path fill-rule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
                     </svg>
 
                      Upload Files
                    </button>
                    <a href="https://www.linkedin.com/in/ghazikablouti/ "  target="_blank"><FaLinkedin className=' text-4xl text-sky-600' /></a>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Introduction