import React from "react";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import "../Form/TagsInput.css";
import "./SearchBar.css";

const SearchBar = props => {

    return (
        <div className="search-bar">
            <h1 className="home-title"> {">"} forum posts</h1>
            <div className="tags-input padding"> 
                <Autocomplete 
                    options={props.allTags}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    fullWidth
                    renderInput={(params) => 
                        <TextField {...params} 
                            label="Press enter to filter tags" 
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