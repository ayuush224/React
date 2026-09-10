import { useEffect, useState } from 'react'
import { TodoContextProvider } from './context/TodoContext';
import TodoForm from './component/TodoForm';
import TodoItem from './component/TodoItem';

function App() {
  const [todos , setTodos] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    return (stored && stored?.length > 0) ? stored : [];
  });
  
  const addTodo = (todo) => {
    setTodos((prev) => [...prev , {id : Date.now(), ...todo}]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => (
      prevTodo.filter((prev) => prev.id !== id)
    ));
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) => (
      prevTodo.map((prev) => prev.id === id ? todo : prev)
    ));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) => (
      prevTodo.map((prev) => prev.id === id ? {...prev , isCompleted : !prev.isCompleted} : prev)
    ));
  };

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));
  //   if(todos && todos?.length > 0){
  //     setTodos(todos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}/>
                  ))}
              </div>
          </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
