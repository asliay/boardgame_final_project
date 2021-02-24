import {Button, Form, Icon} from "semantic-ui-react";
import {useState} from "react";
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
        event.preventDefault();
        postNewUser(newUser)
    }

    return (

        <Form onSubmit={onSubmit} id="new-booking-form">
            <Form.Group widths='equal'>
                <Form.Field>
                        <label forhtml="firstName">First name: </label>
                        <input id="firstName" onChange={onChange} placeholder="First name" required />
                </Form.Field>
                <Form.Field>
                        <label forhtml="lastName">Last name: </label>
                        <input id="lastName" onChange={onChange} placeholder="Last name" required/>
                </Form.Field>
                <Form.Field width={4}>
                        <label forhtml="dob">Date of Birth: </label>
                        <input type="date" id="dob" onChange={onChange} required />
            </Form.Field>
            </Form.Group>
                <Form.Group>
                <Form.Field width={8}>
                        <label forhtml="email">Email address: </label>
                        <input  type="email" id="email" onChange={onChange} placeholder="Email address"/>
                </Form.Field>
                <Form.Field width={4}>
                        <label forhtml="password">Password: </label>
                        <input  type="password" id="password" onChange={onChange} placeholder="Password" required/>
                </Form.Field>
            </Form.Group>
                <Button animated type='submit' onMouseDown={e => e.preventDefault()}>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='check' />
                    </Button.Content>
                </Button>
                <Button animated onMouseDown={e => e.preventDefault()}>
                    <Button.Content visible>Reset</Button.Content>
                    <Button.Content hidden>
                        <Icon name='undo' />
                    </Button.Content>
                </Button>
        </Form>
    )

}

export default NewUserForm;