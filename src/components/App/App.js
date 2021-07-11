import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import {BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  const allPosts = posts => console.log(posts);
  const posts = [{
    tags: ["woohoo"],
    description: "sample post",
    body: "text"
  }]

  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar allPosts={allPosts} posts={posts}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
