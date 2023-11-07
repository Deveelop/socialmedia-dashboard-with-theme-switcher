import React from 'react'

const Headers  = () => {
  return (
   <div>
    <div className=' flex justify-between w-4/5 m-auto '>
        <div className=' mt-10'>
            <h1 className=' text-[#ffffff] font-bold text-2xl'>Social Media Dashboard</h1>
            <div className=' flex'>
            <h4 className=' text-gray-400 font-bold ' >Total Followers:</h4><span className=' px-2 text-gray-400 font-bold'>23,004</span>
            </div>
        </div>
        <div className=' flex text-[#ffffff] font-bold text-xl mt-10'>
            <h1>Dark Mode </h1>
            <div className='px-2'>switch</div>
        </div>
    </div>
    <div>

    </div>

    </div>
  )
}

export default Headers;