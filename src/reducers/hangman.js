// src/reducers/hangman.js
import { randomWord } from '../lib/game'

//const redux = require('redux')

const initialState =
  {
    wordToGuess: randomWord(),
    lettersGuessed: []
  }

const reducer = (state = initialState, action = {}) => {
  const newLettersGuessed = state.lettersGuessed.concat(action.payload)
  switch (action.type) {
  case 'MAKE_GUESS': {
    return {wordToGuess:state.wordToGuess, lettersGuessed: newLettersGuessed}
  }
  case 'NEW_GAME': {
    return {wordToGuess:randomWord(), lettersGuessed: []}
  }
  default:
    //console.log(state,'initial')
    return state
  }
}

//const store = redux.createStore(reducer)
//console.log('Initial state of the store', store.getState())


export default reducer
