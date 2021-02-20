import GameItem from "./GameItem";
import {useState, useEffect} from 'react';
import { Grid, Container, Image, Form} from 'semantic-ui-react'

const GameGrid = ({games, handleParentSort, handleFilter}) => {

    const [selectedFilter, setSelectedFilter] = useState("")

    

    const gameNodes = games.map((game) =>{
        return(
            <Grid.Column key={game.id}>
                <GameItem game={game}/>
            </Grid.Column>
        )
    });

    
    return(
        <div>
        <Container>
            
            <Grid container columns={3}>
                {gameNodes}
            </Grid>
            </Container>
        </div>
    )
}

export default GameGrid;