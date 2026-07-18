import React from "react";
import appwriteService from './appwrite/auth'
import { Link } from "react-router-dom"

export default function PostCard({$id, title, feturedImage}){
    return (
        <Link to={`/post${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <h1>Post Card</h1>
                </div>
            </div>
        </Link>
    )
}