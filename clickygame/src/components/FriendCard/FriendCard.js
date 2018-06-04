import React from "react";
import "./FriendCard.css";

let chosenSports = []

const FriendCard = props => (

    <div className="img-container">
    <button onClick={() => props.removeFriend(props.id)} className="remove">
      <img alt={props.name} src={props.image} value={props.id} href={props.id}/>
    </button>
    </div>
  
);

export default FriendCard;
