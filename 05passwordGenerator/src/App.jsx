import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numberAllowed)str += '0123456789';
    if(charAllowed)str += '!@#$%^&*-_+[]{}~`';

    for(let i = 0; i < length; i++){
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const [isCopied, setIsCopied] = useState(false);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full bg-[#2C5EAD] h-screen overflow-hidden'>
      <div className='w-xl bg-[#1591DC] mx-120 mt-30 p-2 rounded-2xl'>
        <h1 className='text-white text-3xl text-center mb-4'>
          Password Generator
        </h1>

        <div className='w-full flex bg-[#C4E2F5] rounded p-1'>
          <input type="text"
          value={password}
          ref={passwordRef}
          className='bg-white outline-none text-black w-4/5 h-10 rounded px-2'
          readOnly
          />
          <button
          className='w-1/5 bg-blue-500 text-white rounded transition-all duration-200 hover:scale-105 active:bg-blue-700 cursor-pointer'
          onClick={copyPasswordToClipboard}
          >
            {isCopied ? "copied" : "copy"}
          </button>
        </div>

        <div className='flex bg-[#C4E2F5] mt-2 rounded p-2 gap-17'>
          <div className='flex gap-1 text-[#071952]'>
            <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='cursor-pointer'
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex gap-1 text-[#071952]'>
            <input
            type="checkbox"
            id='numberInput'
            className='cursor-pointer'
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput" className='cursor-pointer'>
              Number
            </label>
          </div>

          <div className='flex gap-1 text-[#071952]'>
            <input
            type="checkbox"
            id='charInput'
            className='cursor-pointer'
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="charInput" className='cursor-pointer'>
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default App;