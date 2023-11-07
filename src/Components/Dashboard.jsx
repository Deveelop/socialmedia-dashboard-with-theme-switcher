import React from 'react'
import Headers from './Headers'
import { AccStat } from './AccStatArray'
import { OverviewStat } from './OvervieStatArray'

const Dashboard = () => {
  return (
    <div className=' bg-slate-950 h-screen'>
<div className=' bg-slate-900 h-60 rounded-bl-xl rounded-br-xl'>
  <Headers/>
    </div>

    <div className=' grid grid-cols-4 gap-5 top-32 left-28 absolute'>{
   AccStat.map((items) => {
return( 
  <div className=' flex  flex-col w-[15.5rem] h-[15.5rem] bg-slate-900 hover:bg-slate-700 cursor-pointer border-t-4 border-t-indigo-500 rounded items-center justify-center '>
<div className='flex'>
  <span>{items.icon}</span>
  <span className=' px-2 text-gray-400 font-bold'>@{items.username}</span>
</div>
<div className=' text-white font-bold text-4xl'>{items.followers}</div>
<div className='text-gray-400 font-bold uppercase'>followers</div>
<div className=' flex place-items-center'><span className=' px-2'>{items.ratingIcon}</span> <span>{items.numberOfdays}  Today</span></div>
</div>
) }) }
     </div>
     <div className=' mt-40 left-28 absolute'>
     <h1 className=' text-white font-bold text-2xl mb-5'>Overview - Today</h1>
     <div className=' grid grid-cols-4 gap-5'>
      {
        OverviewStat.map((lists) => {
          return(<div className=' flex  flex-col w-[15.5rem] h-[8.5rem] bg-slate-900 hover:bg-slate-700 cursor-pointer rounded  '>
            <div className=' grid grid-cols-2 items-center justify-center place-items-center w-full h-full'>
            <h4 className='text-gray-400 font-bold'>{lists.action}</h4>
           <span>{lists.icon}</span>
            <h4 className='text-[#ffffff] font-bold'>{lists.numberOfItem}</h4>
            <div className=' flex place-items-center text-xs'><span className=' px-2'>{lists.rateIcon}</span><span>{lists.percentageRate}%</span></div>
            </div>
            </div>
          )
        })
      }
     </div>
     

     </div>
    </div>
  )
}

export default Dashboard;