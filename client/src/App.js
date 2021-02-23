import './App.css';

import { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Button} from "semantic-ui-react";
import { getBaseBoardGames, getQueryBoardGames } from "./helpers/BackEndServices";

import HeaderContainer from "./containers/HeaderContainer";
import RecommendationsContainer from './containers/RecommendationsContainer';
import UserContainer from './containers/UserContainer'
import SingleGameView from './components/SingleGameView';
import UserLoginForm from './components/UserLogInForm';
import NewUserForm from './components/NewUserForm';

function App() {

  // Use States.

  const [query, setQuery] = useState("")
  const [recsString, setRecsString] = useState("Recommendations")
  const [selectedFilter, setSelectedFilter] = useState("")
  const [baseBoardGames, setBaseBoardGames] = useState([])
  const [boardGames, setBoardGames] = useState([])
  const [sortedGames, setSortedGames] = useState([])
  const [loggedIn, setloggedIn] = useState(false);


  // State Handlers

  const handleSort = (sortedGames) => setBoardGames(sortedGames);

  const handleQueryChange = (query) => setQuery(query);

  const handleRecsStringChange = (recs) => setRecsString(recs);

  const handleFilter = (event, data) => setSelectedFilter(data.value);

  const handleResetForm = (event) => {
    event.preventDefault();
    setQuery("");
    setRecsString("Recommendations")
    setSelectedFilter("")
    setBoardGames(baseBoardGames)
  }

  // Sorts the sorted games state when given a filter string from recommendations filter. 

  const sortGames = (selectedFilter) => {
    let sorted = []
    const types = {
        minPlayersAsc : 'minPlayers',
        maxPlayersAsc : 'maxPlayers',
        playTimeAsc : 'playTime',
        categoryAsc : 'gameCategoryJoins[0].category.name',
        minPlayersDesc : 'minPlayers', 
        maxPlayersDesc : 'maxPlayers',
        playTimeDesc : 'playTime'
    }
    if(selectedFilter === 'minPlayersAsc'|| selectedFilter === 'maxPlayersAsc'
      || selectedFilter === 'playTimeAsc' || selectedFilter === 'categoryAsc') {
        const sortProperty = types[selectedFilter];
        sorted = [...boardGames].sort((a, b) => a[sortProperty] - b[sortProperty]);
    } else if (selectedFilter === 'minPlayersDesc'|| selectedFilter === 'maxPlayersDesc' 
              || selectedFilter === 'playTimeDesc') {
        const sortProperty = types[selectedFilter];
        sorted = [...boardGames].sort((a, b) => b[sortProperty] - a[sortProperty]);
    } else if (!selectedFilter) {
      return
    }
    setSortedGames(sorted);
  }

// Use Effects. 

useEffect(() => {
  getBaseBoardGames().then(data => setBaseBoardGames(data)) 
}, []);

useEffect(() => {
  getQueryBoardGames(query).then(data => setBoardGames(data))
}, [query]);

useEffect(() => {
  sortGames(selectedFilter)
}, [selectedFilter])

useEffect(() => {
  if(selectedFilter != ""){
    handleSort(sortedGames)
  }
}, [sortedGames, selectedFilter])
   

  return (
    <>
    <Router >
      <Container textAlign='center'>
      <HeaderContainer loggedIn={loggedIn}/>
      <br/>
          <Switch>
            <Route exact path="/"
                   render={()=><RecommendationsContainer 
                              sortedGames={sortedGames}
                              handleSort={handleSort}
                              recsString={recsString}
                              selectedFilter={selectedFilter}
                              handleQueryChange={handleQueryChange}
                              handleResetForm={handleResetForm}
                              handleRecsStringChange={handleRecsStringChange}
                              handleFilter={handleFilter}
                              setSelectedFilter={setSelectedFilter}
                              boardGames={boardGames}
                              
                               />}
                            />
            <Route path="/single-game" 
                   component={SingleGameView} />
            <Route path="/user" 
                   render={()=> <UserContainer
                               baseBoardGames={baseBoardGames} 
                                />} />
            <Route path="/login"
                  render ={()=><UserLoginForm />} />
            <Route path="/newuser"
                  render={()=> <NewUserForm />} />
          </Switch>
      </Container>
      </Router>
    </>
  );
}

export default App;
