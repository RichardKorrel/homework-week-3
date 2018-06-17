// src/components/Hangman.js

import React from 'react'
import './Hangman.css'

export default class Hangman extends React.PureComponent {

  // Handle the form input and put in local state
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  // Handle the submit of the user ipnput
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.userInput) {
      // If no empty input call the guessletter
      // function with the user input as parameter
      this.props.guessLetter(
        this.state.userInput
      )
    }
    else console.log('empty input')
    // Clear the input field of the guess letter form
    document.forms["guessletter"].reset();
  }

  render() {
    return (
      // Return the Hangman page for the hangman game
      <div className="hangman">
        <h1>Hangman game</h1>
        <h2>Word to guess: {this.props.wordGuessedSofar}</h2>
        <h2>Letters guessed sofar: {this.props.letters}</h2>
        <h2>Number of wrong letters guessed: {this.props.wrongGuessCount}</h2>
        <h2>{this.props.gameMessage}</h2>
        <form id='guessletter' onSubmit={this.handleSubmit}>
          <label>
            Enter a letter:
            <input id='input' type="text" name="userInput" onChange={this.handleChange}/>
          </label>
          <input id='submit' type="submit" value="Make the guess" />
        </form>
        <h2>
          <button id='newgame' onClick={() => this.props.newGame()}>Start a new Game</button>
        </h2>
      </div>
    )
  }
}
