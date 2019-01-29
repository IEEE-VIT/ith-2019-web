import React, { Component } from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import AboutC from './Pages/AboutC/AboutC';
import Navigation from './Components/Nav/Nav';
import Highlights from './Pages/Highlights/Highlights';
import AboutI from './Pages/AboutIEEE/AboutI';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation/>
        <Header/>
        <AboutC/>
        <Highlights/>
        <AboutI/>
      </div>
    );
  }
}

export default App;
