import './App.css';
import { useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import RecommendationsContainer from './containers/RecommendationsContainer';
import SingleGameView from './components/SingleGameView';

function App() {

  return (
    <>
    <h1>Board Game Recommendations... for YOU! </h1>
      {/* <HeaderContainer /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={RecommendationsContainer} />
          <Route path="/single-game" component={SingleGameView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
