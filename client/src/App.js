import './App.css';
import { useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container, Button} from "semantic-ui-react";
import HeaderContainer from "./containers/HeaderContainer";
import RecommendationsContainer from './containers/RecommendationsContainer';
import UserContainer from './containers/UserContainer'
import SingleGameView from './components/SingleGameView';

function App() {

  const [query, setQuery] = useState("")
  const [recsString, setRecsString] = useState("Recommendations")

  const handleQueryChange = (query) => {
    setQuery(query)
  }

  const handleRecsStringChange = (recs) => setRecsString(recs)

  const handleResetForm = (event) => {
    event.preventDefault();
    setQuery("");
    setRecsString("All results")
    
}

  
  return (
    <>
    <Router >
      <Container textAlign='center'>
      <HeaderContainer />
      <br/>
          <Switch>
            <Route exact path="/"
                   render={()=><RecommendationsContainer 
                              query={query}
                              recsString={recsString}
                              handleQueryChange={handleQueryChange}
                              handleResetForm={handleResetForm}
                              handleRecsStringChange={handleRecsStringChange}
                               />}
                            />
            <Route path="/single-game" component={SingleGameView} />
            <Route path="/user" component={UserContainer} />
          </Switch>
      </Container>
      </Router>
    </>
  );
}

export default App;
