import React, { useState } from "react";
import './app.css'
import { Board } from "./components/board";
import { Scoreboard } from "./components/score";



function App() {

  const [cards, cardAmount] = useState([
    "/images/brian.png",
    "/images/chris.jpeg",
    "/images/joe.jpeg",
    "/images/louis.jpeg",
    "/images/moe.jpeg",
    "/images/mort.jpeg",
    "/images/peter.jpeg",
    "/images/stewie.png",
    "/images/quagmire.jpeg",
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
