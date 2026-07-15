import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

function Todos() {
  const todos = useSelector(state => state.todos);
  
  return (
    <>
    <div className='text-white text-3xl text-center py-4 font-bold'>Todos</div>
    <ul className="list-none w-full flex flex-col items-center">
        {todos.map((todo) => (
          <TodoItem todo={todo}/>
        ))}
      </ul>
    </>
  )
}

export default Todos