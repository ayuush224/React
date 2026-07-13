import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github(){
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch("https://api.github.com/users/ayuush224")
    //     .then((res) => res.json())
    //     .then((data) => setData(data));
    // }, []);

    const data = useLoaderData();
    
    return (
        <>
        <div
            className="grid grid-cols-10 h-147 p-5 bg-contain"
            style={{backgroundImage : `url(https://images.unsplash.com/photo-1647736070366-09ca6936f727?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}
        >
            <img
                src={data?.avatar_url}
                alt="Profile Picture"
                className="col-span-2 rounded-xl"
            />
            <p
                className="text-3xl col-span-8 text-center"
            >
                Github Followers : {data?.followers}</p>
        </div>
        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/ayuush224")
    return await response.json();
}