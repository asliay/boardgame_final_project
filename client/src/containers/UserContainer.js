import User from "../components/User";
import { useState, useEffect} from "react";
import { Container } from "semantic-ui-react";
import NewUserForm from "../components/NewUserForm";

const UserContainer = ({boardGames}) => {

    const [isLoggedIn] = useState(false); // state to hard code whether user is logged in or not and test conditional rendering!

    const [user, setUser] = useState({})

    const getUser = () => {
        fetch(`http://localhost:8080/users/1`)
            .then(res => res.json())
            .then(data => setUser(data))
    }

    useEffect(()=>{
        getUser()
    }, []);

    return(
        <Container>
            {/* Line below is the conditional render of either User component or New User Form */}
            {/* {(isLoggedIn && <User user={user} userGames={user.ownedGames}/>) || <NewUserForm />} */}
            <NewUserForm />
            <User user={user} userGames={user.ownedGames}/>
        </Container>
    )
}

export default UserContainer;