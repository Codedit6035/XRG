import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact/Contact'
import Banner from '../components/Contact/Banner'

const ContactPage = () => {
  return (
    <div className='overflow-hidden'>
      <Banner/>
      <Contact/>
    </div>
  )
}

export default ContactPage