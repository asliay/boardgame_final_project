import { useState, useEffect} from "react";
import GameGrid from "../components/GameGrid";
import RecommendationsForm from "../components/RecommendationsForm";

const RecommendationsContainer = () => {

    const [boardGames, setBoardGames] = useState([])
    const [query, setQuery]           = useState("")


    const handleFormSubmit = (event) => {
        event.preventDefault();
        let newQuery = ""
        let numPlayers = event.target.plr_num.value;
        let maxPlayTime = event.target.play_time.value;
        let category = event.target.category.value;

        if (numPlayers && maxPlayTime && category) {
            newQuery = `?numPlayers=${numPlayers}&maxPlayTime=${maxPlayTime}&category=${category}`
        } else if (numPlayers && maxPlayTime && !category) {
            newQuery = `?numPlayers=${numPlayers}&maxPlayTime=${maxPlayTime}`
        } else if (numPlayers && category && !maxPlayTime) {
            newQuery = `?numPlayers=${numPlayers}&category=${category}`
        } else if (maxPlayTime && category && !numPlayers) {
            newQuery = `?maxPlayTime=${maxPlayTime}&category=${category}`
        } else if (numPlayers){
            newQuery = `?numPlayers=${numPlayers}`
        } else if (maxPlayTime){
            newQuery = `?maxPlayTime=${maxPlayTime}`
        } else if (category){
            newQuery = `?category=${category}`
        } 
    
        setQuery(newQuery);
        event.target.reset();
    }

    const getBoardGames = () => {
        console.log("getting data from backend");
        fetch(`http://localhost:8080/board-games/${query}`)
            .then(res => res.json())
            .then(data => setBoardGames(data))
    }

    useEffect(() =>{
        getBoardGames()
    }, [query]);

    return(
        <div>
            
            <RecommendationsForm handleFormSubmit={handleFormSubmit}/>
            <GameGrid games={boardGames}/>

        </div>
    )
}

export default RecommendationsContainer;