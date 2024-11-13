import React from 'react'
import Image from '../../../assets/expertiseph.jpg'

const  Expertise = () => {
  return (
    <div>
      <div className='container flex flex-col gap-10 py-20  '>
        {/*Img*/}
        <div>
          <img src={Image} alt="" className='w-fit' />
        </div>
        {/*Expert1*/}
        <div className='flex gap-10 border-b border-b-gray-500 pb-10'>
          {/* title + Blue line */}
          <div className='w-2/6'>
          <h1 className='  text-xl text-shade1 mb-4 font-semibold'>
          Leadership Proficiencies
          </h1>
          <div className="w-16 h-1 bg-shade5 mb-4 "></div>
          </div>
          {/* content */}
          <div className='w-4/6'>
            <ul className='flex flex-col gap-5 custom-circle-list'>
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
        <div className='flex gap-10 border-b border-b-gray-500 pb-10'>
          {/* title + Blue line */}
          <div className='w-2/6'>
          <h1 className='  text-xl text-shade1 mb-4 font-semibold'>
          Professional Expertise
          </h1>
          <div className="w-16 h-1 bg-shade5 mb-4"></div>
          </div>
          {/* content */}
          <div className='w-4/6'>
            <ul className='flex flex-col gap-5 custom-list'>
              <li>Academic Lectures & Training: Designed and delivered academic courses focused on "Business & Society," with an emphasis on combining legal and management approaches</li>
              <li>Sustainability in Energy Technologies (power generation, transmission, and distribution)</li>
              <li>Product-level environmental impact assessment methodologies: Product Carbon Footprint (PCF) and Life Cycle Assessment (LCA) according to ISO 14040, ISO 14044, and ISO 14067, as well as sector-specific methodologies across industries like Metals, Chemicals, and Oil & Gas</li>
              <li>Greenhouse Gas (GHG) Scope 3 Accounting covering both upstream and downstream activities</li>
              <li>Sustainability Data Management Software (requirements engineering, selection, and implementation of sustainability data management software: supply chain management, product- and corporate-level sustainability reporting)</li>
            </ul>
          </div>
        </div>
        {/*Expert3*/}
        <div className='flex gap-10'>
          {/* title + Blue line */}
          <div className='w-2/6'>
          <h1 className='  text-xl text-shade1 font-semibold mb-4'>
          Certifications & Professional Development incl.: 
          </h1>
          <div className="w-16 h-1 bg-shade5 mb-4"></div>
          </div>
          {/* content */}
          <div className='w-4/6'>
            <ul className='flex flex-col gap-5 custom-list'>
              <li>Business & Human Rights (Council of Europe, 2022)</li>
              <li>Foundations in Responsible Investments (UN PRI Academy, 2020)</li>
              <li>Photovoltaic Solar Energy (École Polytechnique Paris, 2020)</li>
              <li>Smart Cities – Managing Smart Urban Infrastructures (EPFL, 2019)</li>
              <li>Product- and Portfolio Management</li>
              <li>Finance for Non-Financial Managers (GE Academy, 2016)</li>
              <li>Systemic Management and Governance (Malik Management, 2006)</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default  Expertise