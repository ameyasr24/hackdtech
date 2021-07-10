import React from "react";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import "./TagsInput.css";

const TagsInput = props => {
    const [tags, setTags] = React.useState(props.tags);

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            if (!tags.includes(event.target.value)) {
                setTags([...tags, event.target.value]);
                props.selectedTags([...tags, event.target.value]);
                event.target.value = "";
            } else {
                event.target.value = "";
            }
        }
    };
    const removeTags  = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                            onClick={() => removeTags(index)}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>
            <Autocomplete 
                options={props.tags}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                style={{ width: "60%" }}
                freeSolo
                renderInput={(params) => 
                    <TextField {...params} 
                        label="Press enter to add tags" 
                        variant="filled" 
                        fullWidth
                        onKeyUp={event => addTags(event)}
                    />
                }
            />
        </div>
    );
};
export default TagsInput;