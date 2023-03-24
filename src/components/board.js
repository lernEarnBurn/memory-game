/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  useState } from "react";
import '../css/board.css'


 

export function Board(props){
    
    const [cardPaths, mixPaths] = useState([
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

    const [chosen, adjustChosen] = useState([])
    
    
    function cardSelect(event){

        const updatedChosen = [...chosen, event.target.src.substring(29)];
        adjustChosen(updatedChosen)

        if(Array.from(chosen).includes(event.target.src.substring(29)) && chosen.length !== 8){
            adjustChosen([])
            props.resetCurrentScore()
        }else if(chosen.length === 8){
            adjustChosen([])
        }else{            
            props.changeScore()
        }
       
        mixPaths(scrambleCards(Array.from(cardPaths)))
    }

    function scrambleCards(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
    }

    return (
        <div className="board">
            <ul className="card-container">
                {cardPaths.map((path, index) => {
                    return  <li key={index} className="card">
                                <img className="pic" onClick={cardSelect} src={path} alt={`image: ${index}`}/>
                            </li>
                })}
            </ul>
        </div>
    )
}