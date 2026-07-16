import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function Todos(){
    const todos = useSelector((state) => state.todos);
    
    return(
        <div className={`flex flex-col justify-center items-center
        gap-4 bg-[#C4E2F5] w-3/5 rounded-2xl ${todos.length > 0 ? "p-4" : ""}`}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}