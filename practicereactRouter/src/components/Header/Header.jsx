import React from "react";
import {Link, NavLink} from "react-router";

function Header(){
    return (
        <>
        <ul>
            <div className="flex justify-center gap-8 border-b-2 bg-[#FAFAFA] border-b-[#E8EDF2]
            py-2 flex-wrap">
                <li className="border rounded p-1 cursor-pointer bg-[#E8EDF2] min-w-20 text-center
                transition-all duration-300 ease-linear hover:scale-120">
                    <NavLink
                        to="/"
                        className={({isActive}) => {
                            return `${isActive ? "text-[#2FA4D7]" : "text-gray-600"}`
                        }}>
                            Home
                    </NavLink>
                </li>

                <li className="border rounded p-1 cursor-pointer bg-[#E8EDF2] min-w-20 text-center
                ransition-all duration-300 ease-linear hover:scale-120">
                        <NavLink to="/about"
                        className={({isActive}) => {
                            return `${isActive ? "text-[#2FA4D7]" : "text-gray-600"}`
                        }}>
                            About
                    </NavLink>
                </li>
                
                <li className="border rounded p-1 cursor-pointer bg-[#E8EDF2] min-w-20 text-center
                ransition-all duration-300 ease-linear hover:scale-120">
                        <NavLink to="/contact"
                        className={({isActive}) => {
                            return `${isActive ? "text-[#2FA4D7]" : "text-gray-600"}`
                        }}>
                            Contact
                    </NavLink>
                </li>

                <li className="border rounded p-1 cursor-pointer bg-[#E8EDF2] min-w-20 text-center
                ransition-all duration-300 ease-linear hover:scale-120">
                        <NavLink to="/github"
                        className={({isActive}) => {
                            return `${isActive ? "text-[#2FA4D7]" : "text-gray-600"}`
                        }}>
                            Github
                    </NavLink>
                </li>
            </div>
        </ul>
        </>
    )
}

export default Header;