import GameItem from "./GameItem";
import { Grid, Container, Image } from 'semantic-ui-react'

const GameGrid = ({games}) => {
    const gameNodes = games.map((game) =>{
        return(
            <Grid.Column key={game.id}>
                <GameItem game={game} />
            </Grid.Column>
            // <li id = "game-item" key = {game.id}>
            //     <GameItem game={game} />
            // </li>
        )
    });

    return(
        <div>
            
            <h2>Your Recommendations</h2>
            <Grid container columns={3}>
                {gameNodes}
            </Grid>
            
            {/* <ul id = "game-grid">
                {gameNodes}
            </ul> */}
           
        </div>
    )
}

export default GameGrid;