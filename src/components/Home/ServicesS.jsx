import React, { useEffect, useRef, useState } from 'react';
import { RiSpeakFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { PiArrowElbowDownRight } from "react-icons/pi";
import Advising from '../../assets/advisinghome.jpg'

const ServicesS = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className='pt-10 pb-12 font-Raleway'>
      {/* Header section */}
      <div
        ref={sectionRef}
        className={`mb-10 bg-white w-full pl-20 text-black ${
          isInView ? 'animate-slideInFromLeft' : 'opacity-0'
        }`}
      >
        <h1 className="text-left text-3xl text-primary hover:bg-shade1 hover:text-white w-fit pr-5 pl-1">
          Services
        </h1>
        {/* Blue line */}
        <div className="w-16 h-1 bg-shade7 mb-4"></div>
      </div>
  
      {/* body */}  
      <div className='flex justify-center h-screen'>  
        <div className='flex gap-1 w-full'>
          <div
            className='flex flex-1 gap-5 space-y-3 bg-shade9 p-5 = text-white justify-start  text-4xl font-semibold'
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Management advisory, educational, and speaking services to help economic players achieve their financial goals and create long-term value by reaching their sustainability objectives

          </div>
          <div
            className='flex flex-1 flex-col gap-5 space-y-3 bg-primary p-5 = text-white'
            data-aos="fade-up"
            data-aos-delay="200"
          > 
            <div>
              <img src={Advising} alt="" />
            </div>
            <h1 className='text-3xl'>Advising</h1>
            <p> Empowering businesses to leverage their systemic strengths for long-term value and impact </p>
          </div>
          <div
            className='flex flex-1 flex-col gap-5 space-y-3 bg-primary p-5 = text-white'
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <img src={Advising} alt="" />
            </div>
            <h1 className='text-3xl'>Lecturing</h1>
            <p> Shaping the next generation of leaders with a vision and sense of urgency for change  </p>
          </div>
          <div
            className='flex flex-1 flex-col gap-5 space-y-3 bg-primary p-5 = text-white'
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <img src={Advising} alt="" />
            </div>
            <h1 className='text-3xl'>Speaking</h1>
            <p> Connecting, inspiring, and engaging to drive societal progress  </p>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default ServicesS;
