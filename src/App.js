import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Score from "./components/Score";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    chosenSports: [],
    score: 0,
    highScore: 0
  };


scoreKeeper = () => {

  if(this.state.score >= this.state.highScore){
    this.setState({
      highScore: this.state.highScore +1,
      score: this.state.score +1
    })
    console.log('if'); 
  }if(this.state.score == 11){
    alert("Winner!")
    this.resetGame()
  } 
  if(this.state.chosenSports[0] === this.state.chosenSports[1]){
    alert("You Lost!")
    this.resetGame()
  }
  else {
    this.setState({score: this.state.score +1 })
    console.log('else');
  }
}  

resetGame = () => {
  this.setState({score:0})
  this.setState({chosenSports:[]})
}

shuffle = id => {
  // Shuffle the array
  for (let i = friends.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  // Update state with new array
  this.setState({ friends });
}
// removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     // const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     // this.setState({ friends });
//     let chosenSports = []
//     console.log(chosenSports)
// };

imageClickHandler = event => {
  
  const { id, alt } = event.target

  this.state.chosenSports.push(id)
  this.scoreKeeper()
  this.shuffle()
};
// logMe(){
//   console.log(this.state);
  
// }
// programHandler = (event) => {
//   //console.log(event.target.value)
//   this.setState({program: event.target.value})
// }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="row">
        <Title></Title>
        <Score score={this.state.score} highScore={this.state.highScore}></Score>
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
        {/* <button onClick={() => this.logMe()}>Log Me</button> */}
        {/* <button onClick={this.logMe.bind(this)}>Log Me</button> */}
      </div>
    );
  }

}
export default App;
