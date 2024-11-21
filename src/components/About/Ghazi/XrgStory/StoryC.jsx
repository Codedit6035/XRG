import React, { useEffect, useState } from 'react';
import SchemaOne from '../../../../assets/schemaone.png';
import SchemaTwo from '../../../../assets/schematwo.png';
import SchemaThree from '../../../../assets/schemathree.png';
import Name from '../../../../assets/name.png';

const StoryC = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const section = document.querySelector('#schema-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="container pt-10">
      <div className="container flex flex-col gap-10 font-raleway text-base">
        {/* Title + Blue line */}
        <div>
          <h1 className="text-2xl text-shade1 font-semibold mb-4">The XRG Framework</h1>
          <div className="w-16 h-1 bg-shade5 mb-4"></div>
        </div>

        {/* Content */}
        <div className="flex gap-20">
          {/* Left */}
          <div className="flex-1">
            <ul className="flex flex-col gap-5 text-justify list-disc ">
              <li>
              We believe that the best response to this situation is not to continue advocating for further integration of sustainability into business strategy, but transforming how companies set goals, design strategy, and create value
              </li>
              <li>
              The XRG approach offers a strategic framework that integrates "business thinking" into sustainability efforts, aligning shareholder value creation with societal progress.
              </li>
              <li>
              By focusing on three core elements that directly contribute to long-term value, the XRG approach helps business leaders understand how their companies can adapt and thrive by driving the systemic change needed for greater resilience, profitability, and positive societal impact.
              </li>
            </ul>
          </div>
          {/* Right */}
          <div className="flex-1">
            <ul className="flex flex-col gap-5 list-disc text-justify ">
              <li>
               <strong> X-Factor:</strong> Achieving financial goals by proactively addressing key societal challenges, and leveraging the unique systemic strengths of the business to act, enable and influence for long-term impacts.
              </li>
              <li>
               <strong>Resilience:</strong> Adapting to the underlying changes potentially affecting the business, minimizing negative externalities, and reducing the impact of environmental and social risks in the business model.
              </li>
              <li>
              <strong>Governance:</strong> Building a purposeful, viable and efficient system that prioritizes doing fewer things exceptionally well for maximum impact.
              </li>
            </ul>
          </div>
        </div>

        {/* Schema Section */}
        <div className=" = flex flex-col items-center" id="schema-section">
          <div className="flex items-center justify-center =">
            {/* Schema 1 */}
            <div
              className={`w-[50%]  transition-opacity duration-700 = ${
                isInView ? 'animate-slideInFromLeft opacity-100' : 'opacity-0'
              }`}
            >
              <img src={SchemaOne} alt="Schema 1" />
            </div>

            {/* Schema 2 */}
            <div
              className={`relative w-[10%] flex justify-center overflow-hidden transition-opacity duration-700 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <img src={SchemaTwo} alt="Schema 2" className="inset-0" />
              <div
                className={`absolute  inset-0 bg-white transition-transform ${
                  isInView ? 'transition-transform animate-maskRevealSche' : 'transform scaleX-0'
                }`}
              />
            </div>

            {/* Schema 3 */}
            <div
              className={`w-[50%]  ml-5 transition-opacity duration-700 ${
                isInView ? 'animate-fadeIn ' : 'opacity-0'
              }`}
            >
              <img src={SchemaThree} alt="Schema 3" />
            </div>
          </div>


          <div>
          <img src={Name} alt="" />
          </div>
        </div>



        {/* Text */}
        <div className="text-center ">
          <p>
           The world possesses the knowledge, technology, and resources needed to build a more resilient and prosperous economy—one that respects planetary boundaries and fosters genuine societal well-being. Markets are the most effective vehicles to drive this transformation, and XRG Advisory is your trusted partner in designing a transformative path to economic success through impactful, sustainable solutions 
          </p>
        </div>
        {/* Get in touch link */}
        <div className=" flex  justify-center items-center  gap-10 ">
          <div className=''>
            <span>Any thoughts, need for support, </span>
             <a href="/get in touch" className='font-bold text-shade7 '><span>let’s get in touch</span></a>
          </div>
        </div>
        {/* services link */}
        <div className="text-center justify-center items-center space-y-5 bg-shade2 p-5">
          <h1 className='text-2xl'>
          Explore our Services
          </h1>
          <button className='bg-shade7 hover:bg-primary font-bold  text-xl text-white   px-5 py-2'>Services</button>
        </div>

                
      </div>
    </div>
  );
};

export default StoryC;


{/* <div className='relative w-2/12  flex justify-center  overflow-hidden '>
<img src={SchemaTwo} alt="" className='inset-0  ' />
<div
className='absolute inset-0 bg-white transition-transform animate-maskRevealSche'
/>
</div> */}