import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    // todos : [{ id : 1, text : "Hello"}]
    todos : []
}

export const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            });
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload.id){
                    todo.text = action.payload.text;
                }
                return todo;
            })
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;