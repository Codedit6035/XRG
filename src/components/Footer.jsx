import React from 'react'
import LogoFooter from'../assets/logo.png'
import Flag from "../assets/swissflag.jpg"

const Footer = () => {
  return (
    <div className='  mt-0.5  py-10 bg-primary'>
      <div className='container text-white'>
      <div className='border-b   py-5  '>
      {/* Logo & topins & services */}
      <div className='flex '>
        <div className='flex-1 flex flex-col'>
          <a href="/">
            <img src={LogoFooter}alt="" className='w-20 animate-spin-slow '/>           
          </a>
          {/* location*/}
          <div className='flex  mt-auto'>
          <img src={Flag} alt="" className='w-[20px] h-[20px]' />
              <h1 className=' text-white  px-2 text-sm'>Switzerland-based, Worldwide
              Services</h1>
          </div>

        </div>
        <div className='flex-1'>
          <h1 className='text-2xl pb-5 font-bold'>Topics</h1>
          <ul>
            <li >
              <a href="/">Home</a>
            </li>
            <li >
              <a href="/explore">XRG Approach</a>
            </li>
            <li >
              <a href="/explore">Dr. Ghazi Kablouti</a>
            </li>
            <a href="/services">
              <li>Services</li>
            </a>
            <li >
              <a href="/get in touch">Get in Touch</a>
            </li>
          </ul>
        </div>
        <div className='flex-1 '> 
          <h1 className='text-2xl pb-5 font-bold'>Services</h1>
          <ul>
            <li>Advising</li>
            <li>Lecturing</li>
            <li>Speaing</li>
          </ul>
        </div>

      </div>
      </div>
      {/* copyright privacy */}
      <div className='flex justify-between  py-5 '>
        <h1>© XRG Impact Management Advisory 2024</h1>
        <div className='flex'>
          <a href="/Privacy, Terms & Conditions of Use">Privacy, Terms & Conditions of Use</a>   
        </div>           

      </div>
      </div>
    </div>
  )
}

export default Footer
