import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className='App'>
      <Router>
        <Route path='/' component={LandingPage}/>
      </Router>
      </div>
    );
  }
}

export default App;
