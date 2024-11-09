import React from 'react'
import Banner from '../components/About/Banner'
import Ghazi from '../components/About/Ghazi/Ghazi'

const AboutPage = ({titreColor}) => {
  return (
    <div>
      <Banner titreColor={titreColor}/>
      <Ghazi/>



    </div>
  )
}

export default AboutPage