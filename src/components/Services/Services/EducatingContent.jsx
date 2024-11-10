import React from 'react'
import Adivising from "../../../assets/advising.jpg"

const EducatingContent = () => {
  return (
    <div>
                {/* service1 */}
                <div className='flex justify-center items-center my-20 gap-20'>
                {/* text*/}
                   <div className='flex-1 text-primary font-raleway'>
                       <h1 className='text-6xl font-bold  '>Educating</h1>
                       <p className='pt-5 pb-10 '>When done well, digital architecture creates value by delivering business insight, ensuring consistency, and accelerating decision-making. <br/> We help you plan and shape your digital transformation efforts.</p>
                       {/* buttons*/}
                       <div className='flex  gap-5'>
                          <button className='h-[45px] rounded-sm  border px-10 w-fit hidden'>
                            Learn more
                          </button>  
                          <button className='h-[45px] rounded-lg  px-10 w-fit border-2 border-gray-300 bg-primary text-white '>
                          Learn more
                          </button>                       
                       </div>

                   </div>
                   {/* image*/}
                   <div  className='flex-1'>
                      <img src={Adivising } alt=""  className='h-[400px] w-auto'/>
                   </div>
                </div> 
    </div>
  )
}

export default EducatingContent