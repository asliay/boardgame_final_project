import { useState, useEffect} from "react";
import GameGrid from "../components/GameGrid";
import RecommendationsForm from "../components/RecommendationsForm";

const RecommendationsContainer = () => {

    const [boardGames, setBoardGames] = useState([])
    const [query, setQuery]           = useState("")


    const handleFormSubmit = (event) => {
        event.preventDefault();
        let newQuery = `?numPlayers=${event.target.plr_num.value}`
        setQuery(newQuery);
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
            <h1>Recommendations Container...</h1>
            <RecommendationsForm handleFormSubmit={handleFormSubmit}/>
            <GameGrid games={boardGames}/>

        </div>
    )
}

export default RecommendationsContainer;