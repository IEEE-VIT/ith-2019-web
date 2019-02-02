import React, { Component } from 'react';
import Header from './Pages/Header/Header';
import AboutC from './Pages/AboutC/AboutC';
import Navigation from './Components/Nav/Nav';
import Highlights from './Pages/Highlights/Highlights';
import AboutI from './Pages/AboutIEEE/AboutI';
import Contact from './Pages/Contact/Contact';
import Chatbox from './Components/Chatbox/Chatbox';

export default class LandingPage extends Component {
    render() {
      return (
        <div className='App'>
          <Chatbox/>
          <Navigation/>
          <Header/>
          <AboutC/>
          <Highlights/>
          <AboutI/>
          <Contact/>
        </div>
      );
    }
  }