import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import AchievmentsData from "../../../../data/AchievmentsData";
import achievments from "../../../../assets/achievments.jpg"

const Achievments = () => {
  return (
    <div className=' '>
      <h1 className="text-xl text-shade1 mb-4 font-semibold">Professional Achievements</h1>
      <div className="w-16 h-1 bg-shade5 mb-8"></div>      
      <div className=' container  '>
        <div className=''>
        {/* text left */}
        <div className=" flex   flex-col  text-base overflow-hidden ">
          {AchievmentsData.map((data, index) => (
            <div key={index}  className='flex flex-col p-5  border-b border-b-gray-500 pb-10  mb-5  bg-shade5 text-white  hover:animate-zoomIn'>
              <div className=''>
                <h1 className='  text-xl  mb-4 font-semibold text-secondary'>
                  {data.title}
                </h1>

              </div>
              <div  className='text-justify'>
                <p>{data.text}</p>
              </div>
            </div>
      ))}                  
        </div> 
        </div>
        {/* text right */}
        </div>

        
    </div>
  );
};

export default Achievments;
