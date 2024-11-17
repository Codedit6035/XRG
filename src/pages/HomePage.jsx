import React from 'react'
import Hero from '../components/Home/Hero'
import Separation from '../components/Home/Separation'
import ServicesS from '../components/Home/ServicesS'
import ContactS from '../components/Home/ContactS'
import PartnersS from '../components/Home/PartnersS'
import SeparationServ from '../components/Home/SeparationServ'
import XrgS from '../components/Home/XrgS'
import FounderS from '../components/Home/FounderS'
import SeparationFou from '../components/Home/SeparationFou'
import SeparationXrg from '../components/Home/SeparationXrg'


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Separation/>
      <XrgS/>
      <SeparationXrg/>
      <FounderS/>
      <SeparationFou/>
      <ServicesS/>
      <SeparationServ/>
      <PartnersS/>
      <ContactS/>
    </div>
  )
}

export default HomePage