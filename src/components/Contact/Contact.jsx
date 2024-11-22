import React from 'react'


const Contact = () => {
  return (
    <div className=' text-primary '>

        <div className='container flex flex-col  sm:flex-row pb-20  pt-10 font-raleway text-base text-primary' >
            {/* Get In Touch text  bg-slate-950 */}
            <div className=' flex-1   '>
                <h1 className="font-bold text-4xl ">Get In <span className='text-shade7 text-5xl'>Touch</span></h1>

            </div>
            {/* form */}
            <div className=' flex-1   '>
                 <h1  className="font-bold text-4xl  pb-10 text-primary">Complete <span className='  '>the form below</span> </h1>
                 <form action="">
                    <div className='flex gap-10 pb-5'>
                        <div className='flex flex-col flex-1 '>
                            <label htmlFor="" className='text-sm'>First name</label>
                            <input type="text" className=' h-[35px]   bg-neutral-300/30'/>
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='text-sm'>Last name</label>
                            <input type="text" className=' h-[35px]  bg-neutral-300/30'/>
                        </div>                        
                    </div>
                    <div className='flex flex-col pb-5'>
                        <label htmlFor="" className='text-sm'>Email</label>
                        <input type="text"className=' h-[35px]  bg-neutral-300/30' />
                    </div>
                    <div className='flex flex-col pb-5'>
                        <label htmlFor="" className='text-sm'>Message</label>
                        <input type="text" className='h-[80px]   bg-neutral-300/30'/>
                    </div>
                    <button className='h-[35px] bg-shade7 hover:bg-primary font-bold  text-xl text-white w-full  '>
                        Submit
                    </button>

                 </form>
            </div>

        </div>
    </div>
  )
}

export default Contact