import { useState } from 'react';

function App() {
  const colors = [
    {
      name : "Red",
      color : "bg-[#E63946]"
    },
    {
      name : "Green",
      color : "bg-[#2A7C13]"
    },
    {
      name : "Blue",
      color : "bg-[#30AFFF]"
    },
    {
      name : "Olive",
      color : "bg-[#266210]"
    },
    {
      name : "Gray",
      color : "bg-[#C5C1C1]"
    },
    {
      name : "Yellow",
      color : "bg-[#E4B028]"
    },
    {
      name : "Pink",
      color : "bg-[#F599C6]"
    },
    {
      name : "Purple",
      color : "bg-[#9564DD]"
    },
    {
      name : "Lavender",
      color : "bg-[#3E0F8D]",
      text : "text-white"
    },
    {
      name : "Black",
      color : "bg-black",
      text : "text-white"
    },
    {
      name : "White",
      color : "bg-white"
    }
  ];

  const [bgColor, setBgColor] = useState("bg-[#212121]");
  
  function changeBgColor(color){
    return () => {
      setBgColor(color);
    }
  };

  return (
    <div className={`h-screen ${bgColor} flex flex-col`}>
      <div className='flex justify-between flex-wrap p-3 bg-[#E3F2FD] bottom-20 fixed w-80/100 rounded-2xl left-1/10'>
        {colors.map((color) => {
          return (
            <button
              key={color.name}
              onClick={changeBgColor(color.color)}
              className={`rounded-xl px-2 cursor-pointer ${color.color} min-w-18 py-1 ${color.text ? color.text : ""} hover:scale-120 transition-all duration-250 ease-linear`}
            >
              {color.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default App
