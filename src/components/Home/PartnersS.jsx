import React from 'react'
import Amazon from '../../assets/Amazon.png'
import Jensen from '../../assets/Jensen.png'
import Tetra from '../../assets/Tetra.png'
import Walter from '../../assets/Walter.avif'
import Ingenic from '../../assets/Ingenic.png'
import Hitachi from '../../assets/Hitachi.png'

const PartnersS = () => {
  return (
    <div className='pt-14 pb-12 font-Raleway '>
        {/* Header section */}
        <div className="mb-10  bg-white  animate-slideInFromLeft w-full pl-20   text-black">
          <h1 className="text-left   text-3xl font-Raleway text-primary">
            Partners
          </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
        </div>  
         {/* body */}  
         <div>

         <div className=" container flex  items-center  w-9/12 bg-zinc-200 px-20 py-5 rounded-md ">
            <div className="flex flex-wrap gap-x-10 gap-y-5 items-center justify-center  text-black  ">
              <img src={Ingenic} alt="" className='w-[150px]' />
              <img src={Amazon} alt="" className='w-[100px]' />
              <img src={Jensen} alt="" className='w-[150px]' />
              <img src={Walter} alt="" className='w-[150px]' />
              <img src={Tetra} alt="" className='w-[150px]' />              
              <img src={Walter} alt="" className='w-[150px]' />
              <img src={Hitachi} alt="" className='w-[100px]' />
  
        
           </div>
    
         </div>       
         </div>



    </div>
  )
}

export default PartnersS
