import User from "../components/User";
import { useState, useEffect} from "react";
import { Container } from "semantic-ui-react";
import NewUserForm from "../components/NewUserForm";

const UserContainer = ({boardGames}) => {

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
            <NewUserForm />
            <User user={user} userGames={user.ownedGames} boardGames={boardGames}/>
        </Container>
    )
}

export default UserContainer;