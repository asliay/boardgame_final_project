import {Grid, Segment, Button, Form, Icon, Divider} from "semantic-ui-react";
import {useState, useEffect} from "react";

const RecommendationsForm = ({handleFormSubmit, handleResetForm, boardGames}) => {

    const [categories, setCategories] = useState([]);
    const [numPlayers, setNumPlayers] = useState("");
    const [maxPlayingTime, setMaxPlayingTime] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    const getCategories = () => {
        console.log("getting categories..")
        fetch(`http://localhost:8080/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }

    useEffect(()=> {
        getCategories()
    }, [])

    const handleNumPlayers = (event) => {
        setNumPlayers(event.target.value)
    }

    const handleMaxPlayingTime = (event) => {
        setMaxPlayingTime(event.target.value)
    }

    const handleSelectedCategory = (event) => {
        setSelectedCategory(event.target.value)
    }

    const categoryOptions = categories.map((category)  => {
        return (
            <option value={category.name}>{category.name}</option>
        )
    })

    const resetAndClearForm = (event) => {
            handleResetForm(event);
            setNumPlayers("")
            setMaxPlayingTime("")
            setSelectedCategory("")
            // document.getElementById("search_form").reset();
            // event.target.reset();
        }

    return (
        <div>
            <Grid textAlign='center'>
            <Form onSubmit={handleFormSubmit} id="search_form">
                <Form.Group width="equal" inline>
                    <Form.Field>
                        <label forhtml="plr_num">Number of Players: </label>
                                <input type="number"
                                    id="plr_num" 
                                    name="plr_num"
                                    min="1"
                                    onChange={handleNumPlayers}
                                    value={numPlayers}
                                    placeholder="Any"
                                    autoFocus/>
                    </Form.Field>
                    <Form.Field>
                        <label forhtml="play_time">Max playing time: </label>
                                <input type="number"
                                    id="play_time"
                                    name="play_time"
                                    min="0"
                                    size='large'
                                    onChange={handleMaxPlayingTime}
                                    value={maxPlayingTime}
                                    placeholder="Any"
                                    />
                    </Form.Field>
                    <Form.Field>
                        <label>Category:</label>
                        <select name="category" id="category" onChange={handleSelectedCategory} value={selectedCategory}>
                                    <option value="" defaultValue="selected">Any</option>
                                    {categoryOptions}
                        </select>
                    </Form.Field>
                </Form.Group>
                <Segment>
                <Button animated type='submit' onMouseDown={e => e.preventDefault()}>
                    <Button.Content visible>Find Games</Button.Content>
                    <Button.Content hidden>
                        <Icon name='check' />
                    </Button.Content>
                </Button>
                <Button animated onClick={resetAndClearForm} onMouseDown={e => e.preventDefault()}>
                    <Button.Content visible>Reset Form</Button.Content>
                    <Button.Content hidden>
                        <Icon name='undo' />
                    </Button.Content>
                </Button>
                </Segment>
            </Form>
            </Grid>
        </div>
    )
}

// const categoryOptions = boardGames.filter((game)=> {
    //     let categories = []
    //     if (game.gameCategoryJoins) {
    //         game.gameCategoryJoins.forEach((join) => {
    //             console.log(join)
    //             if (categories.includes(join.category.name) === false) {
    //                 categories.push(join.category.name)
    //             }
    //         })
    //     }
    //     console.log(categories)
    // })

export default RecommendationsForm;

