import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const BASE_URL = "https://rawg-video-games-database.p.rapidapi.com/games/"
const API_KEY = process.env.REACT_APP_GAME_API

export function GameDetail() {
    const { id } = useParams()
    const [game, setGame] = useState({})

    const getGame = async () => {
        console.log(id)
        try{
            const res = await fetch(BASE_URL + id + API_KEY, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "4d4f277aa3msha3110580eaa86b7p12632ejsn334b93f0e599"
                }
            })
            const newGame = await res.json()
            setGame(newGame)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect( () => {
        getGame()
    }, [id])

    if (!game.name) return <h1>loading...</h1>
    return(
        <div>
            <h3>
                {game.name} 
            </h3>
            <img className="single-game-image" src={game.background_image_additional}/>
            <p>{game.description_raw}</p>
            <ul>
                {game.platforms.map( (platform) => {
                    return <li key={platform.platform.id}>{platform.platform.name} </li>
                })}
            </ul>
        </div>
    )
}