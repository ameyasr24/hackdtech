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
  const [tags, setTags] = React.useState(["stress", "anxiety", "depression"]);

  const history = useHistory();
  const handleSubmit = event => {
    props.addPost(tags, description, body);
    let path = "/";
    history.push(path);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const handleBodyChange = e => {
    setBody(e.target.value);
  }

  const addTags = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      if (!tags.includes(e.target.value)) {
          setTags([...tags, e.target.value]);
          e.target.value = "";
      } else {
          e.target.value = "";
      }
    }
  }
  const removeTags  = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };
 
  return (
    <div className="container">
      <div className="form-element">
        <h3>Form</h3>
      </div>
      <div className="form-element">
        <TagsInput tags={tags} addTags={addTags} removeTags={removeTags}/>
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