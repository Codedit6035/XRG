import React from 'react'
import Navbar from '../Navbar'
import banner from "../../assets/banner.jpeg"
const Banner = () => {
  return (
    <div className=" relative h-screen w-full overflow-hidden">
      {/* Navbar Component */}
      <div className=" absolute top-0 left-0 w-full z-20  ">
        <Navbar titreColor={'white'}/> {/* This is your existing Navbar component */}
      </div>
      {/* background pattern */}
      <div        
        className="h-screen w-full bg-cover bg-center animate-zoom  bg-primary/90">
      </div>


      {/* Content Overlay */}
      <div className=" pl-20 absolute inset-0 flex items-center justify-between  ">
        <div className="text-white max-w-lg z-10">
          {/* Title */}
          <h1 className="text-6xl font-bold mb-4  font-ibm ">Better IT <br/> <span className='text-secondary'>services</span> , <span className='italic'> for <br/> everyone </span></h1>
          
          {/* Blue line */}
          <div className="w-16 h-1 bg-secondary mb-4"></div>

          {/* Short Paragraph */}
          <p className="text-lg">
            Our goal is to help you build better IT  services that propel your business forward.
            Learn more about the services we offer. 
          </p>
        </div>
        <div className=' relative w-[500px] z-5 '>
            <img src={banner} alt="" />     
                  {/* bg Overlay */}
      <div className='absolute inset-0  z-10 '>
      </div>       
        </div>
      </div>
    
    </div>
  )
}

export default Banner