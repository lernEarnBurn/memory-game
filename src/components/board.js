import React from "react";
import '../css/board.css'
import uniqid from 'uniqid'

export function Board(props){

    return (
        <div className="board">

            <ul className="card-container">
                {props.cardPaths.map((path) => {
                    return  <li>
                                <div key={uniqid()} className="card" style={{ backgroundImage: `url(${path})` }}></div>
                            </li>
                })}
            </ul>
        </div>
    )
}