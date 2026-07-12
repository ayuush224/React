import React from "react";

function Home(){
    return (
        <>
        <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1 p-3">
                <img src="https://images.unsplash.com/photo-1531214159280-079b95d26139?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HomeImage"
                className="w-full h-100 rounded-2xl"/>
            </div>

            <div className="col-span-1 flex flex-col items-end justify-center pr-30 gap-3 font-bold">
                <h1 className="text-4xl">Download Now</h1>
                <h3 className="text-2xl">Lorem Epsem</h3>
                <button
                type="button"
                className="bg-orange-600 hover:bg-amber-600 p-2 rounded cursor-pointer">
                    Download now
                </button>
            </div>
            
            <div className="col-span-2 flex justify-center border-t-black border-t-2 p-3 flex-col items-center">
                <img src="https://images.unsplash.com/photo-1524481905007-ea072534b820?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="GirlImage"
                className="text-center h-100 rounded-4xl w-30/100"/>
                <h2 className="text-center font-bold text-3xl mt-3
                transition-all duration-300 hover:scale-120 hover:text-orange-600">
                    Lorem Ipsum Yojo Spiderman
                </h2>
            </div>
        </div>
        </>
    )
}

export default Home;