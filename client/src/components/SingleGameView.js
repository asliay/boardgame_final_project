import parse from 'html-react-parser';
import {Container, Segment, Grid, Divider, Image, Button, Icon} from "semantic-ui-react";

const SingleGameView = (props) => {

    const gameCategories = props.location.game.gameCategory.map((category =>(category.name))).join(", ")

    return (
        <div className="single-game-view">
            
            <Container>
                <Segment>
            <Divider horizontal>{props.location.game.name} ({props.location.game.releaseYear})</Divider>
            <br/>
            <Grid divided columns={2} relaxed='very'>
                <Grid.Column>
                    <Image src={props.location.game.boxImageURL} />
                </Grid.Column>
                <Grid.Column textAlign="left">
                        {/* <h2> {props.location.game.name} ({props.location.game.releaseYear})</h2> */}
                        <p>For {props.location.game.minPlayers}-{props.location.game.maxPlayers} Players</p>
                        <p>Play Time: {props.location.game.playTime} minutes</p>
                        <p>Categories: {gameCategories}</p>
                        <div>
                        {parse(props.location.game.description)}
                        </div>
                        <Divider/>
                        <Container >
                        <Button icon labelPosition='left' floated="left">
                            <Icon name='heart' />
                            I Own This
                        </Button>

                        <Button icon labelPosition='left' floated="right">
                            <Icon name='heart' />
                            I Want This
                        </Button>
                        </Container>
                </Grid.Column>
            </Grid>
            </Segment>
            </Container>
        </div>
    )
}

export default SingleGameView;