import React, {useState} from "react";
import '../css/score.css'



export function Scoreboard(){
    const [currentScore, scoreChanger] = useState(0)
    //possibly use a json file so high score doesn't reset
    const [highScore, scoreChanger2] = useState(0)

    

    return (
        <div className="score-container">
            <div className="score current" >
                <label className="top">Current Score</label>
                {currentScore}
                </div> 
            <div className="score high">
                <label className="bottom">High Score</label>
                {highScore}
                </div>
            <div className="instructions">
                <p>
                    Pick a card without picking one you already picked.
                    Once you go through each card once, you can pick any card.
                </p>
            </div>
        </div>
    )
}