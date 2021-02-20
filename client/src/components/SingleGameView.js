import {useState, useEffect} from "react"
import {Container, Segment, Grid, Divider, Image} from "semantic-ui-react";

const SingleGameView = (props) => {

    const gameCategories = props.location.game.gameCategoryJoins.map((join) => {
        return (
            <p key={join.category.id}> {join.category.name}</p>
        )
    })
    return (
        <div className="single-game-view">
            <Container>
            <Divider horizontal>Single Game View</Divider>
            <br/>
            <Grid divided columns={2} relaxed='very'>
                <Grid.Column>
                    <Image src={props.location.game.boxImageURL} />
                </Grid.Column>
                <Grid.Column>
                        <h2> {props.location.game.name} ({props.location.game.releaseYear})</h2>
                        <p>For {props.location.game.minPlayers}-{props.location.game.maxPlayers} Players</p>
                        <p>Average Play Time: {props.location.game.playTime} minutes</p>
                        <p>Category: {gameCategories}</p>
                </Grid.Column>
            </Grid>
            </Container>
        </div>
    )
}

export default SingleGameView;