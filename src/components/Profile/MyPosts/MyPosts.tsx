import w from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
            </div>
            <Post message={"Hi, how are you?"} likeCounts ={40}/>
            <Post message={"It's my first post"} likeCounts ={25}/>
        </div>
    )
}