import {Grid,Container, Button, Form, Icon} from "semantic-ui-react";

const RecommendationsForm = ({handleFormSubmit}) => {

    // const resetForm = () => {
    //     document.getElementById("search_form").resetForm();      
    // }

    return (
        <div>
            {/* <form id="search-form" onSubmit={handleFormSubmit}>
                <label forhtml="plr_num">Number of Players: </label>
                <input type="number" 
                       id="plr_num" 
                       name="plr_num"
                       min="1"
                       max="25"
                       autoFocus
                       />
                <br/>
                <label forhtml="play_time">Max playing time: </label>
                <input type="number"
                       id="play_time"
                       name="play_time"
                       min="0"
                       />
                <br/>
                <select name="category" id="category">
                    <option value="" defaultValue="selected">Any</option>
                    <option value="family">Family</option>
                    <option value="party">Party</option>
                    <option value="strategy">Strategy</option>
                    <option value="thematic">Thematic</option>
                </select>
                <button type="submit" 
                        className="buttons"
                        // onClick={resetForm}
                        > Search </button>
            </form> */}
        <Grid centered>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group width="equal" inline>
            <Form.Field>
            <label forhtml="plr_num">Number of Players: </label>
                    <input type="number"
                        id="plr_num" 
                        name="plr_num"
                        min="1"
                        max="25"
                        autoFocus/>
            </Form.Field>
            <Form.Field>
            <label forhtml="play_time">Max playing time: </label>
                    <input type="number"
                        id="play_time"
                        name="play_time"
                        min="0"
                        />
            </Form.Field>
            <Form.Field>
                <select name="category" id="category">
                                <option value="" defaultValue="selected">Any</option>
                                <option value="family">Family</option>
                                <option value="party">Party</option>
                                <option value="strategy">Strategy</option>
                                <option value="thematic">Thematic</option>
                </select>
            </Form.Field>
            </Form.Group>
            <Button animated type='submit' onMouseDown={e => e.preventDefault()}>
                <Button.Content visible>Recommend Games</Button.Content>
                <Button.Content hidden>
                    <Icon name='check' />
                </Button.Content>
            </Button>
            {/* <Button type='submit'>Gimme Those Games!</Button> */}
        </Form>
        </Grid>
        </div>
    )
}

export default RecommendationsForm;

