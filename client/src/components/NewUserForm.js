import {Grid, Segment, Button, Form, Icon, Divider} from "semantic-ui-react";
import {useState, useEffect} from "react";
import postNewUser from "../helpers/BackEndServices";

const NewUserForm = () => {

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: ""
    })

    const onChange = (event) => {
        newUser[event.target.id] = event.target.value;
        setNewUser(newUser);
    }

    const onSubmit = (event) => {
        console.log("form data=:", newUser);
        event.preventDefault();
        postNewUser(newUser).then(() =>{
            adduser(newUser);
        })
    }

    return (

        <Form onSubmit={onSubmit} id="new-booking-form">
                <Form.Field>
                        <label forhtml="firstName">First name': </label>
                        <input id="firstName" onChange={onChange} placeholder="First name" />
                </Form.Field>
                <Form.Field>
                        <label forhtml="lastName">Last name': </label>
                        <input id="lastName" onChange={onChange} placeholder="Last name" />
                </Form.Field>
                <Form.Field>
                        <label forhtml="email">Email address': </label>
                        <input id="email" onChange={onChange} placeholder="Email address" />
                </Form.Field>
                <Button animated type='submit' onMouseDown={e => e.preventDefault()}>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='check' />
                    </Button.Content>
                </Button>
        </Form>
    )

}

export default NewUserForm;