import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bgBlue, bgGreen, bgRed } from '../features/bgSlice';

const Bg = () => {

    const {bg} = useSelector((state) => state.bg);
    const dispatch = useDispatch();


  return (
    <>
      
      <div className="w-1/2 mx-auto p-5">
             <div style={{backgroundColor : bg, padding : "100px"}} className="bg-violet-500 flex">
             <h1 className='text-center text-2xl p-3'>Backgroun change </h1>    
             </div>

          <div className="flex justify-center gap-2">
            <button onClick={() => dispatch(bgGreen())} className='bg-violet-600  text-2xl p-2 rounded-2xl mt-2 w-full h-full'>Green</button>
            <button onClick={() => dispatch(bgRed())} className='bg-violet-600  text-2xl p-2 rounded-2xl mt-2 w-full h-full'>Red</button>
            <button onClick={() => dispatch(bgBlue())} className='bg-violet-600  text-2xl p-2 rounded-2xl mt-2 w-full h-full'>Blue</button>
          </div>
            
      </div>

    </>
  )
}

export default Bg
