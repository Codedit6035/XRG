import React from "react";
import GhasiImg from "../../assets/ghazi.jpg";
import { motion } from 'framer-motion';
import { FaAnglesDown } from "react-icons/fa6";

const FounderS = () => {
  return (
    <div className="pt-10 pb-12 relative" >

        {/* Header section */}
        <div  className="mb-10 animate-slideInFromLeft w-full pl-5 lg:pl-20">
        <h1 className="text-left  text-3xl  hover:bg-shade1 hover:text-white w-fit ">
            Founder
        </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-shade7 mb-4 "></div>        
        </div>
        {/* Body section */}
        <div  className=" flex flex-col gap-10   lg:flex-row  lgm:h-screen w-full overflow-hidden bg-shade2/30">
          {/*Image Ghasi for phone*/}
                  <motion.div className="flex  flex-1  overflow-hidden lg:hidden"
                  initial={{ x: '100%', opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  viewport={{ once: true }}>
          <div style={{ backgroundImage: `url(${GhasiImg})`  }} className="w-screen  bg-cover bg-center bg-no-repeat   h-screen ">
          </div>
          </motion.div>
          {/* text */}
          <div className="flex flex-1 flex-col lg:pl-3rem  py-7   justify-center">
          <div data-aos="fade-up" className="  px-5 rounded-md " >
            <h1 className="font-medium text-4xl  transition-all    ">Dr. Ghazi Kablouti  </h1>
            <span className="font-bold text-xl  ">Envision. Lead. Inspire</span>
            <div className="py-5   w-full lg:text-justify hyphens-auto flex flex-col gap-3 ">
            <p >
            As the Founder of XRG Impact Management Advisory, I bring over 25 years of global leadership experience spanning consulting, energy infrastructure, and industrial manufacturing with world-leading corporations. With a multicultural and interdisciplinary background, I operate at the unique intersection of business, technology, and sustainability, driving transformative outcomes for organizations.
            </p>
            <p>
            Combining a deep sense of purpose with cutting-edge business acumen, I excel as a creative, customer-focused leader and advisor. My proven track record includes delivering results in complex, dynamic environments by fostering business resilience, innovation, growth, and measurable impact. I specialize in turning ambitious visions into actionable and sustainable achievements.
            </p>
            <p>
            As an author and frequent conference speaker, I am deeply passionate about the transformative power of education to inspire change. I actively contribute to shaping the next generation of leaders as a lecturer and mentor at leading business and engineering schools.
            </p>
            </div>
            <a href="/explore" className=''>
          <div className='bg-shade7  h-10 w-[10%] px-5 hover:animate-expand hover:bg-primary   flex items-center '>
             <h1 className=' text-secondary font-bold  text-xl whitespace-nowrap '>Explore more</h1>  
          </div> 
     </a> 
          </div>

          </div>

          {/*Image Ghasi*/}
          <motion.div className="hidden lg:flex  flex-1  overflow-hidden"
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