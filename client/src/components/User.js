import GameGrid from "./GameGrid";
import {Container, Divider, Grid, Segment} from "semantic-ui-react";


const User = ({user, userGames}) => {

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
                <Divider horizontal>Owned Games</Divider>
                {<GameGrid games ={user.ownedGames} />}
            </Segment>
            <Segment>
                <Divider horizontal>Wish List</Divider>
                {<GameGrid games ={user.wishList} />}
            </Segment>
        </Container>
    )

}
export default User;