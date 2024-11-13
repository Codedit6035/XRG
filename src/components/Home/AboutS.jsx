import React from "react";
import BannerImg from "../../assets/aboutph.jpg";
import GhasiImg from "../../assets/ghazi.jpg";

const AboutS = () => {
  return (
    <div className="pt-10 pb-12 font-Raleway " >

        {/* Header section */}
        <div  className="   mb-10 animate-slideInFromLeft w-full pl-20  text-black">
        <h1 className="text-left  text-3xl text-primary  hover:bg-shade1 hover:text-white w-fit pr-5 pl-1">
            About
        </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-teal-500 mb-4 "></div>        
        </div>
        {/* Body section */}
        <div  className=" flex flex-col gap-10   sm:flex-row  sm:h-screen">
          {/* Who we are */}
          <div className="flex sm:flex-1 flex-col ml-20   ">
          <div style={{ backgroundImage: `url(${BannerImg})`  }}  className=" flex  bg-cover bg-center bg-no-repeat h-2/5 ">
          </div>
          <div className="flex h-3/5 bg-black/5">
          <div data-aos="fade-up" className=" sm:h-auto  px-5    pt-10 rounded-md   " >
            <h1 className="font-bold text-3xl text-primary bg-white/50 mb-2 pl-2">Why XRG ?</h1>
            <div>
            <p className="p-5   w-full text-justify   sm:text-md bg-white/50">
            XRG Impact Management Advisory helps sustainable businesses succeed by moving beyond traditional ESG (Environmental, Social, and Governance) frameworks.

We bridge the gap between corporate ESG commitments and urgent environmental and social needs. Conventional ESG approaches often fall short in transforming business for a better world.

Inspired by Exergy, a principle measuring a system's maximum useful impact, we guide organizations to focus on fewer, higher-impact actions for lasting sustainability.
            </p>
            </div>
          </div>
          </div>
          </div>
          {/* Ghasi*/}
          <div style={{ backgroundImage: `url(${GhasiImg})`  }} className="flex  sm:flex-1 bg-cover bg-left bg-no-repeat items-end">
          <div className="flex h-3/5">
          <div data-aos="fade-up" className="  px-5 pt-10 rounded-md text-white " >
            <h1 className="font-medium text-3xl  bg-shade1/70 hover:bg-secondary transition-all mb-2 pl-2">Dr. Ghazi Kablouti <span className="font-bold text-lg  text-gray-200 pl-2">Envision. Lead. Inspire</span></h1>
            
            <p className="p-5    w-full text-justify bg-shade1/70  ">
            He is the founder of XRG Impact Management Advisory, with over 25 years of experience bridging cultures, disciplines, and academia with business. He has held senior roles in consulting, energy infrastructure, and industrial manufacturing with leading global corporations. As a versatile advisor and sustainability leader, he delivers impactful strategies that address complex challenges. Dr. Kablouti is known for navigating social, environmental, and competitive risks while driving resilient and innovative solutions.
            </p>
          </div>
          </div>
          </div>
        
        </div>

    </div>
  )
}

export default AboutS




{/* <div data-aos="fade-up" className=" h-[500px] sm:h-auto sm:flex-1 px-10 pt-10 text-white rounded-md " 
style={{
  backgroundImage: `url(${BannerImg})`, // Inline style for the image path
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
}}            
>
<h1 className="font-bold text-3xl text-primary">Who We Are</h1>
<p className="pt-5 w-3/4  h-2/4 sm:text-2xl">
Kinetic is a Strategic Consulting Group that partners with ambitious companies and leading international organisations. Our definition of success is enabling our clients to create sustainable business impact and achieve better results, faster.
</p>
</div> */}