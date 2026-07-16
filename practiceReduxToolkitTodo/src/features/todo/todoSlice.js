import { createSlice, nanoid } from "@reduxjs/toolkit";
import React, { act } from "react";

const storedTodo = JSON.parse(localStorage.getItem("todos")) || [];
const initialState = {
    todos : storedTodo
};

const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,

    reducers : {
        addTodo : (state, actions) => {
            state.todos.push({id : nanoid(8), text : actions.payload});
        },
        removeTodo : (state, actions) => {
            state.todos = state.todos.filter((todo) => (
                todo.id !== actions.payload
            ));
        },
        updateTodo : (state, actions) => {
            let id = actions.payload.id;
            let text = actions.payload.text;
            console.log(actions);

            state.todos = state.todos.map((todo) => (
                todo.id === id ? {...todo, text : text} : todo
            ));
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;