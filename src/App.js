import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Board from './Components/Board';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
      	<NavBar/>
      	<div className="app-container">
      		<Board/>
      	</div>
      </div>
    );
  }
}

export default App;
