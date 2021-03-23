import { useState, useEffect} from "react";
import { Container } from "semantic-ui-react";

import User from "../components/User";
import NewUserForm from "../components/NewUserForm";

const UserContainer = ({user, baseBoardGames, setUser}) => {


    return(
        <Container>
            {/* Line below is the conditional render of either User component or New User Form */}
            {/* {(isLoggedIn && <User user={user} userGames={user.ownedGames}/>) || <NewUserForm />} */}
            <User user={user}  
                  baseBoardGames={baseBoardGames}
                  setUser={setUser}/>
        </Container>
    )
}

export default UserContainer;