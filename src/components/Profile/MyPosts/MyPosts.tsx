import w from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={w.postsStyle}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
            </div>
            <div className={w.posts}>
                <Post message={"Hi, how are you?"} likeCounts={40}/>
                <Post message={"It's my first post"} likeCounts={25}/>
            </div>
        </div>
    )
}