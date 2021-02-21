import {useEffect, useState} from "react"
import {Form, Dropdown, Header, Icon, Menu, Container} from "semantic-ui-react"

const RecommendationsFilter = ({selectedFilter, handleFilter, boardGames, handleSort}) => {

  

    

    const filterOptions = [
        // {
        //     key : "0", 
        //     value : '', 
        //     text : "all", 
        //     content: "All"
        // },
        {
            key : 1, 
            value : "minPlayersAsc", 
            text: "Minimum Players (Low to High) ",
            icon: 'users'
        }, 
        {
            key : 2,
            value : "minPlayersDesc", 
            text : "Minimum Players (High to Low)",
            icon: 'users'
        },
        {
            key : 3, 
            value : "maxPlayersAsc", 
            text: "Maximum Players (Low to High)",
            icon: 'users'
        }, 
        {
            key : 4,
            value : "maxPlayersDesc", 
            text : "Maximum Players (High to Low)",
            icon: 'users'
        },
        {
            key : 5, 
            value : "playTimeAsc", 
            text: "Maximum Play Time (Low to High)",
            icon: 'clock'
        }, 
        {
            key : 6,
            value : "playTimeDesc", 
            text : "Maximum Play Time (High to Low)",
            icon: 'clock'
        },
    ]
    
    return (
       <>
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
    
        </>
    )
}

export default RecommendationsFilter;