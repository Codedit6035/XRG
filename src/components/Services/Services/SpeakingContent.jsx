import React from 'react'
import Speaking from "../../../assets/speaking.png"
import { motion } from 'framer-motion';

const SpeakingContent = () => {
  return (
    <div>
                <div className='flex justify-center  my-20 gap-20 '>
                   {/* text*/}
                   <motion.div className='flex-1 font-raleway space-y-14'
                                              initial={{ x: '-100%', opacity: 0 }}
                                              whileInView={{ x: 0, opacity: 1 }}
                                              transition={{ duration: 1.1, ease: "easeInOut" }}
                                              viewport={{ once: true }}>
                       {/*advising + p*/}
                       <h1 className='text-4xl  bg-shade1 text-white w-fit pb-1 px-2'>Speaking</h1>
                       <p className='text-primary text-sm'>Connecting, inspiring, and engaging to drive societal progress</p>
                       {/*corporations*/}
                       <div className='space-y-7'>
                        <ul className='list-disc space-y-3 text-sm'>
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
                   </motion.div>
                   {/* image*/}
                   <motion.div
                      className="flex-1"
                      initial={{ x: '100%', opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.1, ease: "easeInOut" }}
                      viewport={{ once: true}}>
                      <img src={Speaking } alt=""  className='h-fit w-fit'/>
                   </motion.div>
                </div>   
    </div>
  )
}

export default SpeakingContent