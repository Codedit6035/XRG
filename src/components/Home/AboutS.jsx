import React from "react";
import BannerImg from "../../assets/aboutph.jpg";
import GhasiImg from "../../assets/ghazi.jpg";

const AboutS = () => {
  return (
    <div className="pt-10 pb-12 font-Raleway " >

        {/* Header section */}
        <div  className="   mb-10 animate-slideInFromLeft w-full pl-20  text-black">
        <h1 className="text-left  text-3xl text-primary ">
            About
        </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>        
        </div>
        {/* Body section */}
        <div  className=" flex flex-col gap-10   sm:flex-row  sm:h-screen">
          {/* Who we are */}
          <div className="flex sm:flex-1 flex-col ml-20   ">
          <div style={{ backgroundImage: `url(${BannerImg})`  }}  className=" flex  bg-cover bg-center bg-no-repeat h-3/6  ">
          </div>
          <div className="flex h-3/6 bg-black/5 ">
          <div data-aos="fade-up" className=" sm:h-auto   pt-10 rounded-md   " >
            <h1 className="font-bold text-3xl text-primary bg-white/50 mb-2 pl-2">Who We Are</h1>
            <div>
            <p className="p-5   w-full text-justify   sm:text-xl bg-white/50">
            Welcome! I’m Dr. Ghazi Kablouti, founder of XRG Impact Management Advisory. Our mission is to help more sustainable businesses become more successful by managing sustainability beyond traditional ESG (Environmental, Social, and Governance) frameworks.
            </p>
            </div>
          </div>
          </div>
          </div>
          {/* Ghasi*/}
          <div style={{ backgroundImage: `url(${GhasiImg})`  }} className=" flex sm:h-auto sm:flex-1 bg-cover bg-left bg-no-repeat items-end">
          <div className="flex h-3/6 ">
          <div data-aos="fade-up" className="  px-10 pt-10 rounded-md text-white " >
            <h1 className="font-bold text-3xl  bg-secondary/50 hover:bg-secondary transition-all mb-2 pl-2">Dr. Ghazi Kablouti <span className="font-bold text-lg  text-gray-200 pl-2">Envision. Lead. Inspire</span></h1>
            
            <p className="p-5    w-full text-justify  bg-secondary/50 ">
            With over 25 years of professional experience, I bridge cultures, disciplines, and the worlds of academia and business. I have held senior roles across consulting, energy infrastructure, and industrial manufacturing with world-leading corporations. As a versatile advisor, senior lecturer, and corporate sustainability leader, I have a proven track record of navigating complexity and delivering resilient, impactful strategies and solutions in a business environment marked by unprecedented social and environmental challenges, growing competition, and disruptive risks.
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