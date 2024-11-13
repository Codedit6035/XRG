import React from 'react'

const XrgStory = () => {
  return (
    <div>
    <div className='container flex flex-col gap-10 py-20  '>
      {/*Img*/}
      <div>
        <img src={Image} alt="" className='w-fit' />
      </div>
      {/*Expert1*/}
      <div className='flex gap-10 border-b border-b-gray-500 pb-10'>
        {/* title + Blue line */}
        <div className='w-2/6'>
        <h1 className='  text-xl text-shade1 mb-4 font-semibold'>
        A Paradigm Shift in Business Strategy
        </h1>
        <div className="w-16 h-1 bg-shade5 mb-4 "></div>
        </div>
        {/* content */}
        <div className='w-4/6'>
          <div className='flex flex-col gap-5 custom-list'>
            <p>Companies are the engines of modern society, providing purpose, jobs, and innovations that enhance quality of life and drive prosperity. As societal challenges grow, businesses are increasingly prioritizing sustainability through Environmental, Social, and Governance (ESG) initiatives. Today’s dominant ESG framework seeks to integrate “sustainability thinking” into business operations by quantifying ESG factors that influence shareholder value—specifically, those that pose potential risks to the company.
While ESG often focuses on improving sustainability credentials and enhancing scores to attract investment, impact investing emphasizes backing businesses that actively solve specific societal or environmental challenges, even if these efforts do not directly influence financial performance. Notably, there are many cases of companies performing poorly on ESG metrics while still making a meaningful positive impact on society. There is a real risk that ESG can sometimes foster a sense of complacency or even greenwash business practices, masking the need for deeper, more transformative change.
For business leaders, it is essential to understand how their companies generate shareholder value, how ESG initiatives enhance this value, and which public policies could amplify positive impactsH1</p>
          </div>
        </div>
      </div>
      {/*Expert2*/}
      <div className='flex gap-10 border-b border-b-gray-500 pb-10'>
        {/* title + Blue line */}
        <div className='w-2/6'>
        <h1 className='  text-xl text-shade1 mb-4 font-semibold'>
        XRG Approach
        </h1>
        <div className="w-16 h-1 bg-shade5 mb-4"></div>
        </div>
        {/* content */}
        <div className='w-4/6'>
          <div className='flex flex-col gap-5 custom-list'>
            <p > The XRG approach represents a strategic framework that integrates "business thinking" into sustainability efforts, aiming to align shareholder value creation with societal progress. By focusing on three core elements that directly contribute to long-term value, the XRG approach helps business leaders understand how their companies can adapt and thrive by driving the systemic change required for greater resilience, profitability, and positive societal impact.
              X-Factor: Achieving financial goals by proactively addressing key societal challenges, and leveraging the unique systemic strengths of the business for long-term impacts.
              Resilience: Minimizing negative externalities and reducing the impact of environmental and social risks in the business model.
               Governance: Building a purposeful, efficient system that prioritizes doing fewer things exceptionally well for maximum impact.
            </p>          
        </div>
        </div>
      </div>
      {/*Expert3*/}
      <div className='flex gap-10'>
        {/* title + Blue line */}
        <div className='w-2/6'>
        <h1 className='  text-xl text-shade1 font-semibold mb-4'>
        Certifications & Professional Development incl.: 
        </h1>
        <div className="w-16 h-1 bg-shade5 mb-4"></div>
        </div>
        {/* content */}
        <div className='w-4/6'>
          <ul className='flex flex-col gap-5 custom-list'>
            <li>Business & Human Rights (Council of Europe, 2022)</li>
            <li>Foundations in Responsible Investments (UN PRI Academy, 2020)</li>
            <li>Photovoltaic Solar Energy (École Polytechnique Paris, 2020)</li>
            <li>Smart Cities – Managing Smart Urban Infrastructures (EPFL, 2019)</li>
            <li>Product- and Portfolio Management</li>
            <li>Finance for Non-Financial Managers (GE Academy, 2016)</li>
            <li>Systemic Management and Governance (Malik Management, 2006)</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
  )
}

export default XrgStory