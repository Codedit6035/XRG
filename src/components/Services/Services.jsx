import React from 'react'
import Advising from './Services/Advising'
import Educating from './Services/Educating'
import Speaking from './Services/Speaking'

const Services = () => {
  return (
    <div id='nextservices' className='py-20 mt-[35px]'>

                <Advising/>
                <Speaking/>
                <Educating/> 

    </div>
  )
}

export default Services