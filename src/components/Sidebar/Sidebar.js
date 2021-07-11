import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import "./Sidebar.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Home from "../Home/Home";
import Form from "../Form/Form";
import Post from "../Home/Post";
import {
  useHistory,
  Switch,
  Route
} from "react-router-dom";

const StyledButton = withStyles({
  root: {
    position: "relative",
    width: "231px",
    height: "42px",
    marginTop: "20px",
    background: "#19294d",
    border: "2px solid #fca311",
    color: "#FFF",
    "box-sizing": "border-box",
    "border-radius": "8px",
    '&:hover': {
      backgroundColor: "fca311",
      color: '#FFF'
    }
  },

})(Button);


const Sidebar = props => {
  const allPosts = posts => console.log(posts);
  const [posts, setPosts] = React.useState([{
    tags: ["stress"],
    description: "BDC TalkNow",
    body: "Sometimes, you find yourself having a mental breakdown at 2 AM, and unfortunately you can’t call CAPS at any odd time in the middle of night. I decided to try out the Blue Devils Care TalkNow service - I was shocked to see a few therapists available online so late at night. It honestly was really nice to have someone there to talk through what I was feeling in the moment. If you don’t have an account yet, the ChatBot can help you do that if you say you’re anxious and want to talk to someone. Please don’t feel turned off by the logistics of logging into the system; it’s really worth it in the end."
  }])
  const history = useHistory();

  const tags = ["tag"]
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

    return (
        <div className="full-site">
          <div className="full-site-element side-bar">
            <a href="/" onClick={routeChangeHome} className="site-title">site title</a>
            <StyledButton onClick={routeChangeForm} className="new-post-button" variant="outlined">+ New Post</StyledButton>
            <p className="sort-by-title">Sort By:</p>
            <div name="sort-by-options">
              <RadioGroup aria-label="sort-by" name="sort-by-options">
                <FormControlLabel value="all-posts" control={<Radio />} label="all posts" />
                <FormControlLabel value="most recent" control={<Radio />} label="most recent" />
                <FormControlLabel value="popular all time" control={<Radio />} label="popular all time" />
                <FormControlLabel value="popular this week" control={<Radio />} label="popular this week" />
              </RadioGroup>
            </div>
          </div>
          <div className="full-site-element">
              <Switch>
                  <Route exact path="/">
                  <Home posts={posts}/>
                  </Route>
                  <Route path="/new-post">
                    <Form 
                      allPosts={allPosts} 
                      posts={posts}
                      addPost={addPost}
                    />
                  </Route>
              </Switch>
          </div>
              
        </div>
    );
};

export default Sidebar;