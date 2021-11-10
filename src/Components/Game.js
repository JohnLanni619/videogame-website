import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export function Game({game}) {
    return(
        <li>
            <Link to={`/game/${game.id}`}>
                <img className="images" src={game.background_image} alt={`${game.name} " background"`}/>
                <h3>{game.name}</h3>
            </Link>
        </li>
    )
}