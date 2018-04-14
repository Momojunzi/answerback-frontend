import React, { Component } from 'react';
import './App.css';
import Button from './containers/Message/Message.js'
import Answer from "./containers/Answer/Answer.js"

class App extends Component {
  render() {
    const buttonStyle = {
      marginTop: '10vh'
    }
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Answer Back</h1>
        </header>
        <Button style={buttonStyle} />
        <Answer />
      </div>
    );
  }
}

export default App;
