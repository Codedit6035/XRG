import React from 'react'
import Adivising from "../../../assets/advising.jpg"

const SpeakingContent = () => {
  return (
    <div>
                {/* service2 */}
                <div className='flex justify-center items-center my-20 gap-20'>
                   {/* image*/}
                   <div  className='flex-1'>
                      <img src={Adivising } alt=""  className='h-[400px] w-auto'/>
                   </div>
                {/* text*/}
                   <div className='flex-1 text-primary'>
                       <h1 className='text-6xl font-bold font-cormorant '>Talking</h1>
                       <p className='pt-5 pb-10 '>When done well, digital architecture creates value by delivering business insight, ensuring consistency, and accelerating decision-making. <br/> We help you plan and shape your digital transformation efforts.</p>
                       {/* buttons*/}
                       <div className='flex  gap-5'>
                          <button className='h-[45px] rounded-sm  border px-10 w-fit hidden'>
                            Learn more
                          </button>  
                          <button className='h-[45px] rounded-sm  border-gray-300 border-2  px-10 w-fit text-primary'>
                            Contact
                          </button>                       
                       </div>

                   </div>
                </div>   
    </div>
  )
}

export default SpeakingContent