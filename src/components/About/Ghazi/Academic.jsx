import React from 'react'
import { FaDownload } from "react-icons/fa";

const Academic = () => {
  return (
    <div className=' container '> 
    <div className='flex gap-10 py-20' >
              {/* certificates*/}
              <div className='flex-1 '>
                  <h1 className='text-xl text-shade1 mb-4 font-semibold '>Courses and certificates</h1>
                  {/* Blue line */}
                  <div className="w-16 h-1 bg-shade5 mb-4  "></div>  
                  <div className='flex flex-col gap-5'>

                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1 className='text-lg'>Business and Human Rights </h1>
                    <h1 className='text-sm'> Council of Europe, 2022</h1>
                  </div>
                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1  className='text-lg'>Foundations in Responsible Investments </h1>
                    <h1 className='text-sm'> UN PRI Academy, 2020</h1>
                  </div>
                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1  className='text-lg'>Photovoltaic Solar Energy </h1>
                    <h1 className='text-sm'> École Polytechnique Paris, 2020</h1>
                  </div>
                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1  className='text-lg'>Smart Cities – Managing Smart Urban Infrastructures</h1>
                    <h1 className='text-sm'> EPFL, 2019</h1>
                  </div>
                  <div className='bg-shade2/30 rounded-s-sm p-3'>
                    <h1  className='text-lg'>Finance for Non-Finance Managers </h1>
                    <h1 className='text-sm'>GE University, 2016</h1>
                  </div>
                </div>
                </div>
                {/*publications*/}
                <div className='  flex  flex-1 flex-col  '>
                <h1 className='text-xl text-shade1 mb-4 font-semibold '>Courses and certificates</h1>
                  {/* Blue line */}
                  <div className="w-16 h-1 bg-shade5 mb-4  "></div>
                <div className='  flex   flex-col gap-5'>         
        {/*element2*/}
        <div className='flex justify-between border-l-4 border-shade5 bg-shade2/10 p-5 mr-20  '>
          <div className='flex flex-col '>
            <h1 className='font-semibold text-xl text-shade1'>Academic engagements (incl. south Africa…)  </h1>
            <p className='text-sm'>list of lectures, supervised master’s thesis and publications (for download)</p>
          </div>
          <a  href="/bio.pdf" 
              download="Dr_Ghazi_List_Of_Publications.pdf" >
            <button>
              <FaDownload className='text-xl text-shade5' />
            </button>
           </a>
        </div>
        {/*element2*/}
        <div className='flex justify-between border-l-4 border-shade5 bg-shade2/10 p-5 mr-20  '>
          <div className='flex flex-col '>
            <h1 className='font-semibold text-xl text-shade1'>Focus (main topics) & liste des publications </h1>
            <p className='text-sm'>liste des publications en pdf (download)</p>
          </div>
          <a  href="/bio.pdf" 
              download="Dr_Ghazi_List_Of_Publications_2.pdf" >
            <button>
              <FaDownload className='text-xl text-shade5' />
            </button>
           </a>
        </div>

      </div>
      </div>
      
    </div>

    </div>
  )
}

export default Academic