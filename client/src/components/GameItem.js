

const GameItem = ({game}) => {

    return (

        <div>
            <h3>{game.name}</h3>
            <p>Released: {game.releaseYear}</p>
            <p>Players: {game.minPlayers} - {game.maxPlayers}</p>
            <p>Play Time: {game.playTime}</p>
            <p>Category: {game.category}</p>
        </div>
    )
}

export default GameItem;