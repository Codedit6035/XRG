import React from 'react'
import { useState } from 'react';
import AdvisingContent from './AdvisingContent';


const Advising = () => {

  return (
    <div className='container'>
      {/* Tab  container */}
      <div className='flex font-raleway border-b-2 border-shade2'>
        {/* Tab number + advising */}
        <div className="flex   ">
          <div className='px-4 py-2 bg-teal-500  text-white font-semibold text-lg '>01</div>
          <h1
          className={'tab-item text-primary  px-4 text-lg  font-semibold transition-colors duration-300 ' } >
         
          </h1>
        </div>
        {/* empty div for border */}
        <div className='  w-full'></div>
      </div>

      {/* Content Section */}
      <div className="content-container mt-4">
        <AdvisingContent/>
      </div>       
    </div>
  )
}

export default Advising