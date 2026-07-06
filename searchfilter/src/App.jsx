import React, { useState } from 'react';

function App() {

  let lists = ["apple", "banana", 'aam', 'orange', 'purpule', 'red', 'blue'];
  let [input, setInput] = useState("");


  let submitHandler = (e) => {
        e.preventDefault();
        setInput("");
  }

  let res = input;

  return (
    <>
    <div className='flex p-10 flex-col justify-center items-center h-screen '>
      <h1 className='text-5xl mt-30 mb-10'>search filter</h1>
      <div className='mb-20'>
        <form className='flex text-xl justify-center gap-3' onSubmit={submitHandler}>
          <input className='border-2 rounded-3xl w-70 px-4 py-2 ' type='string' name='input' placeholder='input Something...' value={input} onChange={(e) => setInput(e.target.value)} />
          <button className='border-2 rounded-3xl w-30 py-2'>Search</button>
        </form>
      </div>
      <div className='flex flex-col items-start text-3xl h-full gap-5 mr-70'>
         {lists.map((list, idx) => (
           <div key={idx}>
            {list.includes(res) && <h3>{list}</h3>}
            </div>
         ))}
      </div>
      
    </div>
    </>
  )
}

export default App
