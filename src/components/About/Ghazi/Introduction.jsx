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
                    <button className='p-1 boder-sky-600 border-2 px-5'>Resume</button>
                    <a href="https://www.linkedin.com/in/ghazikablouti/ "  target="_blank"><FaLinkedin className=' text-4xl text-sky-600' /></a>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Introduction