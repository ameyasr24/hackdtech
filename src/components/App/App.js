import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import {BrowserRouter} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
