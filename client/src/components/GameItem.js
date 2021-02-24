import {Link} from "react-router-dom";
import {Segment, Divider, Container, Button, Icon, Form} from "semantic-ui-react";
import {postAddGameToUserList, getUser} from "../helpers/BackEndServices";

const GameItem = ({game, currentUser, setUser}) => {

    if (!game || !game.gameCategory) return null;

    const gameCategories = game.gameCategory.map((category =>(category.name))).join(", ")

    let usersList = "";

    const setUsersList = (event) => {
        usersList = event.target.id
    }

    let buttons;

    const onSubmit = (event) => {
        const userId = currentUser.id;
        const targetList = usersList;
        event.preventDefault();
        postAddGameToUserList(game, userId, targetList)
        const updatedUser = currentUser
        if (usersList === "own") {
            updatedUser.ownedGames.push(game);
            // buttons =  <Button size="medium" id="own" icon labelPosition='left' disabled >
            // <Icon name='check' />I Own This</Button>
        } else if (usersList === "wish") {
            updatedUser.wishList.push(game);
            // buttons = <Button size="medium" id="own" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={setUsersList}>
            // <Icon name='check' />I Own This</Button>
        }
        setUser(updatedUser);

    }

    
    if(currentUser === null) {
        buttons = <div></div>
    } else if(currentUser.ownedGames && currentUser.ownedGames.includes(game)){
        buttons =
            <Button size="medium" id="own" icon labelPosition='left' disabled >
            <Icon name='check' />I Own This</Button>
    } else if (currentUser.wishList && currentUser.wishList.includes(game)){
        buttons =
            <Button size="medium" id="own" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={setUsersList}>
            <Icon name='check' />I Own This</Button>
    } else if (currentUser) {
        buttons =
        <div>
            <Button size="medium" id="own" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={setUsersList}>
                <Icon name='check' />I Own This
            </Button>
            <Button size="medium" id="wish" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={setUsersList}>
                <Icon name='heart' />I Want This</Button>
        </div> 
    } else {
        buttons = <div></div>
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
                    <p>RANK(TEST): {game.rank}</p>
                    <p>Players: {game.minPlayers} - {game.maxPlayers} </p>
                    <p>Play Time: {game.minPlayTime} - {game.maxPlayTime} mins</p>
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