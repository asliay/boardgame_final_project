import GameGrid from "./GameGrid";
import {Container, Divider, Grid, Segment, Form, Dropdown, Button} from "semantic-ui-react";


const User = ({user, userGames, boardGames}) => {

    if( !user.ownedGames || !user.wishList){
       return null;
    }

    //     const ownedGameNodes = user.ownedGames.map((game, key) =>{
    //         return(
    
    //             <li id = "game-item" key = {game.id}> 
    //                 <GameItem game={game}/></li>
    //         )
    //     });


    // const wishGameNodes = user.wishList.map((game, key) =>{
    //     return(
 
    //         <li id = "game-item" key = {game.id}> 
    //             <GameItem game={game} />
    //         </li>
    //     )
    // });

    let gameOptions = boardGames.map((game => ({key: game.id, value: game.id, text: game.name})))

    const sortedOptions = gameOptions.sort((a, b) => (a.text > b.text) ? 1 : -1)


    return (

        <Container textAlign='left'>
            <h3>My Details</h3>
            <Segment>
            <Divider horizontal>Personal Details</Divider>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <p>First Name:</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {user.firstName} 
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <p>Last Name:</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {user.lastName}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <p>Email Address:</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {user.email}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment>
                <Divider horizontal>Owned Games (These will not be recommended to you)</Divider>
            <Container>
            <Form inline>
                <Dropdown 
                    placeholder='SEARCH FOR GAMES'
                    fluid
                    multiple
                    search
                    selection
                    options={sortedOptions}
                />
                <Button float="right">Add to Owned</Button>
            </Form>
            </Container>
                {<GameGrid games ={user.ownedGames} />}
            </Segment>
            <Segment>
                <Divider horizontal>Wish List</Divider>
            <Form>
                <Dropdown
                    placeholder='SEARCH FOR GAMES'
                    fluid
                    multiple
                    search
                    selection
                    options={sortedOptions}
                />
                <Button>Add to Wishlist</Button>
            </Form>
                {<GameGrid games ={user.wishList} />}
            </Segment>
        </Container>
    )

}
export default User;