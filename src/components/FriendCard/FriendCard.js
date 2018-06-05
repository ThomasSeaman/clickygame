import React from "react";
import "./FriendCard.css";


const FriendCard = props => (

    <div className="img-container col-2">
    {/* <button onClick={(selectedHandler)}> */}
      {/* <img onClick={() => props.imageClickHandler(props.id)} alt={props.name} src={props.image} value={props.id}/> */}
      <img onClick={props.imageClickHandler} id={props.id} alt={props.name} src={props.image}/>

    {/* </button> */}
     </div>
  
);

export default FriendCard;
