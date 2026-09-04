/* eslint-disable react-hooks/exhaustive-deps, react-hooks/set-state-in-effect*/
import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback (() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed)str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_{}?/~`";
  
    let pass = "";
    let min = 0;
    let max = str.length - 1;
  
    for(let i = 0; i < length; i++){
      let index = Math.floor(Math.random() * (max - min + 1) + min);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const passRef = useRef(password);
  const copyToClipboard = async () => {
    passRef.current.select();   
    await navigator.clipboard.writeText(password);
  }
  
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="bg-[#212121] min-h-screen py-5">
      <div className="text-[#eeee] flex flex-col justify-center mt-20 bg-blue-800 w-1/3 mx-auto rounded-2xl gap-4 p-2">
        <h1 className="text-2xl font-bold text-center">
          Password Generator
        </h1>
        <div className="flex justify-center">
          <input
            className="bg-[#eeee] px-2 text-black rounded-tl rounded-bl w-4/5 outline-none"
            type="text"
            value={password}
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 px-4 py-2 rounded-tr rounded-br cursor-pointer hover:bg-green-400 focus:bg-green-800"
          >
            Copy
          </button>
        </div>
        <div className="flex justify-around flex-wrap">
          <div className="flex gap-2 px-3">
            <input
              className="cursor-pointer outline-none"
              id="length"
              min={8}
              max={100}
              type="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div className="flex gap-2">
            <input
              className="outline-none cursor-pointer"
              type="checkbox"
              value={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              id="numbers"
            />
            <label htmlFor="numbers" className="cursor-pointer">Number</label>
          </div>
          <div className="flex gap-2">
            <input
              className="outline-none cursor-pointer"
              type="checkbox"
              value={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              id="characters"
            />
            <label htmlFor="characters" className="cursor-pointer">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
