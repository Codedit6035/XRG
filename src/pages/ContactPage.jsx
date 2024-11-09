import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact/Contact'

const ContactPage = () => {
  return (
    <div>
      <div className="  top-0 left-0 w-full z-20 bg-primary ">
        <Navbar titreColor={'white'}/> {/* This is your existing Navbar component */}
      </div>
      <Contact/>
    </div>
  )
}

export default ContactPage