import React, { Component } from 'react';
import Header from './Pages/Header/Header';
import AboutC from './Pages/AboutC/AboutC';
import Navigation from './Components/Nav/Nav';
import Highlights from './Pages/Highlights/Highlights';
import AboutI from './Pages/AboutIEEE/AboutI';
import Contact from './Pages/Contact/Contact';
import Chatbox from './Components/Chatbox/Chatbox';
import Sponsors from './Pages/Sponsors/Sponsors';
export default class LandingPage extends Component {
    render() {
      return (
        <div className='App'>
          <Chatbox/>
          <Navigation/>
          <Header/>
          <AboutC/>
          <Sponsors/>
          <Highlights/>
          <AboutI/>
          <Contact/>
        </div>
      );
    }
  }