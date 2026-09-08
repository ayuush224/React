import React , {useState , useContext} from "react";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {setUser} = useContext(userContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
        navigate("/");
    }

    return (
        <div>
            <input
                type="text"
                name="username"
                placeholder="Enter Your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                type="submit"
            >
                Submit
            </button>
        </div>
    )
}