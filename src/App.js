import React, { Component } from 'react';
import Content from './components/Content';
// import logo from './asset/logo.svg';
import './css/list.css';
import './css/App.css';

class App extends Component {

  // Rendering ------------------------------- <img src={logo} className="App-logo" alt="logo" />
  render() {
    return (
      <div className="App">
        <header className="App-header">

          {/* Content */}
          <Content />

        </header>
      </div>
    );
  }
}

export default App;
