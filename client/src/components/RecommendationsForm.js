

const RecommendationsForm = ({handleFormSubmit}) => {

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
                <button type="submit" 
                        className="buttons"> Search </button>
            </form>
        </div>
    )
}

export default RecommendationsForm;

