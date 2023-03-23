import React from "react";
import '../css/score.css'

export function Scoreboard(){

    return (
        <div className="score-container">
            <div className="score current">
                <label className="top">Current Score</label>
                2
                </div> 
            <div className="score high">
                <label className="bottom">High Score</label>
                11
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