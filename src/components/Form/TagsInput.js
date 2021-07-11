import React from "react";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import "./TagsInput.css";

const TagsInput = props => {

    return (
        <div className="tags-input">
            <ul id="tags">
                {props.tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                            onClick={() => props.removeTags(index)}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>
            <Autocomplete 
                options={props.allTags}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                freeSolo
                fullWidth
                renderInput={(params) => 
                    <TextField {...params} 
                        label="Press enter to add tags" 
                        variant="filled" 
                        fullWidth
                        onKeyUp={event => props.addTags(event)}
                    />
                }
            />
        </div>
    );
};
export default TagsInput;