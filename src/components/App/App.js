import React from "react";
import Router from "../Router/Router";
import {BrowserRouter} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
