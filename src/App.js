import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Score from "./components/Score";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    chosenSports: [],
    score: 0,
    highScore: 0
  };

  scoreKeeper = () => {

    if (this.state.score >= this.state.highScore) {
      this.setState({
        highScore: this.state.highScore + 1,
        score: this.state.score + 1
      })
    } if (this.state.score === 11) {
      alert("Winner! What a memory you have.")
      this.resetGame()
    }
    else {
      this.setState({ score: this.state.score + 1 })
    }
  }

  resetGame = () => {
    this.setState({ score: 0 })
    this.setState({ chosenSports: [] })
  }

  shuffle = id => {
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    this.setState({ friends });
  }

  imageClickHandler = event => {

    const { id } = event.target

    if (this.state.chosenSports.indexOf(id) === -1) {
      this.state.chosenSports.push(id)
      this.scoreKeeper()
      this.shuffle()
    } else {
      alert("you lose...")
      this.resetGame()
    }
  };

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
      </div>
    );
  }
}
export default App;