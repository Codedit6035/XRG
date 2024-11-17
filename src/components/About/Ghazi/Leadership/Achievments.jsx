import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import AchievmentsData from "../../../../data/AchievmentsData";
import AchievmentData from "../../../../data/AchievmentData";

const Achievments = () => {
  return (
    <div className='container'>
      <h1 className="text-xl text-shade1 mb-4 font-semibold">Professional Achievements</h1>
      <div className="w-16 h-1 bg-shade5 mb-4"></div>      
      <div className='flex gap-10'>
        {/* text right */}
        <div className=" flex flex-1 h-100 flex-col">
          {AchievmentData.map((data, index) => (
            <div key={index}  className='flex flex-col p-5  border-b border-b-gray-500 pb-10  mb-5  bg-primary text-white '>
              <div className=''>
                <h1 className='  text-xl  mb-4 font-semibold'>
                  {data.title}
                </h1>

              </div>
              <div  className='text-sm text-justify'>
                <p>{data.text}</p>
              </div>
            </div>

      ))}                  
        </div> 
        {/* text left */}
        <div className=" flex flex-1 h-100 flex-col ">
          {AchievmentsData.map((data, index) => (
            <div key={index}  className='flex flex-col p-5  border-b border-b-gray-500 mb-5  bg-primary  text-white  '>
              <div className=''>
                <h1 className='  text-xl  mb-4 font-semibold'>
                  {data.title}
                </h1>

              </div>
              <div  className='text-sm text-justify'>
                <p>{data.text}</p>
              </div>
            </div>

      ))}                  
        </div>

        </div>
    </div>
  );
};

export default Achievments;
