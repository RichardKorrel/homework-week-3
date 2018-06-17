// src/components/Welcome.js

import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome () {
  return (
    // Return the Welcome page for the hangman game
    // with a link to the hangman page where the actual
    // game is played
    <div className="welcome">
      <h1>Welcome to Hangman</h1>
      <h2> <Link to={ '/hangman/' }>Click on this link to start the game</Link> </h2>
    </div>
  )
}
