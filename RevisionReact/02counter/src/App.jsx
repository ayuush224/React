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
    <div className="h-screen bg-[#212121] text-white">
      <header>
        <h1 className="text-3xl py-2 text-center bg-[#aaaa] border-b border-[#eeee] font-bold">
          Chai aur react
        </h1>
      </header>
      <main>
        <section>
          <h2 className="p-2 text-2xl font-medium text-center bg-amber-300 my-2 w-1/2 m-auto rounded-2xl">
            Counter Value : {counter}
          </h2>
        </section>

        <section>
          <div className="flex justify-center items-center flex-col gap-2 h-150">
            <button
              onClick={addValue}
              className="border px-2 rounded bg-blue-300 cursor-pointer text-black font-medium py-1"
            >
              Add value
            </button>
            <button
              onClick={removeValue}
              className="border px-2 rounded bg-blue-300 cursor-pointer text-black font-medium py-1"
            >
              Remove Value
            </button>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default App;