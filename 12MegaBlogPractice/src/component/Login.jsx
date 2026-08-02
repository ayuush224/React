import React, { useState } from "react";
import { Link , matchPath, useNavigate } from 'react-router';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from 'react-hook-form';

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null);

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData)dispatch(authLogin(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div
        className="flex items-center justify-center w-full flex-col"
        >
            <form onSubmit={handleSubmit(login)}
            className="mt-8">
                <div className="space-y-2">
                    <Input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required : true,
                        validate : {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })} 
                    />
                    <Input
                    label="Password"
                    placeholder="Enter Your Password"
                    {...register("password", {
                        required : true,
                    })}
                    />
                    <Button type="submit" className="cursor-pointer my-2 w-full">
                        Login
                    </Button>
                </div>
            </form>
            <div
            className={`bg-gray-100
            rounded border border-black/10 w-15`}
            >
                <span className="inline-block w-full max-w-[#100px]">
                    <Logo width="100%"/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">
                Sign in to your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don't have any account ?
                <Link
                to='/signup'
                className="font-medium text-primary
                transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className="text-red-500 text-center">
                {error}
            </p>}
        </div>
    )
}

export default Login;