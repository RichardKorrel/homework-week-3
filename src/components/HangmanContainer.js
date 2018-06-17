// src/components/HangmanContainer.js

import React, {PureComponent} from 'react'
import Hangman from './Hangman'
import { connect } from 'react-redux'
import { showGuess, wrongGuessCount, isWinner } from '../lib/game'

class HangmanContainer extends PureComponent {

  // Define the max guesses
  maxLettersToGuess = () => {
    return 7
  }

  guessLetter = (userInput) => {
    if (wrongGuessCount(this.props.word,this.props.letters) >=
        this.maxLettersToGuess() ||
        isWinner(this.props.word,this.props.letters))
      // There is a looser or a winner ->
      // game is over, ignore further input
      return

    // Transform the user input to just one lower case letter
    const letter = userInput[0].toLowerCase()

    if (letter === ' ')
      // Letter is space -> ignore the input
      return

    if (this.props.letters.filter(guessed => guessed===letter).length === 1)
      // Letter already guessed -> ignore the input
      return

    // Dispatch action 'MAKE_GUESS' to the store with the letter input
    this.props.dispatch({
      type: 'MAKE_GUESS',
      payload: letter
    })
  }

  newGame = () => {
    // Dispatch the action 'NEW_GAME' to the store with an empty string
    this.props.dispatch({
      type: 'NEW_GAME',
      payload: ''
    })
  }

  youWin = (word) => {
    return('You win, the words was indeed: ' + word)
  }

  youLoose = (word) => {
    return('You loose, the words was: ' + word)
  }

  warnUser = (guessesLeft) => {
    return ('Number of guesses left: ' + guessesLeft)
  }

  gameMessage = (word,letters) => {
    // Generate a game message to show
    if (isWinner(word,letters))
      // the user he has won
      return this.youWin(word)
    const wrongGuesses = wrongGuessCount(word,letters)
    if (wrongGuesses >= this.maxLettersToGuess())
      // the user has lost
      return this.youLoose(word)
    else
      // the user has still some guesses to make
      return this.warnUser(this.maxLettersToGuess() - wrongGuesses)
  }

  render() {
    // Pass on the required info to the display component Hangman
    return <Hangman
     wordGuessedSofar={showGuess(this.props.word,this.props.letters)} letters={this.props.letters} guessLetter={this.guessLetter} wrongGuessCount={wrongGuessCount(this.props.word,this.props.letters)}
     gameMessage={this.gameMessage(this.props.word,this.props.letters)}
     newGame={this.newGame}
    />
  }
}

const mapStateToProps = (state) => {
  // Map the store state wordToGuess and lettersGuessed to the local props
  // word and letters
  return {
    word: state.hangman.wordToGuess,
    letters: state.hangman.lettersGuessed
  }
}

export default connect(mapStateToProps)(HangmanContainer)
