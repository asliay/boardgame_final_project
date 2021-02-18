

const GameItem = ({game}) => {

    return (

        <div>
            <h3>{game.name} ({game.releaseYear})</h3>
            {/* <img src={game.thumbnailURL} alt="board game box"/> */}
            <img src={game.boxImageURL} width="40%" height="40%" alt="board game box" />
            <p>{game.minPlayers} - {game.maxPlayers} Players</p>
            <p>Play Time: {game.playTime} minutes</p>
            <p>Category: {game.category}</p>
            
        </div>
    )
}

export default GameItem;