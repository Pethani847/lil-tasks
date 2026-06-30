import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
        todos: [{id: "123", title: "title", des: "des", status: true},],
        inputTitle: "",
        inputDes: "",
        inputStatus: false,
    };

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        updateInputs: (state, action) => {
            const {field, value} = action.payload;
            if (field === "title") state.inputTitle = value;
            if (field === "des") state.inputDes = value;
            if (field === 'status') state.inputStatus = value;
        },

        addTodo: (state) => {
            state.todos.push({
                id: nanoid().toString(),
                title: state.inputTitle,
                des: state.inputDes,
                status: state.inputStatus,
            });
           console.log(current(state.todos));
            state.inputTitle = "";
            state.inputDes = "";
            state.inputStatus = true;
        },

        deleteTODO: (state, action) => {
               state.todos = state.todos.filter((t) => t.id !== action.payload);
        },

        doneTodo: (state, action) => {
           const todo = state.todos.find((t) => t.id === action.payload)
           if(todo) {
            todo.status = todo.status === false ? true : false;
           }
        }
    }
});

export const { updateInputs, deleteTODO, doneTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;


