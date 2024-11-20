import React from 'react'
import Image from '../../../assets/expertiseph.jpg'
import ExpertiseData from "../../../data/ExpertiseData";
import Certificates from './Expertise/Certificates';

const  Expertise = () => {
  return (
    <div>
      <div className='  flex flex-col gap-10 py-10  font-raleway '>
         {/*slogan*/}
      <div className=' text-2xl  text-center py-10  '>
          <p className='px-10 text-secondary font-bold'>“Mastery is not a question of intelligence, but a question of persistence and resilience” - Anonymous</p>
        </div>
        {/*Img*/}
        <div>
          <img src={Image} alt="" className='w-fit' />
        </div>
        {/* text */}
        <div className="container flex flex-col text-base ">
          {ExpertiseData.map((data, index) => (
            <div key={index}  className={`flex py-5 gap-10  pb-10 px-5  ${
        index % 2 === 0 ? '' : 'bg-gray-300'
      } `}>
              <div className='w-2/6'>
                <h1           className={`text-xl mb-4 font-semibold ${
            index % 2 === 0 ? 'text-shade1' : 'text-shade1'
          }`}>
                  {data.title}
                </h1>
                <div   className="w-16 h-1  mb-4 bg-shade5" ></div>
              </div>
              <div           className={`w-4/6 text-justify ${
            index % 2 === 0 ? '' : 'text-shade5'
          }`}>
                <p>{data.text}</p>
              </div>
            </div>

      ))}                  
        </div> 
                      {/* certificates*/}
                      <div className=' container flex-1 '>
                  <h1 className='text-xl bg-shade1 text-white mb-4 font-semibold py-1 px-2'>Courses and certificates</h1>
                  {/* Blue line */}
                  <div className="w-16 h-1 bg-shade5 mb-4  "></div>  
                  <Certificates/>

                  {/* <div className='flex flex-col gap-5'>

                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1 className='text-lg'>Business and Human Rights </h1>
                    <h1 className='text-sm'> Council of Europe, 2022</h1>
                  </div>
                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1  className='text-lg'>Foundations in Responsible Investments </h1>
                    <h1 className='text-sm'> UN PRI Academy, 2020</h1>
                  </div>
                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1  className='text-lg'>Photovoltaic Solar Energy </h1>
                    <h1 className='text-sm'> École Polytechnique Paris, 2020</h1>
                  </div>
                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1  className='text-lg'>Smart Cities – Managing Smart Urban Infrastructures</h1>
                    <h1 className='text-sm'> EPFL, 2019</h1>
                  </div>
                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1  className='text-lg'>Finance for Non-Finance Managers </h1>
                    <h1 className='text-sm'>GE University, 2016</h1>
                  </div>
                </div> */}
                </div>
                {/* links*/}
                <div className='container'>
                                                                       {/* Get in touch link */}
        <div className=" flex   items-center  mt-10 ">
          <div className=''>
            <span>Any thoughts, need for support, </span>
             <a href="/get in touch" className='font-bold text-shade7'><span>let’s get in touch</span></a>
          </div>
        </div>
                  <h1>Link (download) Dr. Ghazi Kablouti (Profile document)</h1>
                  <h1>Link to LinkedIn Profile (https://www.linkedin.com/in/ghazikablouti/)</h1>

                </div>


      </div>
    </div>
  )
}

export default  Expertise

{/* <ul className='flex flex-col gap-5 custom-circle-list'>
<li>Academic Lectures & Training: Designed and delivered academic courses focused on "Business & Society," with an emphasis on combining legal and management approaches</li>
<li>Sustainability in Energy Technologies (power generation, transmission, and distribution)</li>
<li>Product-level environmental impact assessment methodologies: Product Carbon Footprint (PCF) and Life Cycle Assessment (LCA) according to ISO 14040, ISO 14044, and ISO 14067, as well as sector-specific methodologies across industries like Metals, Chemicals, and Oil & Gas</li>
<li>Greenhouse Gas (GHG) Scope 3 Accounting covering both upstream and downstream activities</li>
<li>Sustainability Data Management Software (requirements engineering, selection, and implementation of sustainability data management software: supply chain management, product- and corporate-level sustainability reporting)</li>
</ul> */}