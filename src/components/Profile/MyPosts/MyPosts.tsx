import w from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hi, how are you?", likeCounts: 40},
        {id: 2, message: "It's my first post", likeCounts: 25}
    ]

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
                <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts}/>
                <Post message={postsData[1].message} likeCounts={postsData[2].likeCounts}/>
            </div>
        </div>
    )
}