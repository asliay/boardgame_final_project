import './App.css';

import { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Button} from "semantic-ui-react";
import { getBaseBoardGames, getQueryBoardGames, getUser } from "./helpers/BackEndServices";
import { sortGames } from "./helpers/FrontEndHelpers";

import HeaderContainer from "./containers/HeaderContainer";
import RecommendationsContainer from './containers/RecommendationsContainer';
import UserContainer from './containers/UserContainer'
import SingleGameView from './components/SingleGameView';
import UserLoginForm from './components/UserLogInForm';
import NewUserForm from './components/NewUserForm';

function App() {

  // Use States.

  // Filters
  const [query, setQuery] = useState("")
  const [recsString, setRecsString] = useState("Recommendations")
  const [selectedFilter, setSelectedFilter] = useState("")
  
  // Displays 
  const [baseBoardGames, setBaseBoardGames] = useState([])
  const [boardGames, setBoardGames] = useState([])
  const [sortedGames, setSortedGames] = useState([])

  // User States 
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null)


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

  // Use Effects. 

  useEffect(() => {
    // getUser(1).then(data => setUser(data));
    getBaseBoardGames().then(data => setBaseBoardGames(data)) 
  }, []);

  useEffect(() => {
    getQueryBoardGames(query).then(data => setBoardGames(data))
  }, [query]);

  useEffect(() => {
    sortGames(selectedFilter, boardGames, setSortedGames)
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
      <HeaderContainer loggedIn={loggedIn} user={user}/>
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
                              setUser={setUser}
                              boardGames={boardGames}
                              user={user}
                               />}
                            />
            <Route path="/single-game" 
                   component={SingleGameView} />
            <Route path="/user" 
                   render={()=> <UserContainer
                                user={user}
                                baseBoardGames={baseBoardGames} 
                                setUser={setUser}
                                />} />
            <Route path="/login"
                  render ={()=><UserLoginForm 
                                setUser={setUser}
                                setLoggedIn={setLoggedIn}/>} />
            <Route path="/newuser"
                  render={()=> <NewUserForm />} />
          </Switch>
      </Container>
      </Router>
    </>
  );
}

export default App;
