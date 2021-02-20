import User from "../components/User";
import { useState, useEffect} from "react";
import { Container } from "semantic-ui-react";

const UserContainer = () => {

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
            <User user={user} userGames={user.ownedGames}/>
        </Container>
    )
}

export default UserContainer;