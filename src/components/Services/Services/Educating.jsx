import React from 'react'
import { useState } from 'react';
import EducatingContent from './EducatingContent'







const Educating = () => {

  return (
    <div className='container'>
      {/* Tab  container */}
      <div className='flex font-raleway border-b-2 border-shade2'>
        {/* Tab number + advising */}
        <div className="flex   ">
          <div className='px-4 py-2 bg-shade7 text-white font-semibold text-lg '>02</div>
          <h1
          className={'tab-item text-primary  px-4 text-lg  font-semibold transition-colors duration-300 ' } >
         
          </h1>
        </div>
        {/* empty div for border */}
        <div className='  w-full'></div>
      </div>


      {/* Content Section */}
      <div className="content-container mt-4">
         <EducatingContent/>
      </div>       
    </div>
  )
}

export default Educating