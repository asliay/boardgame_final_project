import {Link} from "react-router-dom";
import {Segment, Divider, Container} from "semantic-ui-react";

const GameItem = ({game}) => {


    const gameCategories = game.gameCategory.map((category =>(category.name))).join(", ")


    return (

        <div>
            <Segment>
            <h3>
            <Link to={{
                pathname : "/single-game",
                game    : game
            }}>{game.name}</Link>
             : ({game.releaseYear})</h3>
            {/* <img src={game.thumbnailURL} alt="board game box"/> */}
            <Link to={{
                pathname : "/single-game",
                game    : game
            }}>
                <div id="box-image-container-small">
                    <img src={game.boxImageURL} height="100%" width="auto" alt="board game box" />
                </div>
                </Link>
            <Divider></Divider>
            <Container textAlign="left">
                <p>Players: {game.minPlayers} - {game.maxPlayers} </p>
                <p>Play Time: {game.playTime} mins</p>
                <p>Categories: {gameCategories} </p>
                </Container>
            </Segment>
        </div>
    )
}

export default GameItem;