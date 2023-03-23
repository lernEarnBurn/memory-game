import React, { useState } from "react";
import './app.css'
import { Board } from "./components/board";
import { Scoreboard } from "./components/score";



function App() {

  const [cards, cardAmount] = useState([
    "/images/brian.png",
    "/images/chris.png",
    "/images/joe.png",
    "/images/louis.png",
    "/images/moe.png",
    "/images/mort.png",
    "/images/peter.png",
    "/images/stewie.png",
    "/images/quagmire.png",
    "/images/meg.png"
  ])

  return (
    <React.Fragment>
      <div className="top-bar">
        <div className="title"></div>
      </div>
      <div className="content-container">
        <Scoreboard/>
        <Board cardPaths={cards}/>
      </div>
    </React.Fragment>
  );
}

export default App;
