import React from 'react'
import Awards from './Leadership/Awards'
import Achievments from './Leadership/Achievments'


const  Expertise = () => {
  return (
    <div>
      <div className='container flex flex-col gap-10 py-20  '>
        <Awards/>
        <Achievments/>
      </div>
    </div>
  )
}

export default  Expertise