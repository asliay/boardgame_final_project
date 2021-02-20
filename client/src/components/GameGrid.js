import GameItem from "./GameItem";
import {useState, useEffect} from 'react';
import { Grid, Container, Image, Form} from 'semantic-ui-react'

const GameGrid = ({games}) => {

    const [sortedGames, setSortedGames] = useState([]);

    const gameNodes = games.map((game) =>{
        return(
            <Grid.Column key={game.id}>
                <GameItem game={game}/>
            </Grid.Column>
        )
    });

    const sortGames = (type) => {
        const types = {
            minPlayersAsc : 'minPlayers',
            minPlayersDesc : 'minPlayers',
            maxPlayersAsc : 'maxPlayers',
            maxPlayersDesc : 'maxPlayers',
            playTimeAsc : 'playTime',
            playTimeDesc : 'playTime',
            categoryAsc : 'gameCategoryJoins[0].category.name'
        
        };
        const sortProperty = types[type];
        let sorted = [];
        if(type === 'minPlayersAsc'|| 'maxPlayersAsc' || 'playTimeAsc' || 'categoryAsc' ) {
            sorted = [...games].sort((a, b) => a[sortProperty] - b[sortProperty]);
        } else if (type === 'minPlayersDesc'|| 'maxPlayersDesc' || 'playTimeDesc'){
            sorted = [...games].sort((a, b) => b[sortProperty] - a[sortProperty]);
        }
        console.log(sorted);
        setSortedGames(sorted);
    }



  


    return(
        <div>
        <Container>
            <Form>
                    <Form.Field>
                        <select onChange={(e) => sortGames(e.target.value)}>
                            <option value='minPlayersAsc'>Sort by # Minimum Players Ascending</option>
                            <option value='minPlayersDesc'>Sort by # Minimum Players Descending</option>
                            <option value='maxPlayersAsc'>Sort by # Max Players Ascending</option>
                            <option value='maxPlayersDesc'>Sort by # Max Players Descending</option>
                            <option value='playTimeAsc'>Sort by Playing Time Ascending</option>
                            <option value='playTimeDesc'>Sort by Playing Time Descending</option>
                            <option value='categoryAsc'>Sort by Category</option>
                        </select>
                    </Form.Field>
                    </Form>
            <Grid container columns={3}>
                {gameNodes}
            </Grid>
            </Container>
        </div>
    )
}

export default GameGrid;