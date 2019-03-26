import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { message: {}}
  }
  componentWillMount() {
    fetch('/api')
      .then(response => response.json())
      .then(data => this.setState({ message: data.message}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.message.length > 0 && 
              <span>
                {this.state.message}
              </span>
            }
          </a>
        </header>
      </div>
    );
  }
}

export default App;
