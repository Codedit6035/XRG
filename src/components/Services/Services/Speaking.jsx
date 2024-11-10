import React from 'react'
import { useState } from 'react';
import SpeakingContent from './SpeakingContent';



function Industries() {
  return <div>This is the Industries content.</div>;
}



const Speaking = () => {
  const [activeTab, setActiveTab] = useState('advising');
  return (
    <div className='container'>
       {/* Tab Container container for the rest of the border */}
       <div className='flex'>
      {/* Tab Container */}
      <div className="flex text-primary ">
        <button
          onClick={() => setActiveTab('advising')}
          className={`tab-item pb-2 px-4 border-l-2 border-primary text-lg font-semibold transition-colors duration-300 ${
            activeTab === 'advising' ?  'border-b-none' :  'border-b-2 border-primary0 text-gray-300'
          }`}
        >
          Speaking
        </button>
        <button
          onClick={() => setActiveTab('industries')}
          className={`tab-item pb-2 px-4 border-l-2  border-primary text-lg font-semibold transition-colors duration-300 ${
            activeTab === 'industries' ?   'border-b-none' :  'border-b-2 border-primary text-gray-300'
          }`}
        >
          Industries
        </button>
      </div>
        {/* empty div for border */}
        <div className='border-b-2 border-primary w-full'></div>
      </div>

      {/* Content Section */}
      <div className="content-container mt-4">
        {activeTab === 'advising' ? <SpeakingContent/> : <Industries />}
      </div>       
    </div>
  )
}

export default Speaking