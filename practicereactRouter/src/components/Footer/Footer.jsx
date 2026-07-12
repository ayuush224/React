import React from "react";
import { Link, NavLink } from "react-router";

function Footer(){
    return (
        <>
        <div className="border-t-2 border-black grid grid-cols-10 text-center">
            <div className="col-span-6 rounded">
                <img src="https://images.unsplash.com/photo-1671277100877-bc06e0f52c69?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="BusImage" className="h-55 w-full"/>
            </div>

            <div className="col-span-4 p-4 rounded flex justify-between">
                <div className="p-2 transition-all duration-200
                ease-linear cursor-pointer rounded-xl hover:scale-110 hover:bg-[#E8EDF2] hover:border min-w-40">
                    Resources
                    <div className="flex flex-col text-gray-600 p-2 gap-3">
                        <Link to="/" className="cursor-pointer hover:underline hover:text-orange-500">
                            Home
                        </Link>
                        <Link to="/about" className="cursor-pointer hover:underline hover:text-orange-500">
                            About
                        </Link>
                    </div>
                </div>

                <div className="p-2 transition-all duration-200
                ease-linear cursor-pointer rounded-xl hover:scale-110 hover:bg-[#E8EDF2] hover:border min-w-40">
                    Follow Us
                    <div className="flex flex-col text-gray-600 p-2 gap-3">
                        <Link
                        to="https://github.com/ayuush224"
                        className="cursor-pointer hover:underline hover:text-orange-500">
                            Github
                        </Link>
                        <Link
                        to="https://discord.com/channels/1521183436562235523/1521183437204095048"
                        className="cursor-pointer hover:underline hover:text-orange-500">
                            Discord
                        </Link>
                    </div>
                </div>

                <div className="p-2 transition-all duration-200
                ease-linear cursor-pointer rounded-xl hover:scale-110 hover:bg-[#E8EDF2] hover:border min-w-40">
                    Legal
                    <div className="flex flex-col text-gray-600 p-2 gap-3">
                        <Link to="#" className="cursor-pointer hover:underline hover:text-orange-500">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="cursor-pointer hover:underline hover:text-orange-500">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t-2 col-span-10 bg-[#FAFAFA] border-t-[#E8EDF2] p-4 rounded text-start">
                @2026ayushkumar. All Rights Reserved
            </div>
        </div>
        </>
    )
}

export default Footer;