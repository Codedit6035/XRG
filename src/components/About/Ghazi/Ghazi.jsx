// GhaziSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Introduction from './Introduction';
import Formation from './Formation';
import Experience from './Experience';
import Awards from './Awards';

const tabs = [
  { name: 'Introduction', component: Introduction },
  { name: 'Formation', component: Formation },
  { name: 'Experience', component: Experience },
  { name: 'Awards', component: Awards },
];
export default function Ghazi() {
  const [activeTab, setActiveTab] = useState(0);
    // Dynamically render the active component
  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="container  py-20">
      {/* Tab List Container */}
      <div className=" flex gap-2 justify-center">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 border-b-2 transition-colors duration-300 ${
              activeTab === index ? 'border-black' : 'border-gray-300'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === index ? 1 : 0.7 }}
            transition={{ duration: 2 }}
          >
            <button
              className={`tab-item  py-2 text-gray-600 text-2xl transition-colors duration-300 ${
                activeTab === index ? 'text-black font-bold' : ''
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
