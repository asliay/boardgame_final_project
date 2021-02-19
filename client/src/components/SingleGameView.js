import {useState, useEffect} from "react"

const SingleGameView = (props) => {


    return (
        <div className="single-game-view">
            <h2> {props.location.game.name} ({props.location.game.releaseYear})</h2>
            <img src={props.location.game.boxImageURL} width="75%" height="75%" alt="Box art"/>
            <p>For {props.location.game.minPlayers}-{props.location.game.maxPlayers} Players</p>
            <p>Average Play Time: {props.location.game.playTime} minutes</p>
            <p>Category: {props.location.game.category}</p>
        </div>
    )
}

export default SingleGameView;