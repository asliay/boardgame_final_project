import GameItem from "./GameItem";
import {useState, useEffect} from 'react';
import { Grid, Container, Image, Form} from 'semantic-ui-react'

const GameGrid = ({games, currentUser}) => {

    const gameNodes = games.map((game) =>{
        return(
            <Grid.Column key={game.id}>
                <GameItem game={game} currentUser={currentUser}/>
            </Grid.Column>
        )
    });

    return(
        <div>
        <Container>
            
            <Grid container columns={3} stackable>
                {gameNodes}
            </Grid>
            </Container>
        </div>
    )
}

export default GameGrid;