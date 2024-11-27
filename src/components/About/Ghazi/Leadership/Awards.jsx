import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const Awards = () => {
  return (
    <div className='container'>
      <h1 className="text-xl text-shade1 mb-4 font-semibold">Awards and Recognition</h1>
      <div className="w-16 h-1 bg-shade5 mb-8"></div>
      <div className=' pb-10 text-base'>
        <p>
         	Honored with:
        </p>
      </div>
      
      <div className="container flex flex-col sm:flex-row gap-10 justify-center">

        {/* Award Card 1 */}
        <div className="bg-shade5 p-10 flex-1 ">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-lg font-bold text-secondary">GE</h1>

            {/* Hidden award name, takes no space initially */}
            <h1 className="font-semibold text-white flex justify-center items-center">
              GE “Above & Beyond” Excellence Award
            </h1>

            <FaTrophy className="text-4xl text-white" />
            <p className="text-sm text-shade2">2017</p>
          </div>
        </div>
        {/* Award Card 2 */}
        <div className="bg-shade3 p-10 flex-1 ">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-lg font-semibold text-secondary">Hitachi</h1>

            {/* Hidden award name, takes no space initially */}
            <h1 className="font-semibold text-white flex justify-center items-center">
              Hitachi Energy Appreciation Award
            </h1>
            <h1 className="font-semibold text-white flex justify-center items-center">
            Hitachi GX Growth Leadership Program
            </h1>

            <FaTrophy className="text-4xl text-white" />
            <p className="text-sm text-shade2">2023</p>
            <p className="text-sm text-shade2">2024</p>
          </div>
        </div>

        {/* Award Card 3 */}
        <div className="bg-primary p-10 flex-1 ">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-lg font-semibold text-secondary">CXO</h1>

            {/* Hidden award name, takes no space initially */}
            <h1 className="font-semibold text-whiteflex justify-center items-center text-white">
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
