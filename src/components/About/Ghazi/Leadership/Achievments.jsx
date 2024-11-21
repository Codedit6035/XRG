import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import AchievmentsData from "../../../../data/AchievmentsData";
import achievments from "../../../../assets/achievments.jpg"

const Achievments = () => {
  return (
    <div className=' '>
      <h1 className="text-xl text-shade1 mb-4 font-semibold">Professional Achievements</h1>
      <div className="w-16 h-1 bg-shade5 mb-8"></div>      
      <div className=' container flex gap-10 '>
        <div className='flex-1  '>
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
        <div>
          <img src={achievments} alt="" className='mt-auto hover:animate-zoomIn'/>  
        </div>
        </div>
        {/* text right */}
        <div className=" flex flex-1 h-100 flex-col text-base  overflow-hidden gap-2 ">
        <div   className='flex flex-1 flex-col p-5  border-b border-b-gray-500 pb-10  mb-5  bg-shade5 text-white hover:animate-zoomIn'>
              <div className=''>
                <h1 className='  text-xl  mb-4 font-semibold text-secondary'>
                  GE Corporate
                </h1>
              </div>

              <div  className=' text-justify'>
                <ul className='list-disc'>
                  <li>
                    Defined the GE’s sustainability portfolio in a $100 billion global revenue portfolio.
                  </li>
                  <li>
                  	Reshaped GE’s ESG reporting strategy, established quantitative frameworks for managing climate risks and opportunities, and developed science-based climate targets (2019).
                  </li>
                  <li>
                   	Introduced GE’s first GHG Scope 3 accounting and reporting system, covering $40 billion in spending and $50 billion in revenues (2018).
                  </li>
                </ul>
              </div>                 
          </div>



        </div>
        </div>

        
    </div>
  );
};

export default Achievments;
