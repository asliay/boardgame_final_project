import {Link} from "react-router-dom";
import {useState} from 'react';
import {Segment, Divider, Container, Button, Icon, Form} from "semantic-ui-react";
import {postAddGameToUserList, getUser, deleteGameFromUserList} from "../helpers/BackEndServices";

const GameItem = ({game, currentUser, setUser}) => {

    const [flag, setFlag] = useState(false)

    if (!game || !game.gameCategory) return null;

    const gameCategories = game.gameCategory.map((category =>(category.name))).join(", ")


    let buttons;

    const onClickAddOwned = (event) => {
        const userId = currentUser.id;
        const targetList = event.target.id;
        event.preventDefault();
        postAddGameToUserList(game, userId, targetList)
        const updatedUser = currentUser
        updatedUser.ownedGames.push(game);
        setUser(updatedUser);
        setFlag(!flag);
        // if in wish list, remove from wish list
    }

    const onClickAddWish = (event) => {
        const userId = currentUser.id;
        const targetList = event.target.id;
        event.preventDefault();
        postAddGameToUserList(game, userId, targetList)
        const updatedUser = currentUser
        updatedUser.wishList.push(game);
        setUser(updatedUser);
        setFlag(!flag);
    }

    const onClickRemoveOwned = (event) => {
        const userId = currentUser.id;
        const targetList = event.target.id;
        event.preventDefault();
        postAddGameToUserList(game, userId, targetList)
        const updatedUser = currentUser
        const pos = updatedUser.ownedGames.indexOf(game)
        updatedUser.ownedGames.splice(pos, 1);
        setUser(updatedUser);
        setFlag(!flag);
    }



    if(currentUser === null) {
        buttons = <div></div>
    } else if(currentUser.ownedGames && currentUser.ownedGames.some((ownedGame) => ownedGame.name === game.name)) {
        buttons =
            <Button size="medium" id="removeOwn" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={onClickRemoveOwned}>
            <Icon name='minus' />Remove From Owned</Button>
    } else if (currentUser.wishList && currentUser.wishList.some((wishList) => wishList.name === game.name)){
        buttons =
            <Button size="medium" id="own" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={onClickAddOwned}>
            <Icon name='check' />Own This?</Button>
    } else if (currentUser) {
        buttons =
        <div>
            <Button size="medium" id="own" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={onClickAddOwned}>
                <Icon name='check' />Own This?
            </Button>
            <Button size="medium" id="wish" icon labelPosition='left' type='submit' onMouseDown={e => e.preventDefault()} onClick={onClickAddWish}>
                <Icon name='heart' />Want This?</Button>
        </div> 
    } else {
        buttons = <div></div>
    }

    return (
        <div>
            <Segment raised>
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
                        <p>Play Time: {game.minPlayTime} - {game.maxPlayTime} mins</p>
                        <p>Categories: {gameCategories} </p>
                    <Container  textAlign="center">
                    
                        {buttons}
                
                    </Container>
                </Container>
            </Segment>
        </div>
    )
}

export default GameItem;