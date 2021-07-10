import ReactDOM from "react-dom";
import TextField from '@material-ui/core/TextField';
import TagsInput from "./TagsInput";
import React from 'react';
import "./Form.css";

const Form = props => {
  const [posts, setPosts] = React.useState(props.posts);
  const [description, setDescription] = React.useState("");
  const [body, setBody] = React.useState("");
  const [tags, setTags] = React.useState(["stress", "anxiety", "depression"]);

  const handleSubmit = event => {
    const newPost = {
      tags: tags,
      description: description,
      body: body
    }
    setPosts([...posts, newPost]);
    props.allPosts([...posts, newPost]);
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
      <div className="col-sm-12">
        <h3>Form</h3>
      </div >

      <div className="col-sm-12">
          <TagsInput tags={tags} addTags={addTags} removeTags={removeTags}/>
          <div className="form-group">
            <TextField 
                label="Description"
                fullWidth
                variant="outlined"
                value={description}
                onChange={handleDescriptionChange}
            />
            <TextField 
                label="Body"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
                value={body}
                onChange={handleBodyChange}
            />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" onClick={handleSubmit}/>
          </div>
      </div>
    </div>
  );
}
 
export default Form;