import React, { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");


  const fetchUser = async () => {
    setLoading(true);
    setErr("");
    try{
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      setUsers(data);
    } catch (err) {
      setErr("something gone wrongg!")
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <div className='flex flex-col p-4 lg:p-8 justify-center items-center h-screen'>
      <h1 className='text-3xl mb-3 lg:m-5 lg:text-5xl'>See Users card</h1>
      <div>
        <button onClick={fetchUser} className='text-xl mb-3 lg:mb-5 lg:text-2xl border-2 rounded-2xl lg:rounded-3xl lg:py-1 lg:px-8 px-6'>See</button>
      </div>
      <div className='h-full overflow-auto scrollbar-none w-full grid justify-center items-center grid-cols-3 p-4 lg:p-8 lg:grid-cols-5 lg:gap-10 gap-4 '>
        {loading && <div  className='col-span-3 lg:col-span-5 text-xl lg:text-3xl'><p className='text-center'>loadingg...</p></div>}
        {err && <p>something gone wrongg!</p>}
        {!loading && users.map((user) => (
          <div key={user.id} className='text-xs text-wrap lg:text-xl border lg:border-2 rounded-2xl p-2 lg:p-4 flex flex-col items-center justify-center'>
            <img src={user.image} className='w-15 mb-1 lg:mb-3 lg:w-50 lg:h-50 h-15'></img>
            <p className='text-sm text-center lg:text-2xl'>{user.category}</p>
            <span>price: {user.price}</span>
           
          </div>
        ))}
        
      </div>
    </div>
    </>
  )
}

export default App
