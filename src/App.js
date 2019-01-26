import React, { Component } from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import AboutC from './Pages/AboutC/AboutC';
import Navigation from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation/>
        <Header/>
        <AboutC/>
      </div>
    );
  }
}

export default App;
