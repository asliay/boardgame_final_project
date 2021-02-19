import {useState, useEffect} from "react"
import {Container, Segment, Grid, Divider, Image} from "semantic-ui-react";

const SingleGameView = ({id}) => {

    const [game, setGame] = useState({})

    const getGame = (id) => {
        console.log("getting game")
        fetch(`http://localhost:8080/board-games/${id}`)
            .then(res => res.json())
            .then(data => setGame(data))
    }

    useEffect(() => {
        getGame(id)
    }, [])

    return (
        <div className="single-game-view">
            <Container>
            <Divider horizontal>Single Game View</Divider>
            <br/>
            <Grid divided columns={2} relaxed='very'>
            
                <Grid.Column>
                    <Image src={game.boxImageURL} />
                </Grid.Column>
                <Grid.Column>
                  
                        <h2> {game.name} ({game.releaseYear})</h2>
                        <p>For {game.minPlayers}-{game.maxPlayers} Players</p>
                        <p>Average Play Time: {game.playTime} minutes</p>
                        <p>Category: {game.category}</p>
                    
                </Grid.Column>
            </Grid>
            </Container>
        </div>
    )
}

export default SingleGameView;