import React from 'react'
import Adivising from "../../../assets/educating2.jpeg"

const EducatingContent = () => {
  return (
    <div>
                <div className='flex justify-center  my-20 gap-20 '>
                   {/* image*/}
                   <div  className='flex-1  '>
                      <img src={Adivising } alt=""  className='h-[450px] w-full '/>
                   </div>
                   {/* text*/}
                   <div className='flex-1 font-raleway space-y-14'>
                       {/*advising + p*/}
                       <h1 className='text-4xl  bg-shade1 text-white w-fit pb-1 px-2'>Educating</h1>
                       <p className='text-primary text-sm'>Shaping the next generation of leaders with a vision and sense of urgency for change.</p>
                       {/*corporations*/}
                       <div className='space-y-7'>
                        <ul className='list-disc space-y-3 text-sm'>
                          <li>
                            <span className='font-semibold'>Collaborating with Academic Program Directors–  </span>partnering with engineering and business schools to design innovative, impactful curricula focused on Business & Society.
                          </li>
                          <li>
                            <span className='font-semibold'>Developing and Delivering Courses on Business & Society– </span>across academic and executive education levels
                          </li>
                          <li>
                            <span className='font-semibold'>Supervising Theses at All Academic Levels– </span>guiding bachelor’s, master’s, and doctoral students in developing research aligned with sustainable business practices.
                          </li>
                          <li>
                            <span className='font-semibold'>Renewing or Enhancing Existing Curricula– </span>updating and refining Business & Society courses to keep pace with evolving sustainability needs.
                          </li>
                          <li>
                            <span className='font-semibold'>Coaching New Business Leaders– </span>mentoring and coaching entrepreneurs to become responsible leaders equipped to navigate and shape a more sustainable future.
                          </li>
                        </ul>
                       </div>                  
                   </div>
                </div>   
    </div>
  )
}

export default EducatingContent