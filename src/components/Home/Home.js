import { LocalPostOfficeOutlined } from "@material-ui/icons";
import React from "react";
import Post from "./Post.js";

const Home = props => {
    
    return (
        <div>
            <div className="title"> Activity</div>
            <div className="PostList"> {
                props.posts.map(post =>{
                    return <Post post = {post}/>
                })
            }
            </div>
        </div>
    )
}

export default Home;