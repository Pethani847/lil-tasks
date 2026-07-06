import React from 'react';
import { useState } from 'react';

function App() {

  let [pass, setPass] = useState("");
  let [show, setShow] = useState(false);

  let showHandler = () => {
    setShow((prev) => !prev)
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
    <h1 className='text-3xl mb-5'>Password Hide and Seek</h1>
      <div className='border-2 rounded-3xl py-2 px-4 flex justify-between w-60 items-center px-2 '>
      <input value={pass} onChange={(e) => setPass(e.target.value)} type={show ? 'text' : 'password'} name='password' className='focus:outline-none w-full' placeholder='password'  />
      <button onClick={showHandler}>{show ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button>
     </div>
    </div>
    </>
  )
}

export default App
