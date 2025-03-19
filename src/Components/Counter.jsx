import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, set } from '../features/counterSlice';

const Counter = () => {

    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

  return (
    <>
      
      
      <div className="p-5 m-auto text-center items-center
      ">
             
           <div className="bg-gray-900 max-w-1/2 mx-auto justify-between items-center">
           <h1 className='p-2 text-2xl font-bold text-violet-500 '>Counter app</h1>
           </div> 


              <h1 className='p-2 text-2xl '>VALUE : {count}</h1>
 
             <button className='p-2 m-2 bg-violet-500 text-white rounded-sm cursor-pointer' onClick={() => dispatch(increment())}>Increment</button>

             <button className='p-2 m-2 bg-violet-500 text-white rounded-sm cursor-pointer' onClick={() => dispatch(decrement())}>Decrement</button>

             <button className='p-2 m-2 bg-violet-500 text-white rounded-sm cursor-pointer' onClick={() => dispatch(reset())}>Reset</button>
             <button className='p-2 m-2 bg-violet-500 text-white rounded-sm cursor-pointer' onClick={() => dispatch(set())}>Set</button>

      </div>

    </>
  )
}

export default Counter
