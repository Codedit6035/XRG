import React from "react";
import BannerImg from "../../assets/aboutph.jpg";
import GhasiImg from "../../assets/xrg.jpg";
import { FaAnglesDown } from "react-icons/fa6";

const XrgS = () => {
  return (
    <div id="xrg-section" className="pt-10 pb-12 font-Raleway text-base relative" >

        {/* Header section */}
        <div  className="   mb-10 animate-slideInFromLeft w-full pl-20  text-black">
        <h1 className="text-left  text-3xl text-primary  hover:bg-shade1 hover:text-white w-fit pr-5 pl-1">
            XRG
        </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-shade7 mb-4 "></div>        
        </div>
        {/* Body section */}
        <div  className=" flex flex-col gap-10   sm:flex-row  sm:h-fit bg-shade2/30">
          {/*Image Ghasi*/}
          <div className="flex  sm:flex-1  overflow-hidden">
          <div style={{ backgroundImage: `url(${BannerImg})`  }} className="w-full bg-cover bg-left bg-no-repeat items-end animate-zoomInAb">
                           {/* Content Overlay */}
      <div className=" container absolute inset-0 flex items-center justify-center z-10 font-raleway  ">
      <div className=" flex flex-col justify-center items-center">
      <h1 className='text-6xl font-bold mb-5 text-primary'> Our Approach</h1>
      <a href="/explore" className=''>
          <div className='bg-shade7 h-10 w-[10%] px-5 hover:animate-expand  hover:bg-primary flex items-center '>
             <h1 className=' text-scondary font-bold  text-xl '>Explore</h1>  
          </div> 
     </a> 
    </div>
      </div>
          </div>  
          </div>
          {/* text */}
          <div className="flex sm:flex-1 flex-col mr-20 gap-5 items-center justify-center  py-5 pl-10 ">
          {/* text1 */}
          <div data-aos="fade-down" className="  px-5 rounded-md text-white " >
            <h1 className="text-2xl text-shade1 font-semibold mb-4">What we do</h1>
            <div className="w-full text-justify  flex flex-col gap-3  text-primary  text-base  ">
            <p >
            We offer management advisory, educational, and speaking services to help economic players achieve their financial goals and create long-term value by reaching their sustainability objectives.
            </p>
            </div>
          </div>
          {/* text2 */}
          <div data-aos="fade-up" className="  px-5 rounded-md text-white " >
            <h1 className="text-2xl text-shade1 font-semibold mb-4">Why managing business and sustainability beyond ESG</h1>
            <div className="w-full text-justify  flex flex-col gap-3  text-primary text-base ">
            <p>
            True business success cannot thrive in fragile societies. Businesses are indispensable in building resilient economic models that respect planetary boundaries and foster genuine societal prosperity. However, addressing the world’s most pressing challenges ("Do Good") is only possible for organizations that are also thriving and profitable ("Do Well").
            </p>
            <p>
            Balancing this equation—Doing Well by Doing Good—requires a transformative approach. Conventional ESG (Environmental, Social, and Governance) strategies have often fallen short transforming the way business operates for better business and a better world—and, in their current form, may never meet this need.
            </p>
            <p >
            At the heart of our solutions is systems thinking, inspired by exergy—a thermodynamic principle measuring the maximum useful impact a system can achieve as it aligns with its environment. Applying this principle to management, we empower organizations to focus on fewer, high-impact actions essential to maximizing long-term returns for business and society alike.
            </p>     

            </div>
            
          </div>
          </div>
        </div>
 
                 {/* down circle */}
                 <div className='absolute  z-10  flex w-[70px] h-[70px]  left-[50%] -ml-[35px] -mt-[70px] animate-float '>
           <a href="#4th" className="flex items-center  w-[70px] h-[70px] text-4xl  text-shade2 justify-center"><FaAnglesDown  /></a>
    </div>

    </div>
  )
}

export default XrgS