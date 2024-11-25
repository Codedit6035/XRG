// GhaziSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import XrgStory from './XrgStory';
import Bio from './Bio';
import Academic from './Academic';
import  Expertise from './Expertise';
import Testimonials from './Testimonials';
import Leadership from './Leadership.jsx'

const tabs = [
  { name: 'XRG Approach', component: XrgStory },
  { name: 'Biography', component: Bio },
  { name: 'Expertise', component: Expertise},
  { name: 'Achievements', component: Leadership},
  { name: 'Academia', component: Academic },
  { name: 'Testimonials', component: Testimonials },
];
export default function Ghazi() {
  const [activeTab, setActiveTab] = useState(0);
    // Dynamically render the active component
  const ActiveComponent = tabs[activeTab].component;

  return (
    <div id="about-me" className="  pt-20  text-primary">
      {/* Tab List Container */}
      <div className=" flex gap-2 justify-center container ">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 border-b-2 py-1 transition-colors duration-300 ${
              activeTab === index ? 'border-shade7 bg-shade7 pl-2' : 'border-gray-300'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === index ? 1 : 0.7 }}
            transition={{ duration: 2 }}
          >
            <button
              className={`tab-item   text-gray-600 text-2xl transition-colors duration-300 ${
                activeTab === index ? 'text-white font-bold' : ''
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
        className="mt-4 text-gray-700  "
      >
        <ActiveComponent  />
      </motion.div>
    </div>
  );
}
