import React from "react";

function Contact(){
    return (
        <>
        <div className="grid grid-cols-2 p-5">
            <div>
                <img src="https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="SpaceImage"
                className="border-2 rounded-2xl"/>
            </div>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    document.querySelector("#name").value = "";
                    document.querySelector("#email").value = "";
                    document.querySelector("#number").value = "";
            }}>
                <div className="flex flex-col gap-4 w-full
                items-center justify-center h-full">
                    <input
                        id = "name"
                        type="text"
                        placeholder="Full Name"
                        className="border p-3 rounded outline-none w-1/2"
                    />
                    <input
                        id = "email"
                        type="text"
                        placeholder="Email"
                        className="border p-3 rounded outline-none w-1/2"
                    />
                    <input
                        id = "number"
                        type="number"
                        placeholder="Telephone Number"
                        className="border p-3 rounded outline-none w-1/2"
                    />
                    <button
                        type="submit"
                        className="p-2 rounded w-1/5 bg-orange-500 text-white
                        cursor-pointer hover:scale-110 transition-all duration-400 ease-linear"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Contact;