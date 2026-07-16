import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { addTodo } from "../features/todo/todoSlice";

export default function Todos(){
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      todos.map((todo) => {
        dispatch(addTodo(todo.text));
      })
    }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
    return(
        <div className={`flex flex-col justify-center items-center
        gap-4 bg-[#C4E2F5] w-3/5 rounded-2xl ${todos.length > 0 ? "p-4" : ""}`}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}