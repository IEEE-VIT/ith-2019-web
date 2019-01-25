import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Pages/MainPage/Main';
import Navigation from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Main/>
      </div>
    );
  }
}

export default App;
