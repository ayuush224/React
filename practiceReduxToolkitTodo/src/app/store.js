import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
    reducer : todoReducer
});

export default store;