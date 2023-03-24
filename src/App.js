import React, { useState } from "react";
import './app.css'
import { Board } from "./components/board";
import { Scoreboard } from "./components/score";



function App(props) {
  const [currentScore, scoreChanger] = useState(0)  
  const [highScore, scoreChanger2] = useState(0)

  function resetCurrentScore(){
    scoreChanger(0)
  }

  function changeScore(){
    if(currentScore < highScore){
      scoreChanger(currentScore + 1)
    }else{
      scoreChanger2(highScore + 1)
      scoreChanger(currentScore + 1)
    }
  }

  return (
    <React.Fragment>
      <div className="top-bar">
        <div className="title"></div>
      </div>
      <div className="content-container">
        <Scoreboard currentScore={currentScore} highScore={highScore}/>
        <Board changeScore={changeScore} resetCurrentScore={resetCurrentScore}/>
      </div>
    </React.Fragment>
  );
}

export default App;
