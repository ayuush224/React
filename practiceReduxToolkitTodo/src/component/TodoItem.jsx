import React, { useState } from "react";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoItem({todo}){
    const [isEditable, setIsEditable] = useState(false);
    const dispatch =  useDispatch();

    return (
        <div className="flex w-full justify-between bg-[#4BB8FA] p-2 rounded-xl">
            <input
                value={todo.text}
                type="text"
                onChange={(e) => dispatch(updateTodo({id : todo.id, text : e.target.value}))}
                className={`${isEditable ? "border rounded" : ""} outline-none p-1 px-2 w-3/5`}
                readOnly={!isEditable}
            />
            <div className="flex gap-2">
                <button
                    className={`bg-green-400 p-1 w-20 rounded cursor-pointer`}
                    onClick={() => setIsEditable((prev) => !prev)}
                >
                    {isEditable ? "Save" : "Update"}
                </button>

                <button
                    className={`bg-red-600 rounded p-1 w-20 cursor-pointer`}
                    onClick={(e) => dispatch(removeTodo(todo.id))}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}