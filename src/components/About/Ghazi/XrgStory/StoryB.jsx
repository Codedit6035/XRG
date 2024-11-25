import React from 'react'
import StoryImg from '../../../../assets/storyb.jpg'

const StoryB = () => {
  return (
    <div className='relative  h-[200px] my-10 ' >
       {/* background pattern */}      
      <div style={{ backgroundImage: `url(${StoryImg})` }} 
           className="h-full w-full bg-cover bg-center  ">
      </div>
      {/* content Overlay */}
       <div className='container absolute inset-0 flex items-center justify-center  z-10 text-shade1'>
        <h1  className="text-3xl md:text-5xl lg:text-6xl font-bold  mb-2">Our Approach</h1>

      </div>
    </div>
  )
}

export default StoryB