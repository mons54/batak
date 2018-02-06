import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div class="board">
          <div class="card card--heart card--10">
            <div class="card-before"></div>
            <div class="card-symbol"></div>
            <div class="card-after"></div>
          </div>
          <div class="card card--diamond card--13">
            <div class="card-before"></div>
            <div class="card-symbol"></div>
            <div class="card-after"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
