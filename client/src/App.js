import './App.css';
import { useState, useEffect} from "react";
import { useRoutes } from "hookrouter"
import Routes from "./services/routes"
import HeaderContainer from "./containers/HeaderContainer";

function App() {

  const routeResult = useRoutes(Routes)


  return (
    <>
    <h1>Board Game Recommendations... for YOU! </h1>
      {/* <HeaderContainer /> */}
      {routeResult}
    </>
  );
}

export default App;
