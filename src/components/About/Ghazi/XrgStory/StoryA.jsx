import React from 'react'

const StoryA = () => {
  return (
    <div className='container   '>
      <div className=' container flex flex-col gap-10'>
        {/* title + Blue line */}
        <div className=''>
        <h1 className='  text-xl text-shade1 font-semibold mb-4'>
        A Paradigm Shift in Business Strategy
        </h1>
        <div className="w-16 h-1 bg-shade5 mb-4"></div>
        </div>
        {/* content */}
        <div className='flex gap-20'>
        {/* left*/}  
        <div className='flex-1'>
          <ul className='flex flex-col gap-5 list-disc text-justify text-sm'>
            <li>Companies are the engines of modern society, providing purpose, jobs, and innovations that enhance quality of life and drive prosperity. As societal challenges grow, businesses are increasingly prioritizing sustainability through Environmental, Social, and Governance (ESG) initiatives. </li>
            <li>Today’s dominant ESG framework seeks to integrate “sustainability thinking” into business operations by quantifying ESG factors that influence shareholder value—specifically, those that pose potential risks to the company.</li>
            <li>While ESG often focuses on improving sustainability credentials and enhancing scores to attract investment, impact investing emphasizes backing businesses that actively solve specific societal or environmental challenges, even if these efforts do not directly influence financial performance. </li>
          </ul>
        </div>
        {/* right*/}
        <div className=' flex-1'>
          <ul className='flex flex-col gap-5 list-disc text-justify text-sm'>
            <li>Notably, there are many cases of companies performing poorly on ESG metrics while still making a meaningful positive impact on society. There is a real risk that ESG can sometimes foster a sense of complacency or even greenwash business practices, masking the need for deeper, more transformative change.</li>
            <li>For business leaders, it is essential to understand how their companies generate shareholder value, how ESG initiatives enhance this value, and which public policies could amplify positive impacts. </li>

          </ul>
        </div>
        </div>
      </div>

    </div>
  )
}

export default StoryA