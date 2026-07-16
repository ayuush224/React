import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../../../reduxToolkitTodo/src/features/todo/todoSlice";

export default function AddTodo(){
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    return (
        <form
        onSubmit={(e) => {
            e.preventDefault();
            if(input.trim().length <=  0)return;

            dispatch(addTodo(input.trim()));
            setInput('');
        }}
        className="flex justify-center w-full p-3 text-white gap-2 mt-10"
        >
        <div className="bg-[#4647AE] p-4 rounded-xl flex gap-3 w-2/5">
            <input
                className="border rounded p-1 px-2 border-black outline-none w-4/5"
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="p-2 rounded-xl w-1/5 cursor-pointer bg-[#1591DC]">
                Add Todo
            </button>
        </div>
        </form>
    )
};