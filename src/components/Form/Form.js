import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import TagsInput from "./TagsInput";

import "./Form.css";
 
// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";
 
// Error Component
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};
 
function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  const selectedTags = tags => console.log(tags);
 
  return (
    <div className="container">
      <div className="col-sm-12">
        <h3>Form</h3>
      </div >
      <div className="col-sm-12" >
        <TagsInput selectedTags={selectedTags} tags={['stress', 'anxiety', 'depression']} />
      </div>
      <div className="col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <TextField 
                label="Text"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
            />
        </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default Form;