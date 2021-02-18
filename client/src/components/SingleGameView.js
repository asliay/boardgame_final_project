import {useState, useEffect} from "react"
import {Container} from "semantic-ui-react";

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
                <h2> {game.name} ({game.releaseYear})</h2>
                <img src={game.boxImageURL} width="75%" height="75%" alt="Box art"/>
                <p>For {game.minPlayers}-{game.maxPlayers} Players</p>
                <p>Average Play Time: {game.playTime} minutes</p>
                <p>Category: {game.category}</p>
            </Container>
        </div>
    )
}

export default SingleGameView;