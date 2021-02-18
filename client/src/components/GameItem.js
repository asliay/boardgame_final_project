import {A, useRoutes} from "hookrouter";
import Routes from "../services/routes"
import SingleGameView from "./SingleGameView";

const GameItem = ({game}) => {

    return (

        <div>
            <h3><A href={`board-games/${game.id}`}>{game.name}</A> 
            ({game.releaseYear})</h3>
            {/* <img src={game.thumbnailURL} alt="board game box"/> */}
            <img src={game.boxImageURL} width="40%" height="40%" alt="board game box" />
            <p>{game.minPlayers} - {game.maxPlayers} Players</p>
            <p>Play Time: {game.playTime} minutes</p>
            <p>Category: {game.category}</p>
            
        </div>
    )
}

export default GameItem;