import React from 'react'
import Advising from './Services/Advising'
import Educating from './Services/Educating'
import Speaking from './Services/Speaking'

const Services = () => {
  return (
    <div className='bg-primary/90 py-20'>

                <Advising/>
                <Speaking/>
                <Educating/> 

    </div>
  )
}

export default Services