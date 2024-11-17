import React, { useEffect, useState } from 'react';
import SchemaOne from '../../../../assets/schemaone.png';
import SchemaTwo from '../../../../assets/schematwo.png';
import SchemaThree from '../../../../assets/schemathree.png';

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
      <div className="container flex flex-col gap-10">
        {/* Title + Blue line */}
        <div>
          <h1 className="text-xl text-shade1 font-semibold mb-4">The XRG Framework</h1>
          <div className="w-16 h-1 bg-shade5 mb-4"></div>
        </div>

        {/* Content */}
        <div className="flex gap-20">
          {/* Left */}
          <div className="flex-1">
            <ul className="flex flex-col gap-5 text-justify list-disc">
              <li>
                The XRG approach represents a strategic framework that integrates
                "business thinking" into sustainability efforts, aiming to align shareholder
                value creation with societal progress. By focusing on three core elements
                that directly contribute to long-term value, the XRG approach helps business
                leaders understand how their companies can adapt and thrive by driving the
                systemic change required for greater resilience, profitability, and positive
                societal impact.
              </li>
            </ul>
          </div>
          {/* Right */}
          <div className="flex-1">
            <ul className="flex flex-col gap-5 list-disc text-justify">
              <li>
                X-Factor: Achieving financial goals by proactively addressing key societal
                challenges, and leveraging the unique systemic strengths of the business for
                long-term impacts.
              </li>
              <li>
                Resilience: Minimizing negative externalities and reducing the impact of
                environmental and social risks in the business model.
              </li>
              <li>
                Governance: Building a purposeful, efficient system that prioritizes doing
                fewer things exceptionally well for maximum impact.
              </li>
            </ul>
          </div>
        </div>

        {/* Schema Section */}
        <div className="p-10" id="schema-section">
          <div className="flex items-center justify-center">
            {/* Schema 1 */}
            <div
              className={`w-2/5 transition-opacity duration-700 ${
                isInView ? 'animate-slideInFromLeft opacity-100' : 'opacity-0'
              }`}
            >
              <img src={SchemaOne} alt="Schema 1" />
            </div>

            {/* Schema 2 */}
            <div
              className={`relative w-2/12 flex justify-center overflow-hidden transition-opacity duration-700 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <img src={SchemaTwo} alt="Schema 2" className="inset-0" />
              <div
                className={`absolute inset-0 bg-white transition-transform ${
                  isInView ? 'transition-transform animate-maskRevealSche' : 'transform scaleX-0'
                }`}
              />
            </div>

            {/* Schema 3 */}
            <div
              className={`w-2/5 transition-opacity duration-700 ${
                isInView ? 'animate-fadeIn opacity-100' : 'opacity-0'
              }`}
            >
              <img src={SchemaThree} alt="Schema 3" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p>
            The world has the knowledge, technology, and resources to build a more resilient and better economy—one that respects planetary boundaries and fosters true societal prosperity. Markets are the best vehicles to deliver this change, and XRG Advisory is your partner on designing your transformative path to economic success through impactful solutions.
          </p>
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