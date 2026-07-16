import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

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
                className="rounded p-2 px-2 text-black
                outline-none w-4/5 bg-[#FFDF82]"
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add your daily task here"
            />
            <button type="submit" className="p-2 rounded-xl w-1/5 cursor-pointer bg-[#1591DC]">
                Add Todo
            </button>
        </div>
        </form>
    )
};