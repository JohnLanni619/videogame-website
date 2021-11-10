import React, {useState, useEffect} from "react";
import { Filter } from "../Filter";
import { Game } from "../Game";

const BASE_URL = "https://rawg-video-games-database.p.rapidapi.com/games"
const API_KEY = process.env.REACT_APP_GAME_API
const PARAMETERS = "&page_size=40&ordering=-metacritic&dates=2012-01-01,2012-12-31"

const VideoGameList = () => {
    const [filter, setFilter] = useState("")
    const [games, setGames] = useState([])

    const getGames = async () => {
        try{
            const res = await fetch(BASE_URL+API_KEY+PARAMETERS, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "4d4f277aa3msha3110580eaa86b7p12632ejsn334b93f0e599"
                }
            })
            const games = await res.json()
            console.log(games)
            setGames(games.results)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getGames()
    }, [])

    return(
        <div>
            <h3>Upcoming Games</h3>
            <Filter filter={filter} setFilter={setFilter}/>
            <ul className="game-list">
                {games
                    .filter( (game) => 
                        game.name.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map( (game) => (
                        <Game key={game.id} game={game}/>
                    ))}
            </ul>
        </div>
    )
}

export default VideoGameList;