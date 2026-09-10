import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className='min-h-screen bg-gray-700 p-2'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
