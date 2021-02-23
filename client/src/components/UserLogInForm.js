import {Button, Form, Icon} from "semantic-ui-react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const UserLoginForm = () => {

    const [userLogin, setUserLogin] = useState({
        username: "",
        password: "",
    })

    const onChange = (event) => {
        userLogin[event.target.id] = event.target.value;
        setUserLogin(userLogin);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        logInUser(userLogin)
    }

   


    return (
        <Form onSubmit={onSubmit} id="user-login-form">
            <Form.Group widths='equal'>
                <Form.Field>
                        <label forhtml="userName">Username: </label>
                        <input id="userName" onChange={onChange} placeholder="Username" required />
                </Form.Field>
                <Form.Field>
                        <label forhtml="password">Password: </label>
                        <input id="password" onChange={onChange} placeholder="Password" required/>
                </Form.Field>
                </Form.Group>
            <Button animated type='submit' onMouseDown={e => e.preventDefault()}>
                <Button.Content visible>Submit</Button.Content>
                <Button.Content hidden>
                    <Icon name='check' />
                </Button.Content>
            </Button>

            <p>Not yet a registered user? Sign up <Link to="/newuser">here...</Link></p>
        </Form>
    )
}

export default UserLoginForm