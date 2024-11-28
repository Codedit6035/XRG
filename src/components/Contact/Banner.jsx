import React from 'react'
import Navbar from '../Navbar'
import ContactImg from '../../assets/contactimg.jpg'

const Banner = () => {
  return (
<div className='relative'>
<div className=" absolute  top-0 left-0 w-full z-20 ">
 <Navbar /> 
</div>
<div className=''>
 <img src={ContactImg} alt="" className='' />
</div>
</div>
  )
}

export default Banner