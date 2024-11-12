import React from 'react'
import { FaDownload } from "react-icons/fa";

const Academic = () => {
  return (
    <div className=' container '> 
      <div className='  flex flex-col gap-5 py-20'>
        {/*element2*/}
        <div className='flex justify-between border-l-4 border-shade5 bg-shade2/10 p-5 mr-20  '>
          <div className='flex flex-col '>
            <h1 className='font-semibold text-xl text-shade1'>Academic engagements (incl. south Africa…)  </h1>
            <p className='text-sm'>list of lectures, supervised master’s thesis and publications (for download)</p>
          </div>
          <button>
              <FaDownload className='text-xl text-shade5' />
            </button>
        </div>
        {/*element2*/}
        <div className='flex justify-between border-l-4 border-shade5 bg-shade2/10 p-5 mr-20  '>
          <div className='flex flex-col '>
            <h1 className='font-semibold text-xl text-shade1'>Focus (main topics) & liste des publications </h1>
            <p className='text-sm'>liste des publications en pdf (download)</p>
          </div>
          <button>
              <FaDownload className='text-xl text-shade5' />
            </button>
        </div>

      </div>
    </div>
  )
}

export default Academic