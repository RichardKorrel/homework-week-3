// src/actions/game.js

// Set  the action creator constant NEW_GAME
export const NEW_GAME = 'NEW_GAME'

// Define the action creator newGame
export function newGame() {
  return {
    type: NEW_GAME,
    payload: ' '
  }
}

// Set  the action creator constant MAKE_GUESS
export const MAKE_GUESS = 'MAKE_GUESS'

// Define the action creator makeGuess
export function makeGuess(letter) {
  return {
    type: MAKE_GUESS,
    payload: letter
  }
}
