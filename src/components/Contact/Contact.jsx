import React from 'react'


const Contact = () => {
  return (
    <div className='  '>

        <div className='container flex flex-col gap-5  md:flex-row pb-20  pt-10 ' >
            {/* Get In Touch text  bg-slate-950 */}
            <div className=' flex-1   '>
                <h1 className="font-bold text-4xl md:w-3/4">Get In <span className='text-shade7 text-5xl'>Touch</span></h1>
                <p className="py-5 md:w-3/4 border-b">
  We would love to hear from you. Whether you have a question, need more information, or want to explore how we can collaborate, we’re here to assist. <br /><br />
  You can reach out to us directly via email at{" "}
  <a
    href="mailto:contact@xrg-advisory.com"
    className="text-shade7 font-bold hover:underline"
  >
    contact@xrg-advisory.com
  </a>
  , or fill out the form on this page. We’ll get back to you as soon as possible. <br /><br />
  We look forward to connecting with you!
</p>
            </div>
            {/* form */}
            <div className=' flex-1   '>
                 <h1  className="font-bold text-4xl  pb-10 ">Complete <span >the form below</span> </h1>
                 <form action="">
                    <div className='flex flex-col md:flex-row gap-10 pb-5'>
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