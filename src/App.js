import React, { Component } from 'react';
import logo from './asset/logo.svg';
import './css/App.css';
import Todo from './components/todo.jsx';

class App extends Component {

  // Rendering -------------------------------
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* TODO List*/}
          <Todo /> 
    
        </header>
      </div>
    );
  }
}

export default App;
