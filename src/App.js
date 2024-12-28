import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextUtil from "./components/TextUtil";

function App() {
  return (
    <>
      <Navbar title="Dictionary" />
      <div className="container">
        <TextUtil heading="Enter a text here" />
      </div>
    </>
  );
}

export default App;
