import ReactDOM from "react-dom";
import TextField from '@material-ui/core/TextField';
import TagsInput from "./TagsInput";
import React from 'react';
import "./Form.css";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


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
    <div className="container">
      <div className="form-element form-title-container">
        <h3 className="form-title">Submit a post!</h3>
      </div>
      <div className="form-element">
        <TagsInput tags={props.tags} addTags={props.addTags} removeTags={props.removeTags}/>
      </div>
      <div className="form-element">
          <TextField 
              label="Description"
              fullWidth
              variant="outlined"
              value={description}
              onChange={handleDescriptionChange}
          />
      </div>
      <div className="form-element">
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
        <Button variant="outlined" onClick={handleSubmit}> Submit 
        </Button>     
      </div>
      </div>
  );
}
 
export default Form;