import { useState, useEffect} from "react";
import 'semantic-ui-css/semantic.min.css';
import {Container, Divider, Form} from "semantic-ui-react";
import GameGrid from "../components/GameGrid";
import RecommendationsForm from "../components/RecommendationsForm";
import RecommendationsFilter from "../components/RecommendationsFilter";

const RecommendationsContainer = ({handleSort, recsString, selectedFilter,handleQueryChange, handleResetForm, handleRecsStringChange, handleFilter, setSelectedFilter, boardGames}) => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let newQuery = ""
        let numPlayers = event.target.plr_num.value;
        let maxPlayTime = event.target.play_time.value;
        let category = event.target.category.value;
        let newRecsString = `All results`

        if (numPlayers && maxPlayTime && category) {
            newQuery = `?numPlayers=${numPlayers}&maxPlayTime=${maxPlayTime}&category=${category}`
            newRecsString = `Search Results for ${category} Games less than ${maxPlayTime} Minutes for ${numPlayers} Players`
        } else if (numPlayers && maxPlayTime && !category) {
            newQuery = `?numPlayers=${numPlayers}&maxPlayTime=${maxPlayTime}`
            newRecsString = `Search Results for Games less than ${maxPlayTime} Minutes for ${numPlayers} Players`
        } else if (numPlayers && category && !maxPlayTime) {
            newQuery = `?numPlayers=${numPlayers}&category=${category}`
            newRecsString = `Search Results for ${category} Games for ${numPlayers} Players`
        } else if (maxPlayTime && category && !numPlayers) {
            newQuery = `?maxPlayTime=${maxPlayTime}&category=${category}`
            newRecsString = `Search Results for ${category} Games less than ${maxPlayTime} Minutes for ${numPlayers} Players`
        } else if (numPlayers){
            newQuery = `?numPlayers=${numPlayers}`
            newRecsString = `Search Results for Games for ${numPlayers} Players`
        } else if (maxPlayTime){
            newQuery = `?maxPlayTime=${maxPlayTime}`
            newRecsString = `Search Results for Games less than ${maxPlayTime} Minutes`
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
                <GameGrid games={boardGames}/>
            </Container>
            
        </div>
    )
}

export default RecommendationsContainer;