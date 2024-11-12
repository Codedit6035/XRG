import React, { useEffect, useState  } from 'react';
import Navbar from '../Navbar';
import banner from "../../assets/banner.jpg";
import { FaArrowDown } from "react-icons/fa6";

const Banner = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setStartAnimation(true);
  }, []);

  return (
    <div className='relative' >
    <div className="w-full overflow-hidden " style={{ height: "calc(100vh - 35px)" }}>
      {/* Navbar Component */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar titreColor={'white'} />
      </div>

      {/* Background pattern */}
      <div className="h-screen w-full bg-cover bg-center  bg-primary/90">
      </div>

      {/* Content Overlay */}
      <div className="pl-20 absolute inset-0 flex items-center justify-between">
        <div className="text-white max-w-lg z-10">
          {/* Title */}
          <h1 className="text-6xl font-bold mb-4 font-ibm">
            Better IT <br /> <span className="text-secondary">services</span> , <span className="italic"> for <br /> everyone </span>
          </h1>

          {/* Blue line */}
          <div className="w-16 h-1 bg-secondary mb-4"></div>

          {/* Short Paragraph */}
          <p className="text-lg">
            Our goal is to help you build better IT services that propel your business forward.
            Learn more about the services we offer.
          </p>
        </div>
        <div className="relative w-[520px] overflow-hidden h-full ">
          {/* Fixed Background Image */}
          <img
            src={banner}
            alt="Revealing"
            className={`inset-0 w-full h-full object-cover  transition-transform ${
              startAnimation ? 'animate-zoomOut' : ''
            }`}
          />

          {/* Animated Mask Layer */}
          <div
            className={`absolute inset-0 bg-primary transition-transform ${startAnimation ? 'animate-maskReveal' : ''}`}
          />
        </div>
      </div>
      
    </div>
        {/* down circle */}
        <div className='absolute  z-10  flex w-[70px] h-[70px]  left-[50%] -ml-[35px] -mt-[35px]  '>
           <a href="#nextservices" className="flex items-center rounded-full w-[70px] h-[70px] border-2 border-white bg-blue-500 text-white justify-center"><FaArrowDown  /></a>
    </div>
    </div>
    
  );
};

export default Banner;
