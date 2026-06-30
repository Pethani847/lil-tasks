import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateInputs,
  addTodo,
  deleteTODO,
  doneTodo,
} from "./features/todoSlice";
import { toggleTheme } from "./features/themeSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.themeManager.darkMode);

  const { todos, inputTitle, inputDes, inputState } = useSelector(
    (state) => state.todoManager,
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="flex bg-slate-100 dark:bg-slate-950 dark:text-slate-200 text-slate-800 justify-center items-center h-screen p-10 flex-col">
        <div className="h-full flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl lg:text-8xl lg:mt-15 mb-5 lg:mb-10">
              ToDo List
            </h1>{" "}
          </div>
          <div className="mb-8 lg:mb-25">
            <button
              onClick={() => {
                dispatch(toggleTheme());
              }}
              className=" border-slate-300 dark:border-slate-700 active:scale-95 border-2 text-xl lg:text-2xl lg:py-2 px-4 lg:px-6 lg:rounded-2xl rounded-xl"
            >
              {darkMode ? "dark" : "light"}
            </button>
          </div>
          <div className="mb-15 lg:mb-20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(addTodo());
              }}
              className="flex flex-col  items-center justify-center gap-3 lg:flex-row"
            >
              <input
                value={inputTitle}
                onChange={(e) =>
                  dispatch(
                    updateInputs({ field: "title", value: e.target.value }),
                  )
                }
                type="text"
                className="border-slate-300 dark:border-slate-700 border-2 rounded-full px-4 lg:text-xl lg:px-6 lg:py-2"
                placeholder="Task Title!"
              />
              <input
                value={inputDes}
                onChange={(e) =>
                  dispatch(
                    updateInputs({ field: "des", value: e.target.value }),
                  )
                }
                type="text"
                className="border-slate-300 dark:border-slate-700 border-2 rounded-full px-4 lg:text-xl lg:px-6 lg:py-2 lg:w-120"
                placeholder="Task Des..."
              />
              <button className="border-slate-300 dark:border-slate-700 active:scale-95 border-2 rounded-full lg:text-xl px-4 lg:px-6 lg:py-2 w-25 lg:w-30">
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="flex gap-5 h-full w-full overflow-auto justify-center items-start flex-wrap">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex lg:p-6 gap-5 flex-col text-center lg:flex-row lg:text-start border-2 rounded-2xl p-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
            >
              <div className="flex flex-1  gap-2 flex-col">
                <h3 className={`${!todo.status && "line-through"} text-2xl`}>
                  {todo.title}
                </h3>
                <p className={`${!todo.status && "line-through"} text-xl`}>
                  {todo.des}
                </p>
              </div>
              <div className="flex w-35 flex-col gap-2">
                <button
                  onClick={() => dispatch(deleteTODO(todo.id))}
                  className="border-slate-300 dark:border-slate-700 active:scale-95 border-2 rounded-xl "
                >
                  remove
                </button>
                <button
                  onClick={() => dispatch(doneTodo(todo.id))}
                  className="border-slate-300 dark:border-slate-700 active:scale-95 border-2 rounded-xl"
                >
                  done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
