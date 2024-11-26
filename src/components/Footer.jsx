import React from 'react'
import LogoFooter from'../assets/logo.png'
import Flag from "../assets/swissflag.jpg"

const Footer = () => {
  const topics = [
    { label: 'Home', link: '/' },
    { label: 'XRG Approach', link: '/explore' },
    { label: 'Dr. Ghazi Kablouti', link: '/explore' },
    { label: 'Services', link: '/services' },
    { label: 'Get in Touch', link: '/get-in-touch' },
  ];
  // Services data array
  const services = [
    { label: 'Advising' },
    { label: 'Lecturing' },
    { label: 'Speaking' },
  ];
  return (
    <div className='  mt-0.5  py-10 bg-primary'>
      <div className='container text-white'>
      <div className='border-b   py-5  '>
      {/* Logo & topics & services */}
      <div className='flex flex-col gap-10 md:flex-row  '>
        <div className='flex-1 flex flex-col '>
          <a href="/">
            <img src={LogoFooter}alt="XRG Impact Management Advisory Logo" className='w-20 animate-spin-slow '/>           
          </a>
          {/* location*/}
          <div className='flex mt-10 md:mt-auto items-center'>
          <img src={Flag} alt="" className='w-[20px] h-[20px]' />
              <h1 className=' text-white  px-2 text-xs'>Switzerland-based, Worldwide
              Services</h1>
          </div>

        </div>
        <div className='flex-1'>
          <h1 className='text-2xl pb-5 font-bold'>Topics</h1>
          <ul>
                {/* Map through the topics array */}
                {topics.map((topic, index) => (
                  <li key={index}>
                    <a href={topic.link}>{topic.label}</a>
                  </li>
                ))}
          </ul>
        </div>
        <div className='flex-1 '> 
          <h1 className='text-2xl pb-5 font-bold'>Services</h1>
          <ul>
                {/* Map through the services array */}
                {services.map((service, index) => (
                  <li key={index}><a href="/services">{service.label}</a></li>
                ))}
          </ul>
        </div>
      </div>
      </div>
      {/* copyright privacy */}
      <div className='flex flex-col gap-10 md:flex-row md:justify-between  py-5 text-sm '>
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
