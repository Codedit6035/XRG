import React from 'react'
import Hero from '../components/Home/Hero'
import Separation from '../components/Home/Separation'
import AboutS from '../components/Home/AboutS'
import SeparationAb from '../components/Home/SeparationAb'
import ServicesS from '../components/Home/ServicesS'
import ContactS from '../components/Home/ContactS'
import PartnersS from '../components/Home/PartnersS'
import SeparationServ from '../components/Home/SeparationServ'


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Separation/>
      <AboutS/>
      <SeparationAb/>
      <ServicesS/>
      <SeparationServ/>
      <PartnersS/>
      <ContactS/>
    </div>
  )
}

export default HomePage