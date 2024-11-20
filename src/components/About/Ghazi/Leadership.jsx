import React from 'react'
import Awards from './Leadership/Awards'
import Achievments from './Leadership/Achievments'


const  Expertise = () => {
  return (
    <div>
      <div className='container flex flex-col gap-10 py-10  '>
        {/*slogan*/}
        <div className=' text-2xl py-10 text-center  '>
          <p className='px-10 text-secondary font-bold'>“If you want to go fast, go alone. If you want to go far, go together” – African Proverb</p>
        </div>
        <Achievments/>
        <Awards/>
         {/* links*/}
          <div>
            <h1>Link (download) Dr. Ghazi Kablouti (Profile document)</h1>
            <h1>Link to LinkedIn Profile (https://www.linkedin.com/in/ghazikablouti/)</h1>
            <h1>Get in Touch</h1>
          </div>

      </div>
    </div>
  )
}

export default  Expertise