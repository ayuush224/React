import React from "react";
import { useParams } from "react-router";

function User(){
    const {userid} = useParams();

    return (
        <>
        <h1 className="text-center text-3xl py-4 text-white bg-gray-600">
            User : {userid}
        </h1>
        </>
    )
}

export default User;