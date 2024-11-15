import React from 'react'
import Adivising from "../../../assets/talkingresized.jpg"

import { motion } from 'framer-motion';

const AdvisingContent = () => {
  return (
    <div>
                <div className='flex justify-center  my-20 gap-20 '>
                   {/* text*/}
                   <motion.div className='flex-1 font-raleway space-y-14'
                           initial={{ x: '-100%', opacity: 0 }}
                           whileInView={{ x: 0, opacity: 1 }}
                           transition={{ duration: 1.1, ease: "easeInOut" }}
                           viewport={{ once: true }}
                   >
                       {/*advising + p*/}
                       <h1 className='text-4xl  bg-shade1 text-white w-fit pb-1 px-2'>Advising</h1>
                       <p className=' text-primary'>Empowering businesses to leverage their systemic strengths for long-term value and impact</p>
                       {/*corporations*/}
                       <div className='space-y-7'>
                        <h1 className='text-xl font-semibold underline text-primary  '>Corporations: </h1>
                        <p className='text-sm'>with a focus on resource-Intensive Corporations and Start-Ups in Energy & Utilities, Capital Goods Manufacturing, Materials, Chemicals, and Healthcare</p>
                        <ul className='list-disc space-y-3 text-sm'>
                          <li>
                            <span className='font-semibold'>Serving as a Corporate Board Member or Executive Advisor– </span>offering strategic insights and guidance at the highest levels.
                          </li>
                          <li>
                            <span className='font-semibold'>Assessing Environmental and Social Risks and Opportunities–  </span>evaluating impacts across the business model and product portfolio to pinpoint key areas for sustainable growth.
                          </li>
                          <li>
                            <span className='font-semibold'>Creating Value Pathways–  </span>developing strategies to address societal challenges that drive value through sustainable practices.
                          </li>
                          <li>
                            <span className='font-semibold'>Building a Compelling Business Case for Change– </span>crafting persuasive narratives to support the shift toward more sustainable strategies and business models.
                          </li>
                        </ul>
                       </div>                  
                   </motion.div>
                   {/* image*/}
                   <motion.div  className="flex-1 "
                           initial={{ x: '100%', opacity: 0 }}
                           whileInView={{ x: 0, opacity: 1 }}
                           transition={{ duration: 1.1, ease: "easeInOut" }}
                           viewport={{ once: true }}>
                      <img src={Adivising } alt=""  className='h-[600px] w-full ' />
                   </motion.div>
                </div>   
                {/* part 2*/}
                <div className='flex justify-center  my-20 gap-20 bg-shade5'>
                   {/* text*/}
                   <motion.div className='flex-1 font-raleway space-y-14 bg-shade5  p-10   '
                                        initial={{ x: '-100%', opacity: 0 }}
                                       whileInView={{ x: 0, opacity: 1 }}
                                       transition={{ duration: 1.1, ease: "easeInOut" }}
                                       viewport={{ once: true }}>    
                         {/*Financial Services:*/}
                         <div className='space-y-7'>
                         <h1 className='text-xl font-semibold underline text-white '>Financial Services: </h1>
                         <ul className='list-disc space-y-3 text-sm text-shade2 px-10'>
                           <li>
                             <span className='font-semibold'>	Evaluating Environmental and Social Risks and Opportunities– </span>analyzing portfolio companies' business models to identify critical sustainability risks and growth opportunities.
                           </li>
                           <li>
                             <span className='font-semibold'>	Supporting Informed Investment Decisions–  </span>advising on current value creation by addressing key societal challenges and assessing future impact and value potential.
                           </li>
                           <li>
                             <span className='font-semibold'>	Defining and Guiding Transformation Needs–  </span>identifying essential transformation requirements for portfolio companies and supporting the implementation process
                           </li>
                         </ul>
                        </div> 
                   </motion.div>
                   {/* text*/}
                   <motion.div className='flex-1 font-raleway space-y-14 bg-shade1   p-10  '
                                       initial={{ x: '100%', opacity: 0 }}
                                       whileInView={{ x: 0, opacity: 1 }}
                                       transition={{ duration: 1.1, ease: "easeInOut" }}
                                       viewport={{ once: true }}>   
                       {/*Policy and Standards Makers:*/}
                       <div className='space-y-10'>
                        <h1 className='text-xl font-semibold underline text-white '>Policy and Standards Makers:</h1>
                        <ul className='list-disc space-y-3 text-sm text-shade2  px-10'>
                          <li>
                            <span className='font-semibold'>Providing Data-Driven Insights to Policymakers–  </span>identifying critical levers to craft effective policies that drive meaningful change.
                          </li>
                          <li>
                            <span className='font-semibold'>Advising Standardization Bodies on Sustainability Standards– </span> pinpointing gaps and recommending new standards at corporate and product levels to support an impact-driven economy.
                          </li>
                        </ul>
                       </div>
                   </motion.div>
                </div>   
             
    </div>
  )
}

export default AdvisingContent

