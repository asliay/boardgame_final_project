import {Link} from "react-router-dom";
import {Segment, Divider, Container, Button, Icon, Form} from "semantic-ui-react";
import {postAddGameToUserList} from "../helpers/BackEndServices";

const GameItem = ({game, currentUser}) => {

    if (!game || !game.gameCategory || !currentUser) return null;
        const gameCategories = game.gameCategory.map((category =>(category.name))).join(", ")
        let usersList = "";
        const setUsersList = (event) => {
            usersList = event.target.id
    }

    const onSubmit = (event) => {
        const user_id = 1;
        const targetList = usersList;
        event.preventDefault();
        postAddGameToUserList(game, user_id, targetList)
    }

    let buttons;

    if(currentUser.ownedGames.includes(game)){
        buttons =
            <Button size="medium" id="own" icon labelPosition='left' disabled >
            <Icon name='check' />I Own This</Button>
    } else if (currentUser.wishList.includes(game)){
        buttons =
            <Button size="medium" id="own" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={setUsersList}>
            <Icon name='check' />I Own This</Button>
    } else {
        buttons =
        <div>
            <Button size="medium" id="own" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={setUsersList}>
                <Icon name='check' />I Own This
            </Button>
            <Button size="medium" id="wish" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={setUsersList}>
                <Icon name='heart' />I Want This</Button>
        </div> 
    }

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
                    <Container  textAlign="center">
                    <Form onSubmit={onSubmit} id="add-game-to-user-form">
                        {buttons}
                    </Form>
                    </Container>
                </Container>
            </Segment>
        </div>
    )
}

export default GameItem;