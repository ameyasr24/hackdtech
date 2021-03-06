import React from "react";
import SearchBar from "./SearchBar";
import Post from "./Post.js";
import "./Home.css";


const Home = props => {

    const filterPosts = (tags) => {
        let filteredPosts = [];
        if (tags.length==0) {
            return props.posts;
        }
        props.posts.filter((post) =>{
            for (let i=0; i<tags.length; i++) {
                if (post.tags.includes(tags[i])) {
                    filteredPosts.push(post);
                    break;
                }
            }
        })
        return filteredPosts;
    }
    return (
        <div>
            <SearchBar allTags={props.allTags} tags={props.tags} addTags={props.addTags} removeTags={props.removeTags}/>
            <div className="posts">
                {filterPosts(props.tags).map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
        </div>
    );
};
export default Home;