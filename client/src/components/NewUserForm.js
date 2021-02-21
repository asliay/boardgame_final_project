import {Grid, Segment, Button, Form, Icon, Divider} from "semantic-ui-react";
import {useState, useEffect} from "react";
import { postNewUser } from "../helpers/BackEndServices";

const NewUserForm = () => {

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        email: ""
    })

    const onChange = (event) => {
        newUser[event.target.id] = event.target.value;
        setNewUser(newUser);
    }

    const onSubmit = (event) => {
        // console.log("form data=:", newUser);
        event.preventDefault();
        postNewUser(newUser)
    }

    return (

        <Form onSubmit={onSubmit} id="new-booking-form">
            <Form.Group widths='equal'>
                <Form.Field>
                        <label forhtml="firstName">First name': </label>
                        <input id="firstName" onChange={onChange} placeholder="First name" required />
                </Form.Field>
                <Form.Field>
                        <label forhtml="lastName">Last name': </label>
                        <input id="lastName" onChange={onChange} placeholder="Last name" required/>
                </Form.Field>
                <Form.Field>
                        <label forhtml="dob">D.o.b.': </label>
                        <input type="date" id="dob" onChange={onChange} required />
                </Form.Field>
                <Form.Field>
                        <label forhtml="email">Email address': </label>
                        <input  type="email" id="email" onChange={onChange} placeholder="Email address" required/>
                </Form.Field>
            </Form.Group>
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