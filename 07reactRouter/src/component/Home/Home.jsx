import React from 'react';
import {Link, NavLink} from 'react-router';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-7xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://imgs.search.brave.com/Vn3azkXMXuBm_WIqgfVRddSvu32I_AnMCymIwHwVgoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjkv/NDgyLzc3MC9zbWFs/bC9wZWFjZWZ1bC1i/ZWFjaC1zY2VuZS13/aXRoLXBhbG0tdHJl/ZS1iZWFjaC1jaGFp/ci1hbmQtc3VtbWVy/dGltZS12YWNhdGlv/bi1lbGVtZW50cy1p/bi1ibGFjay1hbmQt/d2hpdGUtdmVjdG9y/LmpwZw" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://imgs.search.brave.com/m-rU9DH__uSdPcxdJMeBugNbw_J9kchU7eXYhHz3bQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MTc5NTQxOC92ZWN0/b3IvbWFpbGluZy1s/aXN0LXRvLXNlbmQt/ZW1haWwtY2FtcGFp/Z24tc3Vic2NyaXB0/aW9uLWVtYWlsLW1h/bmFnZW1lbnQtc29m/dHdhcmUtc2VuZGlu/Zy1wcm9tb3Rpb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXhEWEh5Vk94X1lj/T2VrYkN3cmJEQ0Fk/ZXM1NEdoNW9nblZq/Nnlfa0plTHM9" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}
