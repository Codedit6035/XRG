import React from "react";
import Image1 from "../../assets/lamp.jpg";
import Image2 from "../../assets/buildings.jpg";
import Image3 from "../../assets/flou.jpg";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import default styles
import { FaAnglesDown } from "react-icons/fa6";
const images = [
    Image1,
    Image2,
    Image3,
  ];

import Navbar from '../Navbar'
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (


    <div className="relative  ">
    {/* blue part */}
    <div className=" h-screen w-full ">
      {/* Navbar Component */}
      <div className=" absolute top-0 left-0 w-full z-20  ">
        <Navbar /> {/* This is your existing Navbar component */}
      </div>
      {/* background pattern */}
      <Fade duration={3000} transitionDuration={1000} infinite arrows={false} >
        {images.map((each, index) => (
          <div        
            key={index}
            className="h-screen w-full bg-cover bg-center animate-zoom "
            style={{ backgroundImage: `url(${each})` }}
            
          ></div>
        ))}
      </Fade>
            {/* bg Overlay */}
            <div className='absolute left-0 top-0 w-100 h-100 inset-0 z-10 flex items-center justify-start'>
      </div>
      {/* Content Overlay */}
      <div className=" container absolute inset-0 flex items-center justify-center z-10 font-raleway ">
        <div className="text-white max-w-2xl flex flex-col items-center justify-center">
          {/* Title */}
          <h1 className="text-6xl font-bold mb-4 text-center  "><span className="text-secondary">XRG </span> Impact Management Advisory</h1>
          
          {/* Blue line */}
          <div className="w-2/6 h-1 bg-shade7 mb-4 "></div>

          {/* Short Paragraph */}
          <p className="text-2xl font-medium whitespace-nowrap">
          Solutions for Managing Business and Sustainability beyond ESG
          </p>
        </div>
      </div>
            {/* Tailwind Custom Keyframe */}
            <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-zoom {
          animation: zoomIn 5s ease-in-out infinite;
        }
      `}</style>
    
    </div>
    {/* down circle */}
    <div className='absolute  z-10  flex w-[70px] h-[70px]  left-[50%] -ml-[35px] -mt-[70px] animate-float '>
           <a href="#next-section" className="flex items-center  w-[70px] h-[70px] text-4xl  text-shade2 justify-center"><FaAnglesDown  /></a>
    </div>
    </div>


 
  );
};

export default Hero;