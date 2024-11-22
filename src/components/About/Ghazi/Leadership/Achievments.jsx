import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import AchievmentsData from "../../../../data/AchievmentsData";
import achievments from "../../../../assets/achievement.jpeg"

const Achievments = () => {
  return (
    <div className=' container'>
      <h1 className="text-xl text-shade1 mb-4 font-semibold">Professional Achievements</h1>
      <div className="w-16 h-1 bg-shade5 mb-8"></div>      
      <div className='   '>
        <div className=''>
        {/* text left */}
        <div className=" flex   flex-col  text-base overflow-hidden ">
          {AchievmentsData.map((data, index) => (
            <div key={index}   className={`py-5 gap-10  pb-10 px-5  ${
              index % 2 === 0 ? '' : 'bg-gray-300'
            } `}>
              <div className=''>
                <h1    className={`text-xl mb-4 font-semibold ${
            index % 2 === 0 ? 'text-shade1' : 'text-shade1'
          }`}>
                  {data.title}
                </h1>

              </div>
              <div  className='text-justify'>
                <p>{data.text}</p>
              </div>
            </div>
      ))}   
          {/* GeE corporate */}
          <div   className='py-5 gap-10  pb-10 px-5  '>
              <div className=''>
                <h1 className=' text-xl mb-4 font-semibold text-shade1'>
                 	GE Corporate:
                </h1>

              </div>
              <ul className='text-justify list-disc'>
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
                    {/*	Alstom Power */}
          <div   className='py-5 gap-10  pb-10 px-5  bg-gray-300'>
              <div className=''>
                <h1 className=' text-xl mb-4 font-semibold text-shade1'>
                	Alstom Power:
                </h1>

              </div>
              <ul className='text-justify list-disc'>
                <li>
                 	Led the non-financial due diligence and integration of Alstom Power’s CSR function in GE’s largest-ever acquisition (2015).
                </li>
                <li>
                 	Integrated sustainability and impact management methodologies, including product life-cycle assessments and eco-design approaches, into the power generation sector (2013).
                </li>
                <li>
                 	Established an industry-leading, third-party verified GHG Avoidance accounting framework recognized by the World Bank (2011).
                </li>
                <li>
                 	Co-founded the “Alstom Chair in Clean Energy Systems” at Wits University, South Africa (2012).
                </li>
                <li>
                 	Credited with generating €30 million in incremental, carbon-related sales revenues (2011).
                </li>

              </ul>
            </div>               
          </div> 


        </div>
        {/* text right */}
        </div>

        

  );
};

export default Achievments;
