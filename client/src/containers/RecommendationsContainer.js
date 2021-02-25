import { useState, useEffect} from "react";
import 'semantic-ui-css/semantic.min.css';
import {Container, Divider, Form} from "semantic-ui-react";
import GameGrid from "../components/GameGrid";
import RecommendationsForm from "../components/RecommendationsForm";
import RecommendationsFilter from "../components/RecommendationsFilter";

const RecommendationsContainer = ({handleSort, recsString, selectedFilter,handleQueryChange, handleResetForm, handleRecsStringChange, handleFilter, setSelectedFilter, boardGames, setUser, user}) => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let newQuery = ""
        let numPlayers = event.target.plr_num.value;
        let playTime = event.target.play_time.value;
        let category = event.target.category.value;
        let newRecsString = `All results`

        if (numPlayers && playTime && category) {
            newQuery = `?numPlayers=${numPlayers}&playTime=${playTime}&category=${category}`
            newRecsString = `Search Results for ${category} Games less than ${playTime} Minutes for ${numPlayers} Players`
        } else if (numPlayers && playTime && !category) {
            newQuery = `?numPlayers=${numPlayers}&playTime=${playTime}`
            newRecsString = `Search Results for Games less than ${playTime} Minutes for ${numPlayers} Players`
        } else if (numPlayers && category && !playTime) {
            newQuery = `?numPlayers=${numPlayers}&category=${category}`
            newRecsString = `Search Results for ${category} Games for ${numPlayers} Players`
        } else if (playTime && category && !numPlayers) {
            newQuery = `?playTime=${playTime}&category=${category}`
            newRecsString = `Search Results for ${category} Games less than ${playTime} Minutes for ${numPlayers} Players`
        } else if (numPlayers){
            newQuery = `?numPlayers=${numPlayers}`
            newRecsString = `Search Results for Games for ${numPlayers} Players`
        } else if (playTime){
            newQuery = `?playTime=${playTime}`
            newRecsString = `Search Results for Games less than ${playTime} Minutes`
        } else if (category){
            newQuery = `?category=${category}`
            newRecsString = `Search Results for ${category} Games`
        } 
    
        handleQueryChange(newQuery);
        handleRecsStringChange(newRecsString);
        setSelectedFilter("")
        
    }

    return(
        <div>
            <Container >
                <RecommendationsForm 
                    handleFormSubmit={handleFormSubmit} 
                    handleResetForm={handleResetForm} 
                    boardGames={boardGames}
                />
            </Container>
            <br/>
            <Divider horizontal>{recsString}</Divider>
            <Container textAlign='center'>
                <RecommendationsFilter 
                    selectedFilter={selectedFilter}
                    handleFilter={handleFilter}
                    boardGames={boardGames}
                    handleSort={handleSort}
                    setSelectedFilter={setSelectedFilter}
                />
                <GameGrid games={boardGames}
                          user={user}
                          setUser={setUser}/>
            </Container>
            
        </div>
    )
}

export default RecommendationsContainer;