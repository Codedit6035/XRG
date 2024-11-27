import React from 'react'
import Advising from './Services/Advising'
import Educating from './Services/Educating'
import Speaking from './Services/Speaking'

const Services = () => {
  return (
    <div id='services' className='py-20 '>

                <Advising/>
                <Educating/> 
                <Speaking/>
    </div>
  )
}

export default Services