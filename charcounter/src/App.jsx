import React, { useState } from 'react';


function App() {

  let [char, setChar] = useState("");
  let [n, setn] = useState(0);
  

  let submitHandler = (e) => {
        e.preventDefault();
        setn(char.length);
        setChar("");

  }

  return (
    <>
    <div className='items-center justify-center flex flex-col h-screen'>
      <h1 className='text-5xl mb-5'>Count character</h1>
      <h3 className='text-8xl mb-10'>{n}</h3>
      <form className='flex items-center justify-center gap-3' onSubmit={submitHandler}>
        <input className='border-2  rounded-xl px-3 py-2 text-2xl w-80' placeholder='type...' type='string' name='character' value={char} onChange={(e) => setChar(e.target.value)} />
        <button className='border-2 rounded-xl w-35 text-2xl py-2'>Count</button>
      </form>
    </div>
    </>
  )
}

export default App
