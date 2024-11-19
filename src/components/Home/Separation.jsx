import React from 'react'
import { motion } from 'framer-motion';


const Separation = () => {
  return (
    <div id="next-section" className='  font-Raleway  mt-[35px] h-screen flex flex-col justify-center items-center gap-2 text-primary'  >
                <h1 data-aos="fade-down" className=' text-4xl font-bold'> The End of Traditional ESG</h1>    
                <h1 data-aos="fade-down"  className='text-6xl font-bold mb-10'>Competing for a Sustainable Future</h1>
        <motion.div className='text-justify relative  text-primary font-semibold w-9/12'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                viewport={{ once: true }}>        
          <p className='text-2xl mb-2 '>“It is time to confront the uncomfortable truth: the ESG (Environmental, Social, and Governance) agenda, as we know it, is over. In the decade ahead, businesses must compete not only for market share but for the future itself. The rewards will be significant: long-term resilience, market leadership, and the ability to thrive in a world grounded in essential environmental and social foundations”.</p>
          <h1 className='absolute right-0 text-lg italic '> – Financial Times, <span className='text-base font-light'>September 2024</span></h1>
        </motion.div>
    </div>
  )
}

export default Separation