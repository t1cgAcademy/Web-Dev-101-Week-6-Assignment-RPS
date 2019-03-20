import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.symbols = ['rock', 'paper', 'scissors'];
    this.state = {


      // set colorRed state to 'red'


      // set colorBlue state to 'blue'


      // set playerRed state to the last item in symbols array


      // set playerBlue state to the second item in symbols array


      // initialize a winner state of null value
    };
  }


  decideWinner = () => {
    // Below is an example of destructuring state.
    // Here you can see that playerBlue and playerRed were
    // extracted from this.state.  Now, instead of using
    // this.state.playerBlue and this.state.playerRed, you can
    // simply write playerBlue and playerRed
    const { playerBlue, playerRed } = this.state;


    // Write a conditional that returns the string "It's a draw !"
    // if the values of playerRed state and playerBlue states are equal


    // Write a conditional with three conditions.  If playerRed equals 'rock
    // and playerBlue equals 'scissors', or playerRed equals 'paper' and playerBlue
    // equals 'rock, or playerRed equals 'scissors' and playerBlue equals 'paper', then
    // return the string 'Red player wins !'
    // Any other possability should return the string 'Blue player wins !'
  };


  runGame = () => {
  


    // initialize counter that WILL be redefined to 0


    const myInterval = setInterval(() => {
      counter++;
      // add one to counter
      this.setState({
        playerRed: this.symbols[Math.floor(Math.random() * 3)],
        playerBlue: this.symbols[Math.floor(Math.random() * 3)],
        winner: '',
      });
      // set playerRed state to a random item in symbols array (Remember combined math functions used in previous lessons)
      // set playerBlue state to a random item in symbols array
      // set winner state to an empty string


      if (if the counter number is greater than 40) {
        clearInterval(myInterval);
        this.setState({ winner: this.decideWinner() });
        // set the state of winner to decideWinner function call
        // 
      }
    }, 100);
  };


  render() {
    return (
      <div className="App">
        <PlayerCard color={this.state.colorRed} symbol={this.state.playerRed} />
        {/* Add PlayerCard as custom html tag. Pass color prop defined by colorRed state.
        Pass symbol prop defined as playerRed state */}
        <PlayerCard color={this.state.colorBlue} symbol={this.state.playerBlue} />
        {/* Add another PlayerCard (Gotta love reusable components!).  Pass color prop defined
        by colorBlue state.  Pass symbol prop defined as playerRed state. */}
        <p>{this.state.winner}</p>
        {/* Add paragraph tag that displays the value of winner state */}
        <button onClick={this.runGame}>Run Game</button>
        {/* Add button with onClick set to call runGame (no bubble needed) */}
      </div>
    );
  }
}


export default App;