import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import "./Sidebar.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Home from "../Home/Home";
import Form from "../Form/Form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const StyledButton = withStyles({
  root: {
    position: "relative",
    width: "231px",
    height: "42px",
    margin: "0px",
    background: "#FFFFFF",
    border: "2px solid #000000",
    "box-sizing": "border-box",
    "border-radius": "8px",
  },

})(Button);


const Sidebar = props => {
    return (
        <div className="full-site">
          <div className="side-bar">
            <a href="/" className="site-title">site title</a>
            <StyledButton href="/new-post" className="new-post-button" variant="outlined">+ New Post</StyledButton>
            <p className="sort-by-title">Sort by:</p>
            <div name="sort-by-options">
              <RadioGroup aria-label="sort-by" name="sort-by-options">
                <FormControlLabel value="all-posts" control={<Radio />} label="all posts" />
                <FormControlLabel value="most recent" control={<Radio />} label="most recent" />
                <FormControlLabel value="popular all time" control={<Radio />} label="popular all time" />
                <FormControlLabel value="popular this week" control={<Radio />} label="popular this week" />
              </RadioGroup>
            </div>
          </div>
          <div className="content">
            <Switch>
                <Route exact path="/">
                <Home />
                </Route>
                <Route path="/new-post">
                  <Form allPosts={props.allPosts} posts={props.posts}/>
                </Route>
            </Switch>
          </div>
        </div>
    );
};

export default Sidebar;