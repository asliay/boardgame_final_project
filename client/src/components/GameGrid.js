import GameItem from "./GameItem";
import { Grid, Container, Image } from 'semantic-ui-react'

const GameGrid = ({games}) => {

    const gameNodes = games.map((game) =>{
        return(
            <Grid.Column key={game.id}>
            {/* <li id = "game-item" key = {game.id}> */}
                <GameItem game={game}/>
            </Grid.Column>
            // </li>
        )
    });

    return(
        <div>
            <Container>
            <Grid container columns={3}>
            {/* <ul id = "game-grid"> */}
                {gameNodes}
            {/* </ul> */}
            </Grid>
            </Container>
        </div>
    )
}

export default GameGrid;