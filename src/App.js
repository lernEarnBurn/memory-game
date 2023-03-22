import React from "react";
import './app.css'
import { Board } from "./components/board";
import { Scoreboard } from "./components/score";

function App() {
  return (
    <React.Fragment>
      <div className="top-bar">
        <div className="title"></div>
      </div>
      <div className="content-container">
        <Scoreboard/>
        <Board/>
      </div>
    </React.Fragment>
  );
}

export default App;
