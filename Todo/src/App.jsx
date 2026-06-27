import React, { useEffect, useState } from "react";

function App() {
  let [title, setTitle] = useState("");
  let [des, setDes] = useState("");
  let [theme, setTheme] = useState("Light");

  let [todos, setTodos] = useState([
    { title: "first ToDo", des: "this is first taskk!", status: true},
  ]);

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(title, des);
    setTodos([...todos, { title: title, des: des, status: true}]);
    setTitle("");
    setDes("");
  };

  let remove = (idx) => {
        let res = todos.filter((e, i) => i!== idx);
        setTodos(res);
  }

  let strock = (idx) => {
     let newTodo = todos.map((todo, i) => {
      if(idx === i){
        return{...todo, status: !todo.status};
      }
      return todo;
     })
     setTodos(newTodo);
  }

  let themeHandler = () => {
    if(theme==="Light") {
      setTheme("Dark");
    } else {
      setTheme("Light")
    }
    console.log(theme)
  }

  useEffect(() => {
    if(theme==="Light") {
      document.documentElement.classList.remove("dark");
    } else {
     document.documentElement.classList.add("dark");
    }
  }, [theme])

  return (
    <div className="bg-slate-100 dark:bg-slate-950 dark:text-slate-200 text-slate-800 flex p-5 flex-col justify-center items-center h-screen">
      <div className="w-full mt-10 lg:mt-20 mb-8 lg:mb-10 flex justify-center">
        <h1 className="text-4xl lg:text-7xl">ToDo App</h1>
      </div>
      <div className="mb-15 lg:mb-20">
        <button onClick={themeHandler} className="border-3 active:scale-95 font-bold rounded-2xl px-6 py-1 text-lg lg:text-2xl border-slate-300 dark:border-slate-700" >
          {theme}
        </button>
      </div>
      <div className="mb-20 lg:mb-25">
        <form onSubmit={(e) => submitHandler(e)} className="flex justify-center items-center flex-col lg:flex-row gap-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name="title"
            className="border-2 px-3 w-full lg:w-60  py-1 text-xl rounded-xl  font-semibold border-slate-300 dark:border-slate-700"
            placeholder="add task!"
            required
          />
          <input
            onChange={(e) => setDes(e.target.value)}
            value={des}
            type="text"
            name="des"
            className="border-2 px-3 w-full lg:w-120 py-1 text-xl  rounded-xl font-semibold border-slate-300 dark:border-slate-700"
            placeholder="tell more about task give des..."
            required
          />
          <button className=" active:scale-95 border-2 rounded-xl w-30  lg:px-6 py-1 text-2xl border-slate-300 dark:border-slate-700 ">
            Add
          </button>
        </form>
      </div>
      <div className="h-full overflow-auto">
        <div className="flex flex-wrap gap-5  justify-center items-center">
          {todos.map((todo, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row lg:text-start gap-5 overflow-auto break-all items-center border-2 bg-white dark:bg-slate-900  text-center  rounded-2xl p-6 justify-center lg:justify-between border-slate-300 dark:border-slate-700 "
            >
              <div className="flex flex-1 flex-col">
                <h1 className={`text-2xl mb-3 font-bold ${todo.status ? "no-underline" : 'line-through'}`}>{todo.title}</h1>
                <p className={`text-xl ${todo.status ? "no-underline" : 'line-through'} `}>{todo.des}</p>
              </div>
              <div className="flex w-35 flex-col">
                <button onClick={() => remove(idx)} className="active:scale-95 border-slate-300 dark:border-slate-700 border-2 mb-3 rounded-xl px-4 py-0.75 text-lg">
                  remove
                </button>
                <button  onClick={() => strock(idx)} className="border-2  border-slate-300 dark:border-slate-700 active:scale-95 rounded-xl px-5 py-0.75 text-lg">
                  {todo.status ? "done" : "pandding" }
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
