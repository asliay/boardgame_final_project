import './App.css';
import { useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container, Button} from "semantic-ui-react";
import HeaderContainer from "./containers/HeaderContainer";
import RecommendationsContainer from './containers/RecommendationsContainer';
import SingleGameView from './components/SingleGameView';

function App() {

  return (
    <>
      <Container textAlign='center'>
        <Button href='/' floated='left' size='large' circular icon='home' />
        <h1>Board Game Recommendations... for YOU! </h1>
        {/* <HeaderContainer /> */}
          <Router>
          <Switch>
            <Route exact path="/" component={RecommendationsContainer} />
            <Route path="/single-game" component={SingleGameView} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
