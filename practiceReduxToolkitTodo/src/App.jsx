import { useState } from 'react'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {
  return (
    <>
    <div className='h-screen w-full bg-[#093C5D] p-5 flex items-center flex-col'>
      <AddTodo/>
      <Todos/>
    </div>
    </>
  )
}

export default App
