import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Score from "./components/Score";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };


// removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     // const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     // this.setState({ friends });
//     let chosenSports = []
//     chosenSports.push(id)
//     console.log(chosenSports)
// };

imageClickHandler = event => {
 
    console.log(event)
  
  
};
// programHandler = (event) => {
//   //console.log(event.target.value)
//   this.setState({program: event.target.value})
// }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="row">
        <Title></Title>
        <Score></Score>
      <div className="row">
        {this.state.friends.map(friend => (
          <FriendCard
            imageClickHandler={this.imageClickHandler}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
        </div>
      </div>
    );
  }

}
export default App;
