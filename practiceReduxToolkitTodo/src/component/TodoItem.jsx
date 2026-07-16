import React, { useState } from "react";
import { removeTodo, updateTodo, toggleCompleted } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoItem({todo}){
    const [isEditable, setIsEditable] = useState(false);
    const [editableRestrictions, setEditableRestrictions] = useState(false);
    const dispatch =  useDispatch();

    return (
        <div className={`flex w-full justify-between  p-2 rounded-xl
        ${todo.isCompleted ? "bg-[#FFCF00]" :"bg-[#4BB8FA]"}`}>
            <div className="w-4/5 flex gap-2 items-center">
                <input
                    type="checkbox"
                    className={`cursor-pointer rounded-full w-4 h-4`}
                    onChange={(e) => {
                        if(isEditable)return;

                        if(todo.isCompleted)setEditableRestrictions(false);
                        else setEditableRestrictions(true);

                        dispatch(toggleCompleted(todo.id))
                    }}
                />
                <input
                    value={todo.text}
                    type="text"
                    onChange={(e) => dispatch(updateTodo({id : todo.id, text : e.target.value}))}
                    className={`${isEditable ? "bg-[#F4F2F2] rounded" : "bg-transparent border-0"} outline-none
                    p-2 px-2 w-4/5 ${todo.isCompleted ? "line-through" : ""}`}
                    readOnly={!isEditable}
                />
            </div>
            <div className="flex gap-2">
                <button
                    className={`bg-green-400 p-1 w-20 rounded cursor-pointer
                    ${editableRestrictions ? "line-through" : ""}`}
                    onClick={() => {
                        if(editableRestrictions)return;
                        setIsEditable((prev) => !prev)
                    }}
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