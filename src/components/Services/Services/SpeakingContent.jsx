import React from 'react'
import Speaking from "../../../assets/speaking.png"
import { motion } from 'framer-motion';

const SpeakingContent = () => {
  return (
    <div>
                <div className='flex flex-col lg:flex-row justify-center  my-10 gap-20  bg-red-900'>
                   {/* text*/}
                   <motion.div className='flex-1  space-y-14 '
                                              initial={{ x: '-100%', opacity: 0 }}
                                              whileInView={{ x: 0, opacity: 1 }}
                                              transition={{ duration: 1.1, ease: "easeInOut" }}
                                              viewport={{ once: true }}>
                       {/*advising + p*/}
                       <h1 className='text-4xl  bg-shade1 text-white w-fit pb-1 px-2'>Speaking</h1>
                       <p>Connecting, inspiring, and engaging to drive societal progress</p>
                       {/*corporations*/}
                       <div className='space-y-7'>
                        <ul className='list-disc space-y-3 pl-5  '>
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
                      className="flex-1 overflow-hidden"
                      initial={{ x: '100%', opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.1, ease: "easeInOut" }}
                      viewport={{ once: true}}>
                      <div style={{ backgroundImage: `url(${Speaking})`  }} className=" w-screen lg:w-full aspect-[4/3] lg:aspect-auto lg:h-full bg-cover bg-center bg-no-repeat">
                      </div>
                   </motion.div>
                </div>   
    </div>
  )
}

export default SpeakingContent