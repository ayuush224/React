import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github(){
    // const [data, setData] = useState([]);
    
    // useEffect(() => {
    //     fetch("https://api.github.com/users/ayuush224")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     });
    // }, []);

    const data = useLoaderData();
    
    return (
        <>
        <div className="text-center bg-[#99C2FF] text-[#1B4EF5]
        p-4 text-3xl">
            Github Followers : {data.followers}
            <img src={data.avatar_url} className="text-center rounded-2xl" alt="profilePicture" width={300}/>
        </div>
        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/ayuush224");
    const data = await response.json();
    return data;
}