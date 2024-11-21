import React from 'react'
import BannerImg from "../../assets/BannerAb.jpg";
import Navbar from '../Navbar';
import { FaAnglesDown } from "react-icons/fa6";

const Banner = () => {
  
  return (

    <div className=" relative h-screen w-full overflow-hidden">
      {/* Navbar Component */}
      <div className=" absolute top-0 left-0 w-full z-20  ">
        <Navbar/> {/* This is your existing Navbar component */}
      </div>

      {/* background pattern */}      
      <div style={{ backgroundImage: `url(${BannerImg})` }} 
           className="h-screen w-full bg-cover bg-center animate-zoomInAb ">
      </div>
      {/* bg Overlay */}

      {/* content Overlay */}
      <div className='container absolute inset-0 flex items-center justify-center flex-col z-10 text-white'>
        <h1  className="text-6xl font-bold mb-4 text-center">Clear Advice for Complex Challenges</h1>
        <p className='text-2xl font-medium'>Solutions That Drive Results</p>
      </div>
          {/* down circle */}
          <div className='absolute  z-10  flex w-[70px] h-[70px]  left-[50%] -ml-[35px] -mt-[70px] animate-float '>
           <a href="#about-me" className="flex items-center  w-[70px] h-[70px] text-4xl  text-shade2 justify-center"><FaAnglesDown  /></a>
    </div>
    </div>
  )
}

export default Banner