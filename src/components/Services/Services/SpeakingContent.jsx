import React from 'react'
import Speaking from "../../../assets/advising.jpg"

const SpeakingContent = () => {
  return (
    <div>
                <div className='flex justify-center  my-20 gap-20 '>
                   {/* text*/}
                   <div className='flex-1 font-raleway space-y-14'>
                       {/*advising + p*/}
                       <h1 className='text-5xl  bg-shade1 text-white w-fit px-1'>Speaking</h1>
                       <p className='text-primary'>Connecting, inspiring, and engaging to drive societal progress</p>
                       {/*corporations*/}
                       <div className='space-y-7'>
                        <ul className='list-disc space-y-3'>
                          <li>
                            <span className='font-semibold'>Delivering Presentations, Keynotes, and Panel Discussions– </span>offering insights and perspectives to inspire and drive meaningful dialogue.
                          </li>
                          <li>
                            <span className='font-semibold'>Moderating Conferences and Corporate Events–  </span>facilitating impactful discussions with stakeholders to foster engagement and alignment.
                          </li>
                          <li>
                            <span className='font-semibold'>Advising on Conference Program Design– </span>shaping event agendas to ensure relevance, innovation, and alignment with audience needs.
                          </li>
                        </ul>
                       </div>                  
                   </div>
                   {/* image*/}
                   <div  className='flex-1 '>
                      <img src={Speaking } alt=""  className='h-fit w-fit'/>
                   </div>
                </div>   
    </div>
  )
}

export default SpeakingContent