import React from "react";
import BannerImg from "../../assets/aboutph.jpg";

const XrgS = () => {
  return (
    <div id="xrg" className="py-10  relative " >

        {/* Header section */}
        <div  className="   mb-10 w-full pl-5 md:pl-20  ">
          <h1 className="text-left  text-3xl   hover:bg-shade1 hover:text-white w-fit ">
            XRG
          </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-shade7 "></div>    
          <h1 className="text-xl font-semibold mb-4 ">Impact Management Advisory</h1>     
        </div>

        {/* Body section */}
        <div  className=" flex flex-col gap-10   md:flex-row  md:h-fit bg-shade2/30">

          {/*Image sectioni*/}
          <div className="flex  flex-1  overflow-hidden">
            <div style={{ backgroundImage: `url(${BannerImg})`  }} className="w-full bg-cover bg-center md:bg-left bg-no-repeat items-end animate-zoomInAb md:h-auto h-screen relative">
              {/* Content Overlay */}
              <div className=" container absolute inset-0 flex items-center justify-center z-10 ">
                <div className=" flex flex-col justify-center items-center">
                  <h1 className='text-5xl md:text-6xl font-bold mb-5 '> Our Approach</h1>
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
          <div className="flex flex-1 flex-col md:mr-20 gap-5 items-center justify-center  py-5  md:pl-10 ">
          {/* text1 */}
          <div data-aos="fade-down" className="  px-5 rounded-md" >
            <h1 className="text-2xl text-shade1 font-semibold mb-4">What we do</h1>
            <div className="w-full text-justify  flex flex-col gap-3">
            <p >
            We are a Switzerland-based advisory firm offering global management consulting, lecturing services , and speaking engagements. Our mission is to empower economic players to achieve their financial goals while creating lasting value through sustainable practices.
            </p>
            </div>
          </div>
          {/* text2 */}
          <div data-aos="fade-up" className="  px-5 rounded-md" >
            <h1 className="text-2xl text-shade1 font-semibold mb-4">Why managing business and sustainability beyond ESG</h1>
            <div className="w-full text-justify  flex flex-col gap-3">
            <p>
            True business success cannot thrive in fragile societies. Businesses are indispensable in building resilient economic models that respect planetary boundaries and foster genuine societal prosperity. However, addressing the world’s most pressing challenges ("Do Good") is only possible for organizations that are also thriving and profitable ("Do Well").
            </p>
            <p>
            Balancing this equation—Doing Well by Doing Good—requires a transformative approach. Conventional ESG (Environmental, Social, and Governance) strategies have often fallen short transforming the way business operates for better business and a better world—and, in their current form, may never meet this need.
            </p>
            <p >
            At the heart of our solutions is systems thinking, inspired by <span className="bg-shade7 font-semibold text-white">exergy</span>—a thermodynamic principle measuring the maximum useful impact a system can achieve as it aligns with its environment. Applying this principle to management, we empower organizations to focus on fewer, high-impact actions essential to maximizing long-term returns for business and society alike.
            </p>     

            </div>
            
          </div>
          </div>
        </div>
 


    </div>
  )
}

export default XrgS