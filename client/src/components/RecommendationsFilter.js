import {useEffect, useState} from "react"
import {Form, Dropdown, Header, Icon, Menu, Container} from "semantic-ui-react"

const RecommendationsFilter = ({selectedFilter, handleFilter, boardGames, handleSort}) => {

    const [sortedGames, setSortedGames] = useState([])

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
        setSortedGames(sorted);
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
        setSortedGames(sorted);
    }

    useEffect(()=> {
        if(selectedFilter === 'minPlayersAsc'|| selectedFilter === 'maxPlayersAsc' || selectedFilter === 'playTimeAsc' || selectedFilter === 'categoryAsc') {
            // setSortDirection("ascending")
            sortGamesAscending(selectedFilter);
            
        } else if(selectedFilter === 'minPlayersDesc'|| selectedFilter === 'maxPlayersDesc' || selectedFilter === 'playTimeDesc') { 
            // setSortDirection("descending")
            sortGamesDescending(selectedFilter);
        } else if(selectedFilter === "") {
            sortGamesAscending('categoryAsc')
        }
    }, [selectedFilter])

    useEffect(()=>{
        handleSort(sortedGames)
    }, [sortedGames])

    const filterOptions = [
        {
            key : "0", 
            value : '', 
            text : "all", 
            content: "All"
        },
        {
            key : 1, 
            value : "minPlayersAsc", 
            text: "Minimum Players (Low to High) ",
        }, 
        {
            key : 2,
            value : "minPlayersDesc", 
            text : "Minimum Players (High to Low)"
        },
        {
            key : 3, 
            value : "maxPlayersAsc", 
            text: "Maximum Players (Low to High)",
        }, 
        {
            key : 4,
            value : "maxPlayersDesc", 
            text : "Maximum Players (High to Low)"
        },
        {
            key : 5, 
            value : "playTimeAsc", 
            text: "Maximum Play Time (Low to High)",
        }, 
        {
            key : 6,
            value : "playTimeDesc", 
            text : "Maximum Play Time (High to Low)"
        },
    ]
    
    return (
       <>
        {/* <Form> 
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
             </Form.Field> */}
            <Header as='h4'>
            <Icon name='filter' />
            <Header.Content>
            Sort by{' '}
            <Dropdown
                header='Adjust filter'
                options={filterOptions}
                defaultValue={filterOptions[0].value}
                onChange={handleFilter}
                value={selectedFilter}
            />
            </Header.Content>
        </Header>
        {/* </Form>     */}
        </>
    )
}

export default RecommendationsFilter;