import React, { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let featchData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      setUsers(data);
    }
    catch (err) {
      setError("something gone wrongg!");
    }
    finally {
      setLoading (false);
    }
  }


  return (
    <div className='flex flex-col pt-30 bg-olive-100 items-center justify-center h-screen'>
      <button onClick={featchData} className='mb-5 border-2 rounded-4xl px-6 py-2 text-4xl'>Fetch Data</button><hr className=' mb-15 bg-black w-full' />
      <div className='text-2xl flex h-full flex-col gap-3 items-center'>
        {loading && <h1>loading...</h1>}
        {error && <h1>error comesssss....</h1>}
        {users.map((user) => (
          <div key={user.id}>
             <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
