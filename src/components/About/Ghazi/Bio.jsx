import React from 'react'
import GhaziImg from"../../../assets/GhaziPh2.jpg"
import { FaLinkedin } from "react-icons/fa";

const Bio = () => {
  return (
    <div className=' '>
        <div className='container flex gap-10 py-20'>
            {/* image */}
            <div className='flex-1  '>
                <img src={GhaziImg} alt="img"  className=' h-fit w-fit '  />
            </div>
            {/* text */}
            <div className='flex flex-1 flex-col  w-4/6  px-10'>
                <h1 className='text-4xl text-cyan-700 mb-4 '> Dr. Ghazi Balkouti </h1>
                {/* Blue line */}
                <div className="flex justify-center w-16 h-1 bg-cyan-700 mb-4 "></div>   
                <p className='text-justify '>
                I am a seasoned leader in strategic and operational sustainability management, with over 25 years of experience across the energy and industrial sectors. Since 2022, I have served as Head of Global Portfolio Sustainability at Hitachi Energy’s Transformers Business Unit, where my leadership has driven a 150% increase in revenue from sustainability solutions. I am also a Senior Lecturer at the Zurich School of Management and Law (ZHAW) and continue at Business School Lausanne (BSL), guiding the next generation of leaders to build better businesses for a better world.
                </p> <br />
                <p className='text-justify pb-5 '>
                In 2020, I founded XRG Impact Advisory, where I advise multinational companies and private equity firms on integrating the XRG approach into their operations. I also represented Henkel AG in the Catena-X project, a pioneering digital sustainability platform for the automotive industry. Prior to this, I held leadership roles at General Electric (2015–2020), where I led sustainability strategies across a $100 billion portfolio. At Alstom Power (2007–2015), my final role was as CSR Director, overseeing non-financial due diligence for the Alstom-GE acquisition. Previously, I served as Portfolio Sustainability Director, strategic project manager, and product manager, driving the development and commercialization of cleantech and climate solutions through innovative business models.
                </p>
                <p className='text-justify pb-5 '>
                I hold a master’s in Aerospace Engineering from the University of Stuttgart, Germany and a Ph.D. in strategic management and corporate transformation from the University of St. Gallen., Switzerland. In 2011, I completed a post-doctoral visiting scholarship at MIT’s Science and Policy of Global Change Program. Fluent in Arabic, French, English, and German, I have received multiple leadership awards, including the 2024 CXO 2.0 Business Leadership Excellence Award.
                </p>
                {/* buttons links */}
                <div className='flex gap-5'>
                <button class="flex items-center rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white t hover:bg-blue-500  " type="button">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1.5">
                      <path fill-rule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
                     </svg>
 
                     Download Bio
                    </button>
                    <a href="https://www.linkedin.com/in/ghazikablouti/ "  target="_blank"><FaLinkedin className=' text-4xl text-sky-600' /></a>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Bio