import React, { Component } from 'react';
import './App.css';
import Button from './containers/Message/Message.js'
import Answer from "./containers/Answer/Answer.js"

class App extends Component {
  render() {
    const appStyle = {
      textAlign: 'center'
    }
    const headerStyle = {
      backgroundColor: '#222',
      height: '10vh',
      padding: '20px',
      color: 'white',
    }
    const titleStyle = {
      fontSize: '1.5em'
    }
    const buttonStyle = {
      marginTop: '10vh'
    }
    return (
      <div className="App" style={appStyle}>
        <header className="App-header" style={headerStyle}>

          <h1 className="App-title" style={titleStyle}>Answer Back</h1>
        </header>
        <Button style={buttonStyle} />
        <Answer />
      </div>
    );
  }
}

export default App;
