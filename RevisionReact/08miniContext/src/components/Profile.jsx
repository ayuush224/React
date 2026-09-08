import React , {useContext} from "react";
import userContext from "../context/userContext";
import { Navigate } from "react-router-dom";

export default function Profile(){
    const {user} = useContext(userContext);
    if(!user) return <Navigate to={"/login"} replace/>
    
    return (
        <div>
            <h1>Welcome</h1>
            <h2>Username : {user?.username}</h2>
            <h2>Password : {user?.password}</h2>
        </div>
    )
}