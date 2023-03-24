import React from "react";
import '../css/score.css'



export function Scoreboard(props){
    

    return (
        <div className="score-container">
            <div className="score current" >
                <label className="top">Current Score</label>
                {props.currentScore}
                </div> 
            <div className="score high">
                <label className="bottom">High Score</label>
                {props.highScore}
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