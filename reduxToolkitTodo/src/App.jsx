import { useState } from 'react';
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';

function App(){
  return (
    <>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App;