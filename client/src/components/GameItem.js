import {Link} from "react-router-dom";

const GameItem = ({game}) => {

    const gameCategories = game.gameCategoryJoins.map((join) => {
        return (
            <p key={join.category.id}>{join.category.name}</p>
        )
    })

    return (

        <div><h3>
            <Link to={{
                pathname : "/single-game",
                game    : game
            }}>{game.name}</Link>
             : ({game.releaseYear})</h3>
            {/* <img src={game.thumbnailURL} alt="board game box"/> */}
            <img src={game.boxImageURL} width="40%" height="40%" alt="board game box" />
            <p>{game.minPlayers} - {game.maxPlayers} Players</p>
            <p>Play Time: {game.playTime} minutes</p>
            <p>Categories: {gameCategories}</p>
            
        </div>
    )
}

export default GameItem;