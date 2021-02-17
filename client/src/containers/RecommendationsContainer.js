import { useState, useEffect} from "react";
import GameGrid from "../components/GameGrid";
import RecommendationsForm from "../components/RecommendationsForm";

const RecommendationsContainer = () => {

    const [boardGames, setBoardGames] = useState([])

    const getBoardGames = () => {
        console.log("getting data from backend");
        fetch(`http://localhost:8080/board-games`)
            .then(res => res.json())
            .then(data => setBoardGames(data))
           
    }

    useEffect(() =>{
        getBoardGames()
    }, []);

    return(
        <div>
            <h1>Recommendations Container...</h1>
            <RecommendationsForm />
            <GameGrid />

        </div>
    )
}

export default RecommendationsContainer;