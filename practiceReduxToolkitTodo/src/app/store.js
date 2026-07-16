import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
    reducer : {
        todoState : todoReducer
    }
});

export default store;