import './App.css';
import { useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import {Container, Button} from "semantic-ui-react";
import HeaderContainer from "./containers/HeaderContainer";
import RecommendationsContainer from './containers/RecommendationsContainer';
import SingleGameView from './components/SingleGameView';

function App() {

  const [query, setQuery] = useState("")
  const [recsString, setRecsString] = useState("Recommendations")
  const [selectedFilter, setSelectedFilter] = useState("")

  const handleQueryChange = (query) => {
    setQuery(query)
  }

  const handleRecsStringChange = (recs) => setRecsString(recs)

  const handleFilter = (event, data) => setSelectedFilter(data.value)

  const handleResetForm = (event) => {
    event.preventDefault();
    setQuery("");
    setRecsString("All results")
    setSelectedFilter("")
}



  
  return (
    <>
    <Router>
      <Container textAlign='center'>
      <Link to="/"><Button floated='left' size='large' circular icon='home'/></Link>
        {/* <h1>Board Game Recommendations... for YOU! </h1> */}
        <HeaderContainer />
          <Switch>
            <Route exact path="/"
                   render={()=><RecommendationsContainer 
                              query={query}
                              recsString={recsString}
                              selectedFilter={selectedFilter}
                              handleQueryChange={handleQueryChange}
                              handleResetForm={handleResetForm}
                              handleRecsStringChange={handleRecsStringChange}
                              handleFilter={handleFilter}
                               />}
                            />
            <Route path="/single-game" component={SingleGameView} />
          </Switch>
      </Container>
      </Router>
    </>
  );
}

export default App;
