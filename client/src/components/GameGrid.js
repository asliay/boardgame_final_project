import GameItem from "./GameItem";

const GameGrid = ({games}) => {
    const gameNodes = games.map((game) =>{
        return(
            <li id = "game-item" key = {game.id}>
                <GameItem game={game} />
            </li>
        )
    });

    return(
        <div>
            <h2>Game Grid</h2>
            <ul id = "game-grid">
                {gameNodes}
            </ul>
        </div>
    )
}

export default GameGrid;