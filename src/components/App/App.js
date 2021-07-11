import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import {BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  const allPosts = posts => console.log(posts);
  const posts = [{
    tags: ["stress"],
    description: "BDC TalkNow",
    body: "Sometimes, you find yourself having a mental breakdown at 2 AM, and unfortunately you can’t call CAPS at any odd time in the middle of night. I decided to try out the Blue Devils Care TalkNow service - I was shocked to see a few therapists available online so late at night. It honestly was really nice to have someone there to talk through what I was feeling in the moment. If you don’t have an account yet, the ChatBot can help you do that if you say you’re anxious and want to talk to someone. Please don’t feel turned off by the logistics of logging into the system; it’s really worth it in the end."
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
