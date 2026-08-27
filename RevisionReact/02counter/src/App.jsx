import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prev) => {
      if(prev == 20){
        alert("Maximum limit of the counter is 20.");
        return prev;
      }

      return prev + 1;
    });
  }

  const removeValue = () => {
    setCounter((prev) => {
      if(prev > 0){
        return prev - 1;
      }

      alert("Counter can't go less than 0")
      return prev;
    });
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>
        Add value
      </button>
      <button onClick={removeValue}>
        Remove Value
      </button>
    </>
  )
}

export default App;