import React from 'react'

const Contact = () => {
  return (
    <div className='bg-primary/90 text-white  pt-10 '>
        <div className='container flex flex-col  sm:flex-row py-20    ' >
            {/* Get In Touch text  bg-slate-950 */}
            <div className=' flex-1   '>
                <h1 className="font-bold text-4xl">Get In <span className='text-blue-500 text-5xl'>Touch</span></h1>
                <p className="py-5 w-3/4   border-b">
                We woud love to hear from you. <br /><br /> Get in touch if you would like to explore more on how we can help you. <br/><br/>
                 Please fill out the form and we will get back to you as quickly as possible.
                </p>
            </div>
            {/* form */}
            <div className=' flex-1   '>
                 <h1  className="font-bold text-4xl  pb-10 text-neutral-400/70">Complete <span className='  '>the form below</span> </h1>
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
                    <button className='h-[35px]   bg-blue-600/70 w-full  hover:bg-secondary'>
                        Submit
                    </button>

                 </form>
            </div>

        </div>
    </div>
  )
}

export default Contact