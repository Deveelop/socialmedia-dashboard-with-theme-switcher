import {useEffect, useState} from 'react'
import Headers from './Headers'
import { AccStat } from './AccStatArray'
import { OverviewStat } from './OvervieStatArray'
import tw from 'tailwind-styled-components'

const ColoredDiv = tw.div`  w-screen lg:h-[150vh] h-[500vh] font-body `
const HeadDiv = tw.div`h-60 rounded-bl-xl rounded-br-xl  `
const CardDiv = tw.div`flex  flex-col w-[15.5rem] h-[15.5rem]  cursor-pointer border-t-4 border-t-indigo-500 rounded items-center justify-center`
const CardBDiv = tw.div`flex  flex-col w-[15.5rem] h-[8.5rem]  cursor-pointer rounded `
const Dashboard = () => {
const [bgColor, setBgColor] = useState('bg-slate-950 text-white')
const [headBgColor, setHeadBgColor] = useState('bg-slate-900 text-white')
const [cardBgCol, setCardBgCol] = useState('bg-slate-900  hover:bg-slate-700 text-white')
const [cardBBgCol, setCardBBgCol] = useState('bg-slate-900 hover:bg-slate-700')

const handleChanges = () => {
  if(bgColor === 'bg-slate-950 text-white'){
    setBgColor('bg-white text-black')
    setHeadBgColor('bg-slate-200 text-black')
    setCardBgCol('bg-slate-200  hover:bg-slate-300 text-black')
    setCardBBgCol('bg-slate-200  hover:bg-slate-300 text-black')
  }else{
    setBgColor('bg-slate-950 text-white')
    setHeadBgColor('bg-slate-900 text-white')
    setCardBgCol('bg-slate-900  hover:bg-slate-700 text-white')
    setCardBBgCol('bg-slate-900  hover:bg-slate-700 text-white')
  }
}
  
  return (
    <ColoredDiv className={bgColor}>
<HeadDiv className={headBgColor}>
<div className='lg:flex justify-between w-4/5 m-auto place-items-center '>
        <div className=' lg:mt-10 '>
            <h1 className='font-bold text-2xl pt-10 sm:pt-0'>Social Media Dashboard</h1>
            <div className=' flex'>
            <h4 className=' text-gray-400 font-bold   ' >Total Followers:</h4><span className=' px-2 text-gray-400 font-bold'>23,004</span>
            </div>
            <div className='sm:hidden border-b border-gray-500 mt-10'></div>
        </div>
        <div className=' flex lg:items-center lg:justify-center justify-between lg:place-items-center font-bold text-xl mt-10'>
            <h1 className='px-4'>Dark Mode </h1>
            
            <label className=' bg-cyan-500 relative w-10 h-5 cursor-pointer rounded-full'>
              <input type='checkbox' id='check' className=' sr-only peer'  onClick={handleChanges}/>
              <span className=' w-2/5 h-4/5 bg-slate-950 absolute rounded-full left-1 top-0.5 peer-checked:bg-white peer-checked:left-5 transition-all duration-500'></span>
            </label>
            
        </div>
    </div>
    </HeadDiv>

    <div className=' grid lg:grid-cols-4 gap-5 top-32 left-28 lg:absolute place-items-center'>{
   AccStat.map((items) => {
return( 
  <CardDiv className={cardBgCol} key={items.numberOfdays} >
<div className='flex text-xs'>
  <span>{items.icon}</span>
  <span className=' px-2 text-gray-400 font-bold'>@{items.username}</span>
</div>
<h1 className='font-bold text-4xl'>{items.followers}</h1>
<h4 className=' text-gray-400  uppercase font-thin '>{items.activity}</h4>
<div className=' flex place-items-center'><span className=' px-2 '>{items.ratingIcon}</span> <p className='text-xs'>{items.numberOfdays}  Today</p></div>
</CardDiv>
) }) }
     </div>
    
     <div className=' lg:mt-40 mt-10  left-28 lg:absolute'>
     <h1 className=' font-bold text-2xl mb-5 lg:ml-0 ml-10'>Overview - Today</h1>
     <div className=' grid lg:grid-cols-4 gap-5 place-items-center'>
      {
        OverviewStat.map((lists) => {
          return(<CardBDiv className={cardBBgCol} key={lists.numberOfItem}>
            <div className=' grid grid-cols-2 items-center justify-center place-items-center w-full h-full'>
            <h4 className='text-gray-400 font-bold'>{lists.action}</h4>
           <span>{lists.icon}</span>
            <h4 className=' font-bold'>{lists.numberOfItem}</h4>
            <div className=' flex place-items-center text-xs'><span className=' px-2'>{lists.rateIcon}</span><span>{lists.percentageRate}%</span></div>
            </div>
            </CardBDiv>
          )
        })
      }
     </div>
     

     </div>
    </ColoredDiv>
  )
}

export default Dashboard;