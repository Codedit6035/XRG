import React from 'react'
import Hero from '../components/Home/Hero'
import Separation from '../components/Home/Separation'
import AboutS from '../components/Home/AboutS'
import SeparationAb from '../components/Home/SeparationAb'
import ServicesS from '../components/Home/ServicesS'


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Separation/>
      <AboutS/>
      <SeparationAb/>
      <ServicesS/>
    </div>
  )
}

export default HomePage