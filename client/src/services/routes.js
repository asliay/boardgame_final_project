import SingleGameView from "../components/SingleGameView";
import RecommendationsContainer from "../containers/RecommendationsContainer";

const routes = {
    "/" : () => <RecommendationsContainer />,
    "/board-games/:id" : ({id}) => <SingleGameView id={id} />
}

export default routes;