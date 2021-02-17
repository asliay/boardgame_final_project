import './App.css';
import { useState, useEffect} from "react";
import HeaderContainer from "./containers/HeaderContainer";
import RecommendationsContainer from "./containers/RecommendationsContainer";

function App() {
  return (
    <>
    <h1>Header and any nav here! (need cool logo)</h1>
      {/* <HeaderContainer /> */}
      <RecommendationsContainer />
    </>
  );
}

export default App;
