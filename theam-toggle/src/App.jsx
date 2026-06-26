import React, { useEffect, useState } from 'react';
import heroImage from './assets/hero.jpg'

function App() {

  let [theme, setTheme] = useState("light")

  useEffect(() => {
    if(theme === "dark") {
     document.documentElement.classList.add("dark");      
    } else {
     document.documentElement.classList.remove("dark");
    }
  }, [theme] )


  // let handleSelect = (e) => {
  //      setTheme(e.target.value);
  // }


  let handleButton = () => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
    <div className='bg-lbg dark:bg-bbg dark:text-bf flex flex-col h-[100vh]'>
    <nav className='px-16 py-8 border-b-2 w-full flex justify-between items-center '>
      <div className='text-2xl font-bold' >Logo</div>
      <div className='flex text-xl gap-10'>
      <span> about </span>
      <span> products </span>
      <span> contact </span>
      {/* <select id="theme" value={theme} onChange={handleSelect}>
        <option className='text-lg' value="dark">dark</option>
        <option className='text-lg' value="light">light</option>
      </select> */}
      <button onClick={() => handleButton()}>{theme === "dark" ? "light" : "dark"}</button>
      </div>
    </nav>
    <main className='flex items-center h-full justify-center text-center p-8'>
      <div>
         <h1 className='text-9xl mb-18' >sayy, Hellow!!!</h1>
         <div className='w-230'>
         <p className='text-3xl mb-5'>We Start every project by listening intently to your goals and documenting a clear path forward!</p>
         <p className='text-3xl mb-10'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quo neque! Ab iste quisquam aspernatur? Reprehenderit, nesciunt? Amet, optio obcaecati.</p>
         </div>
         <button className='text-2xl  py-2  px-4 border rounded-2xl'>contact us</button>
      </div>
    </main>
    </div>
    </>
  )
}

export default App
