import React from "react";
import "./Post.css";


const Post = props => {

    return (
        <div className="post">
          <div className="post-title">
           <h3>{props.post.description}</h3>
         </div>
         <ul id="tags-post">
             <li className="tag-label-post">tags:</li>
            {props.post.tags.map((tag, index) => (
                <li key={index} className="tag-post">
                    <span className='tag-title-post'>{tag}</span>
                </li>
            ))}
        </ul>
         <p className="post-body">
            {props.post.body}
        </p>
        </div>
      );
}

export default Post;