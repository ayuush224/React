import React from "react";
import { useParams } from "react-router";

function User(){
    const {userId} = useParams();

    return (
        <>
        <h1
        style={{backgroundImage : `url(https://plus.unsplash.com/premium_photo-1673139301825-aaceb3df6a18?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}
        className="text-center py-5 text-3xl font-medium h-147 bg-no-repeat bg-cover">
            User : {userId}
        </h1>
        </>
    )
}

export default User;