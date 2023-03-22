import React from "react";
import './app.css'
import { Board } from "./components/board";
import { Scoreboard } from "./components/score";

function App() {
  return (
    <React.Fragment>
      <div className="top-bar">
        <h1 className="title">Memory</h1>
      </div>
      <div className="content-container">
        <Scoreboard/>
        <Board/>
      </div>
    </React.Fragment>
  );
}

export default App;
