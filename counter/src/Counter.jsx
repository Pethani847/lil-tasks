import React, { useState } from 'react'

const Counter = () => {

    let [num, setNum] = useState(0);
    let [n, setN] = useState(0);

    const increment = () => {
        setNum(num += 1);
    }

    const decrement = () => {
        setNum(num -= 1);
    }

    const byAmount = () => {
        setNum(num + n);
    }


  return (
    <>
    <div className='flex flex-col h-screen items-center justify-center'>
      <h1 className='text-9xl mb-8'>{num}</h1>
      <div className='flex gap-5 mb-4'>
      <button onClick={increment} className='active:scale-95 border-2 rounded-xl px-4 text-2xl py-2'>Increment</button>
      <button onClick={decrement} className='active:scale-95 border-2 rounded-xl px-4 text-2xl py-2'>Decrement</button>
      
      </div>     
    <div className='flex gap-3' >
      <input  type='number' onChange={(e) => {
        setN(Number(e.target.value));
      }} 
      value={n}
      className='border-2 rounded-xl px-4 text-2xl py-2'
      placeholder='enter number!'
      />
      <button onClick={ byAmount } className='active:scale-95 border-2 rounded-xl px-4 text-2xl py-2'>Increment By Num</button>
      </div>
    </div>
    </>
  )
}

export default Counter
