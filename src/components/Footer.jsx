import React from 'react'
import LogoFooter from'../assets/logo.png'
import Flag from "../assets/swissflag.jpg"

const Footer = () => {
  return (
    <div className='  bg-primary mt-0.5  py-10 font-raleway  text-base'>
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
              <h1 className=' text-white  px-2 text-sm'>Based in Switzerland</h1>
              <img src={Flag} alt="" className='w-[20px] h-[20px]' />
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
              <a href="/get in touch">Contact</a>
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
          <h1>Privacy Policy</h1>    
          <h1>Terms</h1>
        </div>           

      </div>
      </div>
    </div>
  )
}

export default Footer
