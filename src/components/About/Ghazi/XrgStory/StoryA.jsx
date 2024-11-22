import React from 'react'
import Img from "../../../../assets/Img.jpeg"
import { motion } from 'framer-motion';

const StoryA = () => {
  return (
    <div className=''>
      <div className=' flex flex-col gap-10 font-raleway text-base '>
        {/*quote img*/}
        <div className='flex gap-1'>
        <motion.div className='flex   text-2xl py-10  text-justify justify-center items-center flex-1 bg-shade2/50'
                                   initial={{ x: '-100%', opacity: 0 }}
                                   whileInView={{ x: 0, opacity: 1 }}
                                   transition={{ duration: 1.1, ease: "easeInOut" }}
                                   viewport={{ once: true }}>
          <p className='px-10 text-primary font-bold  '>“ESG as it stands — grounded in disclosures and voluntary market action — will not deliver the necessary change … We must urgently address the tension between profitability and sustainability” – <br /> <span className='text-lg text-shade6'>Cambridge University*</span></p>
        </motion.div>
        <motion.div className='flex-1'
                                   initial={{ x: '100%', opacity: 0 }}
                                   whileInView={{ x: 0, opacity: 1 }}
                                   transition={{ duration: 1.1, ease: "easeInOut" }}
                                   viewport={{ once: true }}>
          <img src={Img} alt="" className=' size-full' />
        </motion.div>
        </div>
        {/* title + Blue line */}
        <div className='container'>
        <h1 className='  text-2xl text-shade1 font-semibold mb-4'>
        Redefining Sustainable Business
        </h1>
        <div className="w-16 h-1 bg-shade5 mb-4"></div>
        </div>
        {/* content */}
        <div className='container flex gap-20'>
        {/* left*/}  
        <div className='flex-1'>
          <ul className='flex flex-col gap-5 list-disc text-justify '>
            <li>Companies are the engines of modern society, providing purpose, jobs, and innovations that improve quality of life and drive prosperity. As societal challenges grow, businesses are increasingly prioritizing sustainability through Environmental, Social, and Governance (ESG) initiatives. </li>
            <li>Today’s dominant ESG framework focuses on integrating “sustainability thinking” into business operations by quantifying ESG factors that influence shareholder value, particularly those that present potential risks to the company.</li>
          </ul>
        </div>
        {/* right*/}
        <div className=' flex-1'>
          <ul className='flex flex-col gap-5 list-disc text-justify '>
            <li >However, while ESG often centers on improving sustainability credentials and boosting scores to attract investment, impact investing takes a different approach. It emphasizes backing businesses that actively address societal or environmental challenges, even when these efforts don’t directly correlate with financial performance. </li>
            <li>Notably, many companies that perform poorly on ESG metrics still make a significant positive impact on society. This highlights a real risk that ESG can sometimes lead to complacency or greenwashing, masking the need for deeper, more transformative change.</li>
            <h1 className='text-[12px]  italic text-primary '>*Survival of the Fittest: From ESG to Competitive Sustainability. Cambridge Institute for Sustainability Leadership (2024).</h1>

          </ul>
        </div>
        </div>
      </div>

    </div>
  )
}

export default StoryA