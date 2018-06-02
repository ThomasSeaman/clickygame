import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
 
    <div className="img-container">
      <img alt={props.name} src={props.image} value={props.id} href={props.id}/>
    </div>
  
);

export default FriendCard;
