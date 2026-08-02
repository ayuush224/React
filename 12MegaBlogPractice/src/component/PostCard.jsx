import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router";

function PostCard({$id, title, featuredImage}){
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full rounded-xl bg-gray-100 p-4 text-black">
                <div className="w-full justify-center mb-4 text-black">
                    <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="rounded-xl"
                    />
                    <h2 className="text-xl font-bold ">
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    )
}

export default PostCard;