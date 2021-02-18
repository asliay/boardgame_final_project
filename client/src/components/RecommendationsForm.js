

const RecommendationsForm = ({handleFormSubmit}) => {

    // const resetForm = () => {
    //     document.getElementById("search_form").resetForm();      
    // }

    return (
        <div>
            <form id="search-form" onSubmit={handleFormSubmit}>
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
                    <option value="" selected="selected">Any</option>
                    <option value="family">Family</option>
                    <option value="party">Party</option>
                    <option value="strategy">Strategy</option>
                    <option value="thematic">Thematic</option>
                </select>
                <button type="submit" 
                        className="buttons"
                        // onClick={resetForm}
                        > Search </button>
            </form>
        </div>
    )
}

export default RecommendationsForm;

