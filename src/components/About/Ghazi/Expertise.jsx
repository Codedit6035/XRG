import React from 'react'
import Image from '../../../assets/expertiseph.jpg'
import ExpertiseData from "../../../data/ExpertiseData";

const  Expertise = () => {
  return (
    <div>
      <div className='container flex flex-col gap-10 py-20  '>
        {/*Img*/}
        <div>
          <img src={Image} alt="" className='w-fit' />
        </div>
        {/* text */}
        <div className=" flex flex-col gap-10">
          {ExpertiseData.map((data, index) => (
            <div key={index}  className='flex gap-10 border-b border-b-gray-500 pb-10 '>
              <div className='w-2/6'>
                <h1 className='  text-xl text-shade1 mb-4 font-semibold'>
                  {data.title}
                </h1>
                <div className="w-16 h-1 bg-shade5 mb-4 "></div>
              </div>
              <div  className='w-4/6 text-justify'>
                <p>{data.text}</p>
              </div>
            </div>

      ))}                  
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