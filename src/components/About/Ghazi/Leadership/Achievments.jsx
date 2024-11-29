import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import AchievmentsData from "../../../../data/AchievmentsData";
import achievments from "../../../../assets/achievement.jpeg"

const Achievments = () => {
  return (
    <div className=' container  '>
      <h1 className="text-xl  mb-4 font-semibold text-shade1">Professional Achievements</h1>
      <div className="w-16 h-1 bg-shade5 mb-8"></div>      
      <div className='   '>
        <div className=''>
        {/* text left */}
        <div className=" flex   flex-col   ">
          {AchievmentsData.map((data, index) => (
            <div key={index}   className={`py-5 gap-10  pb-10 px-5  ${
              index % 2 === 0 ? '' : 'bg-shade2/50'
            } `}>
              <div className=''>
                <h1    className="text-xl mb-4 font-semibold " >
                  {data.title}
                </h1>

              </div>
              <div  className='lg:text-justify hyphens-auto'>
                <p>{data.text}</p>
              </div>
            </div>
      ))}   
          {/* GeE corporate */}
          <div   className='py-5 gap-10  pb-10 px-5  '>
              <div className=''>
                <h1 className=' text-xl mb-4 font-semibold '>
                 	GE Corporate:
                </h1>

              </div>
              <ul className='lg:text-justify hyphens-auto list-disc pl-5'>
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
          <div   className='py-5 gap-10  pb-10 px-5  bg-shade2/50'>
              <div className=''>
                <h1 className=' text-xl mb-4 font-semibold '>
                	Alstom Power:
                </h1>

              </div>
              <ul className='lg:text-justify hyphens-auto list-disc pl-5'>
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
