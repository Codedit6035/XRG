import React from 'react'
import Schema from '../../../../assets/schema.png'

const StoryC = () => {
  return (
    <div className='container  pt-10 '>
      <div className=' container flex flex-col gap-10'>

        {/* title + Blue line */}
        <div className=''>
        <h1 className='  text-xl text-shade1 font-semibold mb-4'>
        The XRG Framework
        </h1>
        <div className="w-16 h-1 bg-shade5 mb-4"></div>
        </div>
        {/* content */}
        <div className='flex gap-20'>
        {/* left*/}  
        <div className='flex-1'>
          <ul className='flex flex-col gap-5 text-justify list-disc'>
            <li>The XRG approach represents a strategic framework that integrates "business thinking" into sustainability efforts, aiming to align shareholder value creation with societal progress. By focusing on three core elements that directly contribute to long-term value, the XRG approach helps business leaders understand how their companies can adapt and thrive by driving the systemic change required for greater resilience, profitability, and positive societal impact.</li>
          </ul>
        </div>
        {/* right*/}
        <div className=' flex-1'>
          <ul className='flex flex-col gap-5 list-disc text-justify'>
            <li>X-Factor: Achieving financial goals by proactively addressing key societal challenges, and leveraging the unique systemic strengths of the business for long-term impacts.</li>
            <li>Resilience: Minimizing negative externalities and reducing the impact of environmental and social risks in the business model.</li>
            <li>Governance: Building a purposeful, efficient system that prioritizes doing fewer things exceptionally well for maximum impact.</li>
          </ul>
        </div>
        </div>
        {/* schema*/}
        <div className='bg '>
           <h1 className='  text-xl text-shade1 font-semibold mb-5 text-center'>
            From ESG to XRG 
           </h1>
           <img src={Schema} alt="" />
        </div>
        {/* schema*/}
        <div className='bg '>
            <p>The world has the knowledge, technology, and resources to build a more resilient and better economy—one that respects planetary boundaries and fosters true societal prosperity. Markets are the best vehicles to deliver this change, and XRG Advisory is your partner on designing your transformative path to economic success through impactful solutions.</p>
        </div>

      </div>
    </div>
  )
}

export default StoryC