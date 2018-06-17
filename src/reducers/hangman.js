// src/reducers/hangman.js
// Import the randomWord function from the game library
import { randomWord } from '../lib/game'
// Import the action creator constants NEW_GAME and MAKE_GUESS
import { NEW_GAME, MAKE_GUESS } from '../actions/game'

// Set the initial state variables for hangman
// with a new random word from the game library and
// an empty guessed letter array
const initialState =
  {
    wordToGuess: randomWord(),
    lettersGuessed: []
  }

// Define the state tranformation actions
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MAKE_GUESS: {
      // Add the new guessed letter to the already guessed letters
      const newLettersGuessed = state.lettersGuessed.concat(action.payload)
      return {wordToGuess:state.wordToGuess, lettersGuessed: newLettersGuessed}
    }
    case NEW_GAME: {
      // Initialize the state variables, with a new random
      // word from the game library and an empty guessed letter array
      return {wordToGuess:randomWord(), lettersGuessed: []}
    }
    default:
      // Return the initial/default state
      return state
    }
}

//const store = redux.createStore(reducer)
//console.log('Initial state of the store', store.getState())

export default reducer
