import React, { Component } from 'react';
import Content from './components/Content';
import './css/App.css';

class App extends Component {

  // Rendering -------------------------------
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
