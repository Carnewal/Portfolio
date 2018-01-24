import React, { Component } from 'react';
import './App.css';
import Head from './Head'
import Navigation from '../containers/Navigation'
import Portfolio from '../containers/Portfolio'
import Timeline from '../containers/Timeline'
import Home from './Home'


import {Route, Redirect} from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Redirect from="/*" to="/home" />
        <Route exact path="/portfolio" render={() => <Portfolio/>}/>
        <Route exact path="/timeline" render={() => <Timeline/>}/>
        <Route path="/home" render={() => <Home/>}/>

      </div>
    );
  }
}

export default App;
