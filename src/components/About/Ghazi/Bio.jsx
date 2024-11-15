import React, { useEffect, useState  } from 'react';
import GhaziImg from"../../../assets/GhaziPh2.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

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
                  <a  href="/bio.pdf" 
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
    </div>
  )
}

export default Bio