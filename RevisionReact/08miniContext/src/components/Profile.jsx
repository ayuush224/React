import React , {useContext} from "react";
import userContext from "../context/userContext";

export default function Profile(){
    const {user} = useContext(userContext);
    if(!user) return <div>Please Login!</div>
    
    return (
        <div>
            <h1>Welcome</h1>
            <h2>Username : {user?.username}</h2>
            <h2>Password : {user?.password}</h2>
        </div>
    )
}