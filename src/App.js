import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.symbols = ['rock', 'paper', 'scissors'];
    this.state = {
      colorRed: 'red',
      colorBlue: 'blue',
      playerRed: this.symbols[2],
      playerBlue: this.symbols[1],
      winner: null,
    };
  }

  decideWinner = () => {
    const { playerBlue, playerRed } = this.state;
    if (playerRed === playerBlue) {
      return "It's a draw !";
    }
    if (
      (playerRed === 'rock' && playerBlue === 'scissors') ||
      (playerRed === 'paper' && playerBlue === 'rock') ||
      (playerRed === 'scissors' && playerBlue === 'paper')
    ) {
      return 'Red player wins !';
    }
    return 'Blue player wins !';
  };

  runGame = () => {
    // const index = Math.floor(Math.random() * 3);
    let counter = 0;
    const myInterval = setInterval(() => {
      counter++;
      this.setState({
        playerRed: this.symbols[Math.floor(Math.random() * 3)],
        playerBlue: this.symbols[Math.floor(Math.random() * 3)],
        winner: '',
      });
      if (counter > 40) {
        clearInterval(myInterval);
        this.setState({ winner: this.decideWinner() });
      }
    }, 100);
  };

  render() {
    return (
      <div className="App">
        <PlayerCard color={this.state.colorRed} symbol={this.state.playerRed} />
        <PlayerCard color={this.state.colorBlue} symbol={this.state.playerBlue} />
        <p>{this.state.winner}</p>
        <button onClick={this.runGame}>Run Game</button>
      </div>
    );
  }
}

export default App;
