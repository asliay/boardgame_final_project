import {useEffect, useState} from "react"
import {Form} from "semantic-ui-react"

const RecommendationsFilter = ({selectedFilter, handleFilter, boardGames, setBoardGames}) => {

    const [sortedGame, setSortedGames] = useState([])

    const sortGamesAscending = (type) => {
        const types = {
            minPlayersAsc : 'minPlayers',
            maxPlayersAsc : 'maxPlayers',
            playTimeAsc : 'playTime',
            categoryAsc : 'gameCategoryJoins[0].category.name'
        }
        const sortProperty = types[type];
        const sorted = [...boardGames].sort((a, b) => a[sortProperty] - b[sortProperty]);
        console.log(sorted);
        setBoardGames(sorted);
    }

    const sortGamesDescending = (type) => {
        const types = {
            minPlayersDesc : 'minPlayers', 
            maxPlayersDesc : 'maxPlayers',
            playTimeDesc : 'playTime'
        }
        const sortProperty = types[type];
        const sorted = [...boardGames].sort((a, b) => b[sortProperty] - a[sortProperty]);
        console.log(sorted);
        setBoardGames(sorted);
    }

    useEffect(()=> {
        if(selectedFilter === 'minPlayersAsc'|| selectedFilter === 'maxPlayersAsc' || selectedFilter === 'playTimeAsc' || selectedFilter === 'categoryAsc') {
            // setSortDirection("ascending")
            sortGamesAscending(selectedFilter);
            
        } else if(selectedFilter === 'minPlayersDesc'|| selectedFilter === 'maxPlayersDesc' || selectedFilter === 'playTimeDesc') { 
            // setSortDirection("descending")
            sortGamesDescending(selectedFilter);
        }
    }, [selectedFilter])


    return (
        <Form>
            <Form.Field>
                <select onChange={handleFilter} value={selectedFilter}>
                    <option defaultValue='selected' value="">All Results</option>
                    <option value='minPlayersAsc'>Sort by # Minimum Players Ascending</option>
                    <option value='minPlayersDesc'>Sort by # Minimum Players Descending</option>
                    <option value='maxPlayersAsc'>Sort by # Max Players Ascending</option>
                    <option value='maxPlayersDesc'>Sort by # Max Players Descending</option>
                    <option value='playTimeAsc'>Sort by Playing Time Ascending</option>
                    <option value='playTimeDesc'>Sort by Playing Time Descending</option>
                    <option value='categoryAsc'>Sort by Category</option>
                </select>
            </Form.Field>
        </Form>    
    )
}

export default RecommendationsFilter;