import React, { Component } from 'react';
import Content from './components/Content';
import logo from './asset/logo.svg';
import './css/list.css';
import './css/App.css';

class App extends Component {

  // Rendering -------------------------------
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* Content */}
          <Content />

        </header>
      </div>
    );
  }
}

export default App;
