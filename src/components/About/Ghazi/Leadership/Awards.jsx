import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const Awards = () => {
  return (
    <div>
      <h1 className="text-xl text-shade1 mb-4 font-semibold">Awards and Recognition</h1>
      <div className="w-16 h-1 bg-shade5 mb-8"></div>
      <div className=' pb-10 text-base'>
        <p>
         	Honored with the Hitachi Energy Appreciation Award (2023), GE “Above & Beyond” Excellence Award, Hitachi GX Growth Leadership Program (2024), and the CXO 2.0 Business Leadership Excellence Award (2024).
        </p>
      </div>
      
      <div className="container flex gap-10 justify-center">
        
        {/* Award Card 1 */}
        <div className="bg-shade3 p-10 flex-1 hover:min-h-60 transform transition-all hover:scale-105 duration-300 ease-in-out group relative">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-lg font-semibold text-shade6">Hitachi</h1>

            {/* Hidden award name, takes no space initially */}
            <h1 className="font-semibold text-white opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible  duration-500 max-h-0 group-hover:max-h-20 overflow-hidden transition-all ease-in-out flex justify-center items-center">
              Hitachi Energy Appreciation Award
            </h1>

            <FaTrophy className="text-4xl text-white" />
            <p className="text-sm text-shade2">2023</p>
          </div>
        </div>

        {/* Award Card 2 */}
        <div className="bg-shade5 p-10 flex-1 h-fit hover:min-h-60  transform transition-all hover:scale-105 duration-300 ease-in-out group relative">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-lg font-bold text-shade6">GE</h1>

            {/* Hidden award name, takes no space initially */}
            <h1 className="font-semibold text-white opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible  duration-500 max-h-0 group-hover:max-h-20 overflow-hidden transition-all ease-in-out flex justify-center items-center">
              GE “Above & Beyond” Excellence Award, Hitachi GX Growth Leadership Program
            </h1>

            <FaTrophy className="text-4xl text-white" />
            <p className="text-sm text-shade2">2024</p>
          </div>
        </div>

        {/* Award Card 3 */}
        <div className="bg-shade1 p-10 flex-1 h-fit hover:min-h-60  transform transition-all hover:scale-105 duration-300 ease-in-out group relative">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-lg font-semibold text-shade6">CXO</h1>

            {/* Hidden award name, takes no space initially */}
            <h1 className="font-semibold text-white opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible  duration-500 max-h-0 group-hover:max-h-20 overflow-hidden transition-all ease-in-out flex justify-center items-center">
              CXO 2.0 Business Leadership Excellence Award
            </h1>

            <FaTrophy className="text-4xl text-white" />
            <p className="text-sm text-shade2">2024</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Awards;
