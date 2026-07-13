import React, {use, useContext, useState} from "react";
import UserContext from "../context/UserContext";

function Profile(){
   const {user} = useContext(UserContext);
   //or
   //const {user} = use(UserContext); // both works fine, even this is the newer and better approach

   if(!user){
    return (<div>Please Login</div>)
   }
   
   return (
    <div>Welcome {user.username}</div>
   )
};

export default Profile;