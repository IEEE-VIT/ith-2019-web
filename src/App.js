import React, { Component } from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import Navigation from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
      </div>
    );
  }
}

export default App;
