/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  useState } from "react";
import '../css/board.css'
import { animated, useSpring } from "react-spring";


 

export function Board(props){
    
    const [cardPaths, mixPaths] = useState([
        "/images/chris.png",
        "/images/joe.png",
        "/images/louis.png",
        "/images/moe.png",
        "/images/mort.png",
        "/images/peter.png",
        "/images/stewie.png",
        "/images/quagmire.png",
        "/images/meg.png",
        "/images/brian.png"
      ])

    const [chosen, adjustChosen] = useState([])
    
    const [springs, api] = useSpring(() => ({
        from: { opacity: 1 },
      }))
    
    function cardSelect(event){

        const updatedChosen = [...chosen, event.target.src.substring(29)];
        adjustChosen(updatedChosen)

        if(Array.from(chosen).includes(event.target.src.substring(29)) && chosen.length !== 8){
            adjustChosen([])
            props.resetCurrentScore()
        }else if(chosen.length === 8){
            adjustChosen([])
            props.changeScore()
        }else{            
            props.changeScore()
        }
       
        mixPaths(scrambleCards(Array.from(cardPaths)))

        api.start({
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
        })
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
                    return  <animated.li style={springs} key={index} className="card">
                                <img className="pic" onClick={cardSelect} src={path} alt={`image: ${index}`}/>
                            </animated.li>
                })}
            </ul>
        </div>
    )
}