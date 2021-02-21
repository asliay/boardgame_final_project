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
            <Link to={{
                pathname : "/single-game",
                game    : game
            }}>
                <div id="box-image-container-small">
                    <img src={game.boxImageURL} height="100%" width="auto" alt="board game box" />
                </div>
                </Link>
            <p>{game.minPlayers} - {game.maxPlayers} Players</p>
            <p>Play Time: {game.playTime} minutes</p>
            <p>Categories:</p>{gameCategories}
            
        </div>
    )
}

export default GameItem;