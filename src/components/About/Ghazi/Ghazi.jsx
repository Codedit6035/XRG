// GhaziSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import XrgStory from './XrgStory';
import Bio from './Bio';
import Academic from './Academic';
import  Expertise from './Expertise';
import Testimonials from './Testimonials';
import Clients from './Clients';

const tabs = [
  { name: 'XRG Story', component: XrgStory },
  { name: 'Short bio', component: Bio },
  { name: 'Career', component: Expertise},
  { name: 'Academic', component: Academic },
  { name: 'Testimonials', component: Testimonials },
  { name: 'Employers&Clients', component: Clients },
];
export default function Ghazi() {
  const [activeTab, setActiveTab] = useState(0);
    // Dynamically render the active component
  const ActiveComponent = tabs[activeTab].component;

  return (
    <div id="about-me" className=" container  py-20 ">
      {/* Tab List Container */}
      <div className=" flex gap-2 justify-center">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 border-b-2 transition-colors duration-300 ${
              activeTab === index ? 'border-shade5' : 'border-gray-300'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === index ? 1 : 0.7 }}
            transition={{ duration: 2 }}
          >
            <button
              className={`tab-item  py-2 text-gray-600 text-2xl transition-colors duration-300 ${
                activeTab === index ? 'text-shade1 font-bold' : ''
              }`}
            >
              {tab.name}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Tab Content */}
      <motion.div
        key={activeTab} // Animate content on change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="mt-4 text-gray-700"
      >
        <ActiveComponent />
      </motion.div>
    </div>
  );
}
