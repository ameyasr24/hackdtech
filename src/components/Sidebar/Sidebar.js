import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import StickyBox from "react-sticky-box";
import "./Sidebar.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function Sidebar() {
    return (
        <div>
            <StickyBox className="side-bar">
              <ul>
                <p className="site-title">site title</p>
                <Button className="new-post-button" variant="outlined">+ New Post</Button>
                <div>
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
              </ul>
            </StickyBox>
        </div>
    )
}
