import React from "react";
import "./FriendCard.css";


const FriendCard = props => (

  <div className="img-container col-2">
    <img onClick={props.imageClickHandler} id={props.id} alt={props.name} src={props.image} />
  </div>

);

export default FriendCard;
