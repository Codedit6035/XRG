import React from 'react'

const Footer = () => {
  return (
    <div className='  bg-primary/90 mt-0.5  py-10'>
      <div className='container text-white'>
      <div className='flex flex-col border-b  gap-20 pb-5 pt-5 pr-40'>
      {/* Logo & topins & services */}
      <div className='flex  justify-between '>
        <div>
          <h1 className='text-4xl'> XRG </h1>
        </div>
        <div>
          <h1 className='text-2xl pb-5'>Topics</h1>
          <ul>
            <li>Services</li>
            <li>Industries</li>
            <li>Partnerships</li>
            <li>Accomplishments</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl pb-5'>Services</h1>
          <ul>
            <li>Advising</li>
            <li>Teaching</li>
            <li>Talking</li>
          </ul>
        </div>
      </div>
      </div>
      {/* copyright privacy */}
      <div className='flex justify-between  pt-5'>
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