import { useState, useEffect} from "react";
import { Container } from "semantic-ui-react";

import User from "../components/User";
import NewUserForm from "../components/NewUserForm";

const UserContainer = ({user, baseBoardGames}) => {

    const [isLoggedIn] = useState(false); // state to hard code whether user is logged in or not and test conditional rendering!



    return(
        <Container>
            {/* Line below is the conditional render of either User component or New User Form */}
            {/* {(isLoggedIn && <User user={user} userGames={user.ownedGames}/>) || <NewUserForm />} */}
            <User user={user}  
                  baseBoardGames={baseBoardGames}/>
        </Container>
    )
}

export default UserContainer;