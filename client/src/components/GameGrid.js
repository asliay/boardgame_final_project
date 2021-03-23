import GameItem from "./GameItem";
import {useState, useEffect} from 'react';
import { Grid, Container, Image, Form} from 'semantic-ui-react'
import Pagination from "./Pagination";


const GameGrid = ({games, user, setUser}) => {


    const [currentPage, setCurrentpage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = games.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentpage(pageNumber)

    console.log("current page ", currentPage)

    const gameNodes = currentPosts.map((game) =>{
        return(
            
            <Grid.Column key={game.id}>

                <GameItem game={game}
                          currentUser={user}
                          setUser={setUser}
                          />
            </Grid.Column>
        )
    });


    return(
        <div>
        <Container>
        <h3>Page {currentPage} of {Math.ceil(games.length / postsPerPage)}</h3>
            <Grid container columns={3} stackable>
                {gameNodes}
                <Pagination postsPerPage={postsPerPage} totalPosts={games.length} paginate={paginate} />
            </Grid>
            </Container>
        </div>
    )
}

export default GameGrid;