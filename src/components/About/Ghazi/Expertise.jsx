import React from 'react'
import Image from '../../../assets/expertiseph.jpg'

const  Expertise = () => {
  return (
    <div>
      <div className='container flex flex-col gap-10 py-20'>
        {/*Img*/}
        <div>
          <img src={Image} alt="" className='w-fit' />
        </div>
        {/*Expert1*/}
        <div className='flex gap-10'>
          {/* title + Blue line */}
          <div className='w-2/6'>
          <h1 className='  text-xl text-primary mb-4'>
            Leadership core competencies
          </h1>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          </div>
          {/* content */}
          <div className='w-4/6'>
            <ul className='flex flex-col gap-5 list-disc'>
              <li>Thought leadership</li>
              <li>Strategic and operational sustainability management</li>
              <li>Advocacy and Stakeholder Engagements</li>
              <li>Global and cross-functional team leadership (Strategy, R&D, Product Innovation, Supply Chain, Marketing & Sales)</li>
              <li>Product- and Portfolio Management</li>
              <li>Global business development</li>
              <li>Leading change and transformations</li>
            </ul>
          </div>
        </div>
        {/*Expert2*/}
        <div className='flex gap-10'>
          {/* title + Blue line */}
          <div className='w-2/6'>
          <h1 className='  text-xl text-primary mb-4'>
          Expertise & Professional Qualifications
          </h1>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          </div>
          {/* content */}
          <div className='w-4/6'>
            <ul className='flex flex-col gap-5 list-disc'>
              <li>	Academic Lectures & Training: Designed and delivered academic courses focused on "Business & Society," with an emphasis on combining legal and management approaches</li>
              <li>	Sustainability in Energy Technologies (power generation, transmission, and distribution)</li>
              <li>	Product-level environmental impact assessment methodologies: Product Carbon Footprint (PCF) and Life Cycle Assessment (LCA) according to ISO 14040, ISO 14044, and ISO 14067, as well as sector-specific methodologies across industries like Metals, Chemicals, and Oil & Gas</li>
              <li>	Greenhouse Gas (GHG) Scope 3 Accounting covering both upstream and downstream activities</li>
              <li>	Sustainability Data Management Software (requirements engineering, selection, and implementation of sustainability data management software: supply chain management, product- and corporate-level sustainability reporting)</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default  Expertise