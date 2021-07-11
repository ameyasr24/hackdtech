import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import "./Sidebar.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Home from "../Home/Home";
import Form from "../Form/Form";
import logo from "../../img/logo.png";
import {
  useHistory,
  Switch,
  Route
} from "react-router-dom";

import EXAMPLE_POSTS from "./ExamplePosts";

const StyledButton = withStyles({
  root: {
    position: "relative",
    width: "231px",
    height: "42px",
    marginTop: "20px",
    background: "#fca311",
    border: "2px solid #0F192E",
    color: "#0F192E",
    "box-sizing": "border-box",
    "border-radius": "8px",
    '&:hover': {
      backgroundColor: "#fec872",
      color: '#0F192E'
    }
  },

})(Button);


const Sidebar = props => {
  const allPosts = posts => console.log(posts);
  const [posts, setPosts] = React.useState(EXAMPLE_POSTS);
  const history = useHistory();
  const allTags = ["anxiety", "depression", "eating disorders", "burnout", "imposter syndrome", "serotonin boosts", "wellness"]
  const [tags, setTags] = React.useState([])

  const addPost = (tags, description, body) => {
    const newPost = {
      tags: tags,
      description: description,
      body: body
    }
    setPosts([...posts, newPost]);
    allPosts([...posts, newPost]);
  };

  const routeChangeForm = () =>{ 
    let path = `/new-post`; 
    history.push(path);
  }

  const routeChangeHome = () =>{ 
    let path = `/`; 
    history.push(path);
  }

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
      <div className="full-site">
        <div className="full-site-element side-bar">
          <a href="/" onClick={routeChangeHome} className="site-title">be well.</a>
          <img src={logo} className="logo"/>

          <StyledButton onClick={routeChangeForm} className="new-post-button" variant="outlined">+ New Post</StyledButton>
        </div>
        <div className="full-site-element body">
            <Switch>
                <Route exact path="/">
                <Home 
                  posts={posts} 
                  allTags={allTags}
                  tags={tags}
                  addTags={addTags}
                  removeTags={removeTags}
                />
                </Route>
                <Route path="/new-post">
                  <Form 
                    allPosts={allPosts} 
                    posts={posts}
                    addPost={addPost}
                    allTags={allTags}
                    tags={tags}
                    addTags={addTags}
                    removeTags={removeTags}
                  />
                </Route>
            </Switch>
        </div>
            
      </div>
  );
};

export default Sidebar;