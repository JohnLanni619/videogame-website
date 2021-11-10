import React from "react";

export function Game({game}) {
    return(
        <li>
            <img className="images" src={game.background_image} alt={`${game.name} " background"`}/>
            <h3>{game.name}</h3>
        </li>
    )
}