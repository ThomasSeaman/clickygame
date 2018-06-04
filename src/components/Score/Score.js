import React from "react";
import "./Score.css";

const Score = props => (

    <div className="row scoreRow">
    <h1 className="score col-12">Current Score: {props.score}| High Score: {props.highScore} </h1>
    </div>
)

export default Score;
