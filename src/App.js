import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import WelcomeContainer from './components/WelcomeContainer'
import HangmanContainer from './components/HangmanContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/hangman" component={HangmanContainer} />
        </main>
      </div>
    );
  }
}

export default App;
