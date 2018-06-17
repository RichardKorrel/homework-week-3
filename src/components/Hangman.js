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

  // Handle the submit of the user input
  handleSubmit = (event) => {
    // if user input is null don't do anything
    if (this.state.userInput === null)
      return
    event.preventDefault()

    // Call the guessletter function with
    // the user input as parameter
    this.props.guessLetter(this.state.userInput)

    // Clear the form and userInput value
    document.forms["guessletter"].reset()
    this.setState({
      userInput: ' '
    });
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
