import ReactDOM from "react-dom";
import TextField from '@material-ui/core/TextField';
import TagsInput from "./TagsInput";
import React from 'react';
import "./Form.css";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


const StyledButton = withStyles({
  root: {
    position: "relative",
    width: "200px",
    height: "42px",
    background: "#fff",
    border: "2px solid #0F192E",
    color: "#000",
    "box-sizing": "border-box",
    "border-radius": "8px",
    '&:hover': {
      backgroundColor: "#fec872",
      color: '#0F192E'
    }
  },

})(Button);

const Form = props => {
  const [description, setDescription] = React.useState("");
  const [body, setBody] = React.useState("");

  const history = useHistory();
  const handleSubmit = event => {
    props.addPost(props.tags, description, body);
    let path = "/";
    history.push(path);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const handleBodyChange = e => {
    setBody(e.target.value);
  }
 
  return (
    <div>
      <h1 className="form-title">{">"} submit a post</h1>
      <div className="form">
      <div className="form-element background">
        <TagsInput allTags={props.allTags} tags={props.tags} addTags={props.addTags} removeTags={props.removeTags}/>
      </div>
      <div className="form-element background">
          <TextField 
              label="Description"
              fullWidth
              variant="outlined"
              value={description}
              onChange={handleDescriptionChange}
          />
      </div>
      <div className="form-element background">
          <TextField 
              label="Body"
              multiline
              fullWidth
              rows={9}
              variant="outlined"
              value={body}
              onChange={handleBodyChange}
          />
      </div>
      <div className="form-element">
        <StyledButton variant="outlined" onClick={handleSubmit}>submit</StyledButton>
      </div>
    </div>
  </div>
  );
}
 
export default Form;