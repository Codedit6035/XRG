import React from 'react'
import BannerImg from "../../assets/BannerAb.jpg";
import Navbar from '../Navbar';

const Banner = () => {
  return (
    <div className=" relative h-screen w-full">
      {/* Navbar Component */}
      <div className=" absolute top-0 left-0 w-full z-20  ">
        <Navbar titreColor={'white'}/> {/* This is your existing Navbar component */}
      </div>
      {/* background pattern */}
      <div style={{ backgroundImage: `url(${BannerImg})` }} 
           className="h-screen w-full bg-cover bg-center animate-zoom ">
      </div>
      {/* bg Overlay */}
      <div className='absolute left-0 top-0 w-100 h-100 inset-0 bg-primary/50 z-10 flex items-center justify-start'>
      </div>
      {/* content Overlay */}
      <div className='container absolute inset-0 flex items-center justify-center flex-col z-10 text-white'>
        <h1  className="text-3xl md:text-5xl lg:text-6xl font-bold  mb-2">Clear Advice for Complex Challenges</h1>
        <p>Solutions That Drive Results</p>
      </div>

    </div>
  )
}

export default Banner