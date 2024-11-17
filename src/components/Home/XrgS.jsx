import React from "react";
import BannerImg from "../../assets/aboutph.jpg";
import GhasiImg from "../../assets/xrg.jpg";

const XrgS = () => {
  return (
    <div className="pt-10 pb-12 font-Raleway " >

        {/* Header section */}
        <div  className="   mb-10 animate-slideInFromLeft w-full pl-20  text-black">
        <h1 className="text-left  text-3xl text-primary  hover:bg-shade1 hover:text-white w-fit pr-5 pl-1">
            XRG
        </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-teal-500 mb-4 "></div>        
        </div>
        {/* Body section */}
        <div  className=" flex flex-col gap-10   sm:flex-row  sm:h-screen bg-shade2">
          {/*Image Ghasi*/}
          <div style={{ backgroundImage: `url(${GhasiImg})`  }} className="flex  sm:flex-1 bg-cover bg-left bg-no-repeat items-end">
          </div>          
          {/* text */}
          <div className="flex sm:flex-1 flex-col mr-20 gap-10  ">
          {/* text1 */}
          <div data-aos="fade-up" className="  px-5 rounded-md text-white " >
            <h1 className=" pt-5   mb-3 pl-5 text-xl text-shade1 font-semibold ">What we do</h1>
            <div className="p-5    w-full text-justify  flex flex-col gap-3  text-primary">
            <p >
            We provide management advisory, educational, and speaking services to help
            businesses create long-term value through achieving their sustainability goals.
            </p>
            </div>
          </div>
          {/* text2 */}
          <div data-aos="fade-up" className="  px-5 rounded-md text-white " >
            <h1 className="    mb-3 pl-5 text-xl text-shade1 font-semibold ">Why We are Different</h1>
            <div className="p-5    w-full text-justify  flex flex-col gap-3  text-primary">
            <p>
            True business success is difficult to attain in fragile societies and businesses are
essential in building a resilient economic model that respects planetary boundaries
and fosters genuine societal prosperity.
            </p>
            <p>
            Conventional ESG (Environmental, Social and Governance) approaches have fallen
short in transforming the way business operates for better business and a better
world—and, in their current form, may never deliver.
            </p>
            <p >
            Systems thinking is at the core of our solutions, with our brand inspired by
exergy—a thermodynamic principle that measures the maximum useful work or
impact a system can generate as it reaches equilibrium with its environment.
Applying this principle to management, we empower organizations to focus on
fewer, high-impact actions essential for maximizing long-term returns for both
business and society.
            </p>

            </div>
          </div>



          </div>
        </div>

    </div>
  )
}

export default XrgS