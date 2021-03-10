import React from 'react';
import './../src/styles.css';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Project from './Project';


function App() {

  return (
    <Router>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/project" exact component={Project}/>
        </Switch>
    </Router>

  );
}

export default App;
