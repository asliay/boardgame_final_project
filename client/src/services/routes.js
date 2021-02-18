import SingleGameView from "../components/SingleGameView";
import RecommendationsContainer from "../containers/RecommendationsContainer";

const routes = {
    "/" : () => <RecommendationsContainer />,
    "/board-games/:id" : ({id}) => <SingleGameView id={id} />,
    "/single-game" : () => (game) => <SingleGameView game={game} />
}

export default routes;