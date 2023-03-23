/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import '../css/board.css'


 

export function Board(props){

    return (
        <div className="board">
            <ul className="card-container">
                {props.cardPaths.map((path, index) => {
                    return  <li key={index} className="card">
                                <img className="pic" src={path} alt={`image: ${index}`}/>
                            </li>
                })}
            </ul>
        </div>
    )
}