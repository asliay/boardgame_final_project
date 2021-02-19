import './App.css';
import { useState, useEffect} from "react";
import {Container, Button} from "semantic-ui-react";
import { useRoutes } from "hookrouter"
import Routes from "./services/routes"
import HeaderContainer from "./containers/HeaderContainer";

function App() {

  const routeResult = useRoutes(Routes)


  return (
    <>
      <Container textAlign='center'>
      <Button href='/' floated='left' size='large' circular icon='home' />
        <h1>Board Game Recommendations... for YOU! </h1>
        {/* <HeaderContainer /> */}
        {routeResult}
      </Container>
    </>
  );
}

export default App;
