import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
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
      <Sidebar />
      <Form allPosts={allPosts} posts={posts} /> 
    </div>
  );
}

export default App;
