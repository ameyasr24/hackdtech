import React from "react";
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from "./SearchBar";
import Post from "./Post.js";
import { LocalPostOfficeOutlined } from "@material-ui/icons";


const Home = props => {
    const [tags, setTags] = React.useState(["stress", "anxiety", "depression"]);

    const addTags = e => {
        if (e.key === "Enter" && e.target.value !== "") {
          if (!tags.includes(e.target.value)) {
              const newTag = e.target.value;
              e.target.value = "";
              setTags([...tags, newTag]);
          } else {
              e.target.value = "";
          }
        }
    }
    const removeTags  = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    return (
        <div>
            <SearchBar tags={tags} addTags={addTags} removeTags={removeTags}/>
            <ul id="posts">
                {props.posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </ul>
        </div>
    );
export default Home;