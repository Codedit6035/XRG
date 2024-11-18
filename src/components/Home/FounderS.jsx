import React from "react";
import GhasiImg from "../../assets/ghazi.jpg";
import { motion } from 'framer-motion';

const FounderS = () => {
  return (
    <div className="pt-10 pb-12 font-Raleway " >

        {/* Header section */}
        <div  className="   mb-10 animate-slideInFromLeft w-full pl-20  text-black">
        <h1 className="text-left  text-3xl text-primary  hover:bg-shade1 hover:text-white w-fit pr-5 pl-1">
            Founder
        </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-shade8 mb-4 "></div>        
        </div>
        {/* Body section */}
        <div  className=" flex flex-col gap-10   sm:flex-row  sm:h-screen bg-shade8">
          {/* text */}
          <div className="flex sm:flex-1 flex-col pl-3rem  py-7  ">
          <div data-aos="fade-up" className="  px-5 rounded-md text-white " >
            <h1 className="font-medium text-3xl  bg-shade1/70 hover:bg-secondary transition-all   pl-2">Dr. Ghazi Kablouti <span className="font-bold text-lg  text-gray-200 pl-2">Envision. Lead. Inspire</span></h1>
            <div className="py-5   w-full text-justify flex flex-col gap-3 ">
            <p >
            I am a pioneer and seasoned leader in strategic and operational sustainability management with
over 25 years of experience in consulting, energy infrastructure, and industrial manufacturing,
Since 2022, I have led Global Portfolio Sustainability for Hitachi Energy’s Transformers Business Unit.
In 2020, I founded XRG Impact Advisory to help multinational companies and private equity firms
integrate sustainability into their operations. I also represented Henkel AG in the Catena-X project,
a pioneering digital sustainability platform for the automotive industry.
            </p>
            <p>
            From 2015 to 2020, I served as Senior Manager for GE Corporate’s Global Sustainability Program,
where I drove sustainability strategy and operations across various GE business units. Earlier, I held
leadership roles at Alstom Power, including CSR Director, where I oversaw non-financial due
diligence during the Alstom Power-GE acquisition. I have also provided strategic advisory to major
institutions such as the World Bank and the World Business Council for Sustainable Development,
focusing on impact management in the energy sector.
            </p>
            <p>
            Alongside my business leadership, I am a Senior Lecturer on Business and Society, supervising
theses at institutions like ZHAW and BSL. I hold a Master’s in Aerospace Engineering, a Ph.D. in
Management and Strategy, and a postdoctoral scholarship at MIT. Fluent in four languages, I have
authored over 25 publications and was honored with the 2024 CXO 2.0 Business Leadership
Excellence Award.
            </p>
            </div>
          </div>

          </div>

          {/*Image Ghasi*/}
          <motion.div className="flex  sm:flex-1  overflow-hidden"
                  initial={{ x: '100%', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  viewport={{ once: true }}>
          <div style={{ backgroundImage: `url(${GhasiImg})`  }} className="w-full bg-cover bg-left bg-no-repeat items-end ">
          </div>
          </motion.div>
        
        </div>

    </div>
  )
}

export default FounderS