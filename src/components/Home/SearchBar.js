import React from "react";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import "../Form/TagsInput.css";
import "./SearchBar.css";

const SearchBar = props => {

    return (
        <div className="search-bar">
            <h1>Forum Posts</h1>
            <div className="tags-input"> 
            <Autocomplete 
                options={props.tags}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                fullWidth
                style={{ 
                    width: "100vh",
                }}
                renderInput={(params) => 
                    <TextField {...params} 
                        label="Filter tags" 
                        variant="standard" 
                        fullWidth
                        onKeyUp={event => props.addTags(event)}
                    />
                }
            />
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
        </div>
        </div>
        
    );
};
export default SearchBar;