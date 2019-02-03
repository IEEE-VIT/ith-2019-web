import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
